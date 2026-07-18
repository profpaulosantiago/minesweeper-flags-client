<template>
  <transition name="fade">
    <img
      :src="require(`@/assets/images/classic_${fieldImage}.png`)"
      :key="fieldImage"
      class="field"
      :class="{ highlighted: highlighted }"
      v-bind:style="{ gridArea: field.y + 1 + '/' + (field.x + 1) }"
      @mouseover="mouseover()"
      @mouseleave="mouseleave()"
      @click="click()"
    />
  </transition>
</template>
<script>
import gameTools from './gameTools';

export default {
  name: "FieldView",
  props: ["field", "onClick", "onHighlight", "highlighted"],
  methods: {
    mouseover() {
      if (this.onHighlight) {
        this.onHighlight(this.field);
      }
    },
    mouseleave() {
      if (this.onHighlight) {
        this.onHighlight(null);
      }
    },
    click() {
      if (this.onClick) {
        this.onClick(this.field);
      }
    }
  },
  computed: {
    fieldImage() {
      return gameTools.fieldImage(this.field);
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.highlighted {
  opacity: 0.5;
}

.field {
  width: 100%;
  height: 100%;
}
</style>
