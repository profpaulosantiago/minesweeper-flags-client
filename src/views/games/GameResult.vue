<template>
  <v-dialog
    v-model="showResult"
    persistent
    :fullscreen="$vuetify.breakpoint.xsOnly"
    class="show-result-dialog"
  >
    <v-card>
      <v-card-title class="headline">
        <span class="you" v-if="isPlaying">You&nbsp;</span>
        <span class="you" v-else>{{ winnerName }}&nbsp;</span>
        <span v-if="winner">won</span>
        <span v-if="!winner">
          <span>lost&nbsp;</span>
          <v-icon>mood_bad</v-icon>
        </span>
      </v-card-title>
      <v-card-text>
        <span>The match has ended with scores:</span>
        <table>
          <tr v-for="(player, index) in game.playerData" :key="index">
            <td>{{ player.player.controller.name }}</td>
            <td>{{ player.player.score }}</td>
          </tr>
        </table>
      </v-card-text>
      <v-card-actions>
        <v-btn color="info" @click="playAgain()" :ripple="false">
          Play again
        </v-btn>
        <v-btn color="info" @click="copyResults()" :ripple="false">Copy results</v-btn>
        <v-btn color="info" @click="copyMap()" :ripple="false">Copy map</v-btn>
        <v-btn color="warning" @click="showResult = false" :ripple="false">
          View Map
        </v-btn>
        <v-btn color="error" to="/lobby" :ripple="false">Back to Lobby</v-btn>
      </v-card-actions>
      <Invites />
    </v-card>
  </v-dialog>
</template>
<script>
import Invites from "../lobby/Invites";
import { mapState } from "vuex";
import gameTools from "./gameTools";

export default {
  name: "GameResult",
  props: ["game"],
  data() {
    return {
      showResult: false
    };
  },
  components: { Invites },
  methods: {
    copyResults() {
      let game = this.game;
      let players = game.map.players.toArray();
      let header = ""
      for (let p of players) {
        if (header.length > 0) header += " vs. "
        header += p.controller.name;
      }
      let scores = ""
      for (let p of players) {
        if (scores.length > 0) scores += " - "
        scores += "" + p.score;
      }

      let link = "https://play.minesweeperflags.net/#/stats/game/" + game.gameId;
      window.navigator.clipboard.writeText(header + "\n" + scores + "\n" + link);
    },
    copyMap() {
      let game = this.game;
      // let bomb = "💣"
      // let boom = "💥"

      let players = game.map.players.toArray();
      let header = ""
      for (let p of players) {
        if (header.length > 0) header += " vs. "
        header += p.controller.name;
      }
      let scores = ""
      for (let p of players) {
        if (scores.length > 0) scores += " - "
        scores += "" + p.score;
      }

      let map = ""
      for (let y = 0; y < 16; y++) {
        for (let x = 0; x < 16; x++) {
          let f = game.map.fieldAt(x, y);
          let fieldEmoji = gameTools.fieldEmoji(f);
          map += fieldEmoji;
        }
        map += "\n"
      }

      let link = "https://play.minesweeperflags.net/#/stats/game/" + game.gameId;
      window.navigator.clipboard.writeText(header + "\n" + scores + "\n" + map + "\n" + link);
    },
    playAgain() {
      this.showResult = false;
      let opponent = this.game.playerData.find(pl => !pl.controllable).player
        .controller.name;

      this.$store.dispatch("invites/sendInvite", {
        target: { userName: opponent },
        plugin: "PluginClassicGame"
      });
    }
  },
  watch: {
    yourResult(value) {
      if (value) {
        this.showResult = true;
      }
    }
  },
  computed: {
    isPlaying() {
      return this.game.playerData.filter(pl => pl.controllable).length > 0;
    },
    ...mapState("games", {
      yourResult(state) {
        return state.activeGames[this.game.gameId].yourResult;
      }
    }),
    winnerName() {
      let elimination = this.game.eliminations.find(e => e.winPosition === 1);
      if (elimination) {
        return elimination.name;
      }
      return null;
    },
    winner() {
      if (this.yourResult !== null) {
        return this.yourResult === "WIN";
      }
      if (this.yourIndex < 0) {
        // Observer
        return "WINS";
      }
      return null;
    }
  }
};
</script>
<style scoped>
.v-dialog.show-result-dialog {
  width: auto;
}
</style>
