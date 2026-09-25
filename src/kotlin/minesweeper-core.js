export default (function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var toString_0 = Kotlin.toString;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var unboxChar = Kotlin.unboxChar;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var throwCCE = Kotlin.throwCCE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var getKClass = Kotlin.getKClass;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Random = Kotlin.kotlin.random.Random;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  MoveAllowed.prototype = Object.create(Enum.prototype);
  MoveAllowed.prototype.constructor = MoveAllowed;
  WinResult.prototype = Object.create(Enum.prototype);
  WinResult.prototype.constructor = WinResult;
  ListenerPriority.prototype = Object.create(Enum.prototype);
  ListenerPriority.prototype.constructor = ListenerPriority;
  BombWeapon.prototype = Object.create(Weapon.prototype);
  BombWeapon.prototype.constructor = BombWeapon;
  ClickWeapon.prototype = Object.create(Weapon.prototype);
  ClickWeapon.prototype.constructor = ClickWeapon;
  function AI() {
  }
  AI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AI',
    interfaces: []
  };
  function FieldActivatedEvent(field, move) {
    this.field = field;
    this.move = move;
  }
  FieldActivatedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldActivatedEvent',
    interfaces: []
  };
  FieldActivatedEvent.prototype.component1 = function () {
    return this.field;
  };
  FieldActivatedEvent.prototype.component2 = function () {
    return this.move;
  };
  FieldActivatedEvent.prototype.copy_lq8rls$ = function (field, move) {
    return new FieldActivatedEvent(field === void 0 ? this.field : field, move === void 0 ? this.move : move);
  };
  FieldActivatedEvent.prototype.toString = function () {
    return 'FieldActivatedEvent(field=' + Kotlin.toString(this.field) + (', move=' + Kotlin.toString(this.move)) + ')';
  };
  FieldActivatedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    return result;
  };
  FieldActivatedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.move, other.move)))));
  };
  function FieldHideEvent(field) {
    this.field = field;
  }
  FieldHideEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldHideEvent',
    interfaces: []
  };
  FieldHideEvent.prototype.component1 = function () {
    return this.field;
  };
  FieldHideEvent.prototype.copy_mwxomo$ = function (field) {
    return new FieldHideEvent(field === void 0 ? this.field : field);
  };
  FieldHideEvent.prototype.toString = function () {
    return 'FieldHideEvent(field=' + Kotlin.toString(this.field) + ')';
  };
  FieldHideEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    return result;
  };
  FieldHideEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.field, other.field))));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Field(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.blocked = false;
    this.flagged = false;
    this.clicked_ud4dgx$_0 = false;
    this.whoClicked = null;
    this.mineValue_8be2vx$ = 0;
    this.neighboringMines = 0;
    this.neighbors = ArrayList_init();
    this.invertedNeighbors_0 = ArrayList_init();
  }
  Field.prototype.coordinate = function () {
    return toString(this.x, 36) + toString(this.y, 36);
  };
  Field.prototype.positionString = function () {
    return this.x.toString() + ', ' + this.y;
  };
  Object.defineProperty(Field.prototype, 'clicked', {
    get: function () {
      return this.clicked_ud4dgx$_0;
    },
    set: function (clicked) {
      this.clicked_ud4dgx$_0 = clicked;
    }
  });
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Field.prototype.recount = function () {
    var $receiver = this.neighbors;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.mineValue_8be2vx$);
    }
    this.neighboringMines = sum(destination);
  };
  Field.prototype.isVisible = function () {
    return this.clicked || this.blocked;
  };
  Object.defineProperty(Field.prototype, 'isFoundMine', {
    get: function () {
      return this.isVisible() && this.isMine();
    }
  });
  Object.defineProperty(Field.prototype, 'secretMine', {
    get: function () {
      if (!this.map.secret)
        return this.isMine();
      else
        throw IllegalStateException_init('Map is secret');
    }
  });
  Object.defineProperty(Field.prototype, 'secretValue', {
    get: function () {
      if (!this.map.secret)
        return this.neighboringMines;
      else
        throw IllegalStateException_init('Map is secret');
    }
  });
  Field.prototype.isMine = function () {
    return this.mineValue_8be2vx$ !== 0;
  };
  Field.prototype.setMine = function (mine) {
    this.mineValue_8be2vx$ = mine ? 1 : 0;
  };
  Field.prototype.activate = function (move) {
    var tmp$, tmp$_0;
    this.inactivate();
    this.clicked = true;
    this.whoClicked = move != null ? move.player : null;
    this.map.event(new FieldActivatedEvent(this, move));
    if (this.isFoundMine && this.whoClicked != null) {
      (tmp$ = this.whoClicked) != null ? (tmp$.changeScore(this.mineValue_8be2vx$), Unit) : null;
      tmp$_0 = this.map;
      tmp$_0.actualMinesLeft_8be2vx$ = tmp$_0.actualMinesLeft_8be2vx$ - this.mineValue_8be2vx$ | 0;
    }
  };
  Field.prototype.inactivate = function () {
    var tmp$, tmp$_0;
    this.clicked = false;
    if (this.whoClicked != null) {
      (tmp$ = this.whoClicked) != null ? (tmp$.changeScore(-this.mineValue_8be2vx$ | 0), Unit) : null;
      tmp$_0 = this.map;
      tmp$_0.actualMinesLeft_8be2vx$ = tmp$_0.actualMinesLeft_8be2vx$ + this.mineValue_8be2vx$ | 0;
    }
    this.whoClicked = null;
    this.map.event(new FieldHideEvent(this));
  };
  Field.prototype.addNeighbor = function (deltaX, deltaY) {
    var tmp$;
    tmp$ = this.map.fieldAt(this.x + deltaX | 0, this.y + deltaY | 0);
    if (tmp$ == null) {
      return;
    }
    var field = tmp$;
    this.addNeighborField(field);
  };
  Field.prototype.addNeighborField = function (neighbor) {
    this.neighbors.add_11rb$(neighbor);
    neighbor.invertedNeighbors_0.add_11rb$(this);
  };
  Field.prototype.getKnownValue = function () {
    if (!this.isVisible() || this.isMine()) {
      throw IllegalStateException_init('Value is not known');
    }
    return this.neighboringMines;
  };
  Field.prototype.toString = function () {
    var tmp$;
    if (this.isVisible()) {
      tmp$ = this.coordinate() + '=' + toString_0(this.blocked ? '#' : this.isFoundMine ? '*' : this.getKnownValue());
    }
     else {
      tmp$ = this.coordinate();
    }
    return tmp$;
  };
  Field.prototype.clear = function () {
    this.inactivate();
    this.setMine(false);
    this.whoClicked = null;
    this.blocked = false;
    this.neighboringMines = 0;
    this.clicked = false;
    this.flagged = false;
  };
  Field.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Field',
    interfaces: []
  };
  function GamePreGenerateEvent(map) {
    this.map = map;
  }
  GamePreGenerateEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePreGenerateEvent',
    interfaces: []
  };
  GamePreGenerateEvent.prototype.component1 = function () {
    return this.map;
  };
  GamePreGenerateEvent.prototype.copy_ogqkzo$ = function (map) {
    return new GamePreGenerateEvent(map === void 0 ? this.map : map);
  };
  GamePreGenerateEvent.prototype.toString = function () {
    return 'GamePreGenerateEvent(map=' + Kotlin.toString(this.map) + ')';
  };
  GamePreGenerateEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  GamePreGenerateEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function GamePostGenerateEvent(map) {
    this.map = map;
  }
  GamePostGenerateEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePostGenerateEvent',
    interfaces: []
  };
  GamePostGenerateEvent.prototype.component1 = function () {
    return this.map;
  };
  GamePostGenerateEvent.prototype.copy_ogqkzo$ = function (map) {
    return new GamePostGenerateEvent(map === void 0 ? this.map : map);
  };
  GamePostGenerateEvent.prototype.toString = function () {
    return 'GamePostGenerateEvent(map=' + Kotlin.toString(this.map) + ')';
  };
  GamePostGenerateEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  GamePostGenerateEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function GameTurnChangeEvent(map, current, next) {
    this.map = map;
    this.current = current;
    this.next = next;
  }
  GameTurnChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameTurnChangeEvent',
    interfaces: []
  };
  GameTurnChangeEvent.prototype.component1 = function () {
    return this.map;
  };
  GameTurnChangeEvent.prototype.component2 = function () {
    return this.current;
  };
  GameTurnChangeEvent.prototype.component3 = function () {
    return this.next;
  };
  GameTurnChangeEvent.prototype.copy_o7wz2e$ = function (map, current, next) {
    return new GameTurnChangeEvent(map === void 0 ? this.map : map, current === void 0 ? this.current : current, next === void 0 ? this.next : next);
  };
  GameTurnChangeEvent.prototype.toString = function () {
    return 'GameTurnChangeEvent(map=' + Kotlin.toString(this.map) + (', current=' + Kotlin.toString(this.current)) + (', next=' + Kotlin.toString(this.next)) + ')';
  };
  GameTurnChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    result = result * 31 + Kotlin.hashCode(this.current) | 0;
    result = result * 31 + Kotlin.hashCode(this.next) | 0;
    return result;
  };
  GameTurnChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.map, other.map) && Kotlin.equals(this.current, other.current) && Kotlin.equals(this.next, other.next)))));
  };
  function GameEndedEvent(map) {
    this.map = map;
  }
  GameEndedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameEndedEvent',
    interfaces: []
  };
  GameEndedEvent.prototype.component1 = function () {
    return this.map;
  };
  GameEndedEvent.prototype.copy_ogqkzo$ = function (map) {
    return new GameEndedEvent(map === void 0 ? this.map : map);
  };
  GameEndedEvent.prototype.toString = function () {
    return 'GameEndedEvent(map=' + Kotlin.toString(this.map) + ')';
  };
  GameEndedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  GameEndedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function EliminationCheck(map) {
    this.map = map;
  }
  EliminationCheck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EliminationCheck',
    interfaces: []
  };
  EliminationCheck.prototype.component1 = function () {
    return this.map;
  };
  EliminationCheck.prototype.copy_ogqkzo$ = function (map) {
    return new EliminationCheck(map === void 0 ? this.map : map);
  };
  EliminationCheck.prototype.toString = function () {
    return 'EliminationCheck(map=' + Kotlin.toString(this.map) + ')';
  };
  EliminationCheck.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  EliminationCheck.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function Game(width, height) {
    this.width = width;
    this.height = height;
    this.events_0 = new Events();
    this.RADIX = 36;
    this.playersLeftToEndGame = 1;
    this.actualMinesLeft_8be2vx$ = 0;
    this.actualPlayers_0 = ArrayList_init();
    this.secret = true;
    this.actionMode = false;
    this.currentPlayerIndex = 0;
    var $receiver = until(0, this.height);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.width);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new Field(this, item_0, item));
      }
      tmp$_0.call(destination, toList(destination_0));
    }
    this.fields = toList(destination);
  }
  Object.defineProperty(Game.prototype, 'minesLeft', {
    get: function () {
      return this.actualMinesLeft_8be2vx$;
    },
    set: function (v) {
      this.actualMinesLeft_8be2vx$ = v;
    }
  });
  Object.defineProperty(Game.prototype, 'players', {
    get: function () {
      return this.actualPlayers_0;
    }
  });
  Object.defineProperty(Game.prototype, 'currentPlayer', {
    get: function () {
      return this.players.get_za3lpa$(this.currentPlayerIndex);
    }
  });
  Game.prototype.event = function (event) {
    return this.events_0.execute(event);
  };
  Game.prototype.plugin = function (listener) {
    this.events_0.with(listener);
    return this;
  };
  Game.prototype.allFields = function () {
    return flatten(this.fields);
  };
  Game.prototype.fieldAt = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width;
    if (0 <= x && x < tmp$) {
      tmp$_0 = this.height;
      tmp$_1 = (0 <= y && y < tmp$_0);
    }
     else
      tmp$_1 = false;
    if (tmp$_1) {
      return this.fields.get_za3lpa$(y).get_za3lpa$(x);
    }
    return null;
  };
  Game.prototype.performMove = function (move) {
    var event = this.event(new BeforeMoveEvent(move));
    if (event.cancelled) {
      return MoveAllowed$DENIED_BY_PLUGIN_getInstance();
    }
    var weapon = move.player.getWeapon(move.weapon);
    if (weapon == null) {
      return MoveAllowed$WEAPON_NOT_FOUND_getInstance();
    }
    var allowed = move.allowedState();
    if (allowed !== MoveAllowed$OK_getInstance()) {
      return allowed;
    }
    var moveResult = weapon.useAt(move);
    if (!moveResult) {
      return MoveAllowed$MOVE_FAILED_getInstance();
    }
    if (weapon.usagesLeft > 0) {
      weapon.usagesLeft = weapon.usagesLeft - 1 | 0;
    }
    this.event(new AfterMoveEvent(move));
    this.endCheck_0();
    return MoveAllowed$OK_getInstance();
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  var checkCountOverflow = Kotlin.kotlin.collections.checkCountOverflow_za3lpa$;
  Game.prototype.endCheck_0 = function () {
    this.event(new EliminationCheck(this));
    var $receiver = this.players;
    var count$result;
    count$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        count$result = 0;
        break count$break;
      }
      var count = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.eliminated)
          checkCountOverflow((count = count + 1 | 0, count));
      }
      count$result = count;
    }
     while (false);
    var winnablePlayers = count$result;
    if (winnablePlayers <= this.playersLeftToEndGame) {
      var $receiver_0 = this.players;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (!element_0.eliminated)
          destination.add_11rb$(element_0);
      }
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        element_1.eliminate(WinResult$WIN_getInstance());
      }
      this.event(new GameEndedEvent(this));
    }
  };
  Game.prototype.nextTurn = function () {
    var nextPlayer = this.currentPlayerIndex;
    do {
      nextPlayer = (nextPlayer + 1 | 0) % this.players.size;
    }
     while (this.players.get_za3lpa$(nextPlayer).eliminated);
    this.event(new GameTurnChangeEvent(this, this.players.get_za3lpa$(this.currentPlayerIndex), this.players.get_za3lpa$(nextPlayer)));
    this.currentPlayerIndex = nextPlayer;
  };
  Game.prototype.addPlayer = function (controller) {
    var player = new Player(this, this.actualPlayers_0.size, controller);
    this.actualPlayers_0.add_11rb$(player);
    this.event(new PlayerAddedEvent(player));
  };
  Game.prototype.placeMines = function (mines, random) {
    this.event(new GamePreGenerateEvent(this));
    var $receiver = flatten(this.fields);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.blocked && !element.isMine())
        destination.add_11rb$(element);
    }
    var placeable = toMutableList(destination);
    if (placeable.size < mines) {
      throw IllegalStateException_init('Not enough space on ' + placeable.size + ' fields to place ' + mines + ' mines');
    }
    var minesToPlace = mines;
    while (minesToPlace > 0) {
      var index = random.nextInt_za3lpa$(placeable.size);
      var field = placeable.get_za3lpa$(index);
      field.setMine(true);
      minesToPlace = minesToPlace - 1 | 0;
      placeable.remove_11rb$(field);
    }
    this.actualMinesLeft_8be2vx$ = this.actualMinesLeft_8be2vx$ + mines | 0;
    this.event(new GamePostGenerateEvent(this));
    return this;
  };
  Game.prototype.recount = function () {
    var tmp$;
    tmp$ = flatten(this.fields).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.recount();
    }
    return this;
  };
  Game.prototype.clear = function () {
    var tmp$;
    tmp$ = this.allFields().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.clear();
    }
    this.minesLeft = 0;
    return this;
  };
  Game.prototype.revealSecrets = function () {
    this.secret = false;
    return this;
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function GameInitEvent(map) {
    this.map = map;
  }
  GameInitEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameInitEvent',
    interfaces: []
  };
  GameInitEvent.prototype.component1 = function () {
    return this.map;
  };
  GameInitEvent.prototype.copy_ogqkzo$ = function (map) {
    return new GameInitEvent(map === void 0 ? this.map : map);
  };
  GameInitEvent.prototype.toString = function () {
    return 'GameInitEvent(map=' + Kotlin.toString(this.map) + ')';
  };
  GameInitEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  GameInitEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  function MapFactory() {
  }
  function MapFactory$replay$lambda(it) {
    return null;
  }
  function MapFactory$replay$lambda_0(it) {
    return null;
  }
  MapFactory.prototype.replay = function () {
    var map = (new Game(16, 16)).plugin(ReplayClassicPlugin);
    map.addPlayer(new PlayerController('Nothing', MapFactory$replay$lambda));
    map.addPlayer(new PlayerController('Nothing', MapFactory$replay$lambda_0));
    map.event(new GameInitEvent(map));
    return map;
  };
  function MapFactory$classic$lambda(it) {
    return null;
  }
  function MapFactory$classic$lambda_0(it) {
    return null;
  }
  MapFactory.prototype.classic = function (size) {
    if (size === void 0)
      size = 16;
    var map = (new Game(size, size)).plugin(ClassicPlugin);
    map.addPlayer(new PlayerController('Nothing', MapFactory$classic$lambda));
    map.addPlayer(new PlayerController('Nothing', MapFactory$classic$lambda_0));
    map.event(new GameInitEvent(map));
    return map;
  };
  MapFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapFactory',
    interfaces: []
  };
  function BeforeMoveEvent(move, cancelled) {
    if (cancelled === void 0)
      cancelled = false;
    this.move = move;
    this.cancelled = cancelled;
  }
  BeforeMoveEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeforeMoveEvent',
    interfaces: []
  };
  BeforeMoveEvent.prototype.component1 = function () {
    return this.move;
  };
  BeforeMoveEvent.prototype.component2 = function () {
    return this.cancelled;
  };
  BeforeMoveEvent.prototype.copy_2clrkc$ = function (move, cancelled) {
    return new BeforeMoveEvent(move === void 0 ? this.move : move, cancelled === void 0 ? this.cancelled : cancelled);
  };
  BeforeMoveEvent.prototype.toString = function () {
    return 'BeforeMoveEvent(move=' + Kotlin.toString(this.move) + (', cancelled=' + Kotlin.toString(this.cancelled)) + ')';
  };
  BeforeMoveEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    result = result * 31 + Kotlin.hashCode(this.cancelled) | 0;
    return result;
  };
  BeforeMoveEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.move, other.move) && Kotlin.equals(this.cancelled, other.cancelled)))));
  };
  function AfterMoveEvent(move) {
    this.move = move;
  }
  AfterMoveEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AfterMoveEvent',
    interfaces: []
  };
  AfterMoveEvent.prototype.component1 = function () {
    return this.move;
  };
  AfterMoveEvent.prototype.copy_ogmgh1$ = function (move) {
    return new AfterMoveEvent(move === void 0 ? this.move : move);
  };
  AfterMoveEvent.prototype.toString = function () {
    return 'AfterMoveEvent(move=' + Kotlin.toString(this.move) + ')';
  };
  AfterMoveEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    return result;
  };
  AfterMoveEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.move, other.move))));
  };
  function Move(field, weapon, player) {
    this.field = field;
    this.weapon = weapon;
    this.player = player;
  }
  Object.defineProperty(Move.prototype, 'map', {
    get: function () {
      return this.field.map;
    }
  });
  Move.prototype.moveString = function () {
    var $receiver = unboxChar(this.weapon.key);
    var other = this.field.coordinate();
    return String.fromCharCode($receiver) + other;
  };
  Move.prototype.allowedState = function () {
    if (this.player.eliminated) {
      return MoveAllowed$PLAYER_ELIMINATED_getInstance();
    }
    if (!this.map.actionMode && !this.player.isMyTurn()) {
      return MoveAllowed$NOT_PLAYER_TURN_getInstance();
    }
    if (this.weapon.usagesLeft === 0) {
      return MoveAllowed$WEAPON_DENIED_getInstance();
    }
    if (!this.weapon.canUse(this.player)) {
      return MoveAllowed$WEAPON_DENIED_getInstance();
    }
    if (!this.weapon.canUseAt(this)) {
      return MoveAllowed$WEAPON_POSITION_DENIED_getInstance();
    }
    return MoveAllowed$OK_getInstance();
  };
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: []
  };
  Move.prototype.component1 = function () {
    return this.field;
  };
  Move.prototype.component2 = function () {
    return this.weapon;
  };
  Move.prototype.component3 = function () {
    return this.player;
  };
  Move.prototype.copy_v28otl$ = function (field, weapon, player) {
    return new Move(field === void 0 ? this.field : field, weapon === void 0 ? this.weapon : weapon, player === void 0 ? this.player : player);
  };
  Move.prototype.toString = function () {
    return 'Move(field=' + Kotlin.toString(this.field) + (', weapon=' + Kotlin.toString(this.weapon)) + (', player=' + Kotlin.toString(this.player)) + ')';
  };
  Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.field) | 0;
    result = result * 31 + Kotlin.hashCode(this.weapon) | 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.field, other.field) && Kotlin.equals(this.weapon, other.weapon) && Kotlin.equals(this.player, other.player)))));
  };
  function MoveAllowed(name, ordinal, message) {
    Enum.call(this);
    this.message_vrauhg$_0 = message;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MoveAllowed_initFields() {
    MoveAllowed_initFields = function () {
    };
    MoveAllowed$NO_PLAYER_instance = new MoveAllowed('NO_PLAYER', 0, 'No player specified');
    MoveAllowed$NO_WEAPON_instance = new MoveAllowed('NO_WEAPON', 1, 'No weapon specified');
    MoveAllowed$PLAYER_ELIMINATED_instance = new MoveAllowed('PLAYER_ELIMINATED', 2, '%player is eliminated');
    MoveAllowed$NOT_PLAYER_TURN_instance = new MoveAllowed('NOT_PLAYER_TURN', 3, "It is not %player's turn");
    MoveAllowed$WEAPON_NOT_FOUND_instance = new MoveAllowed('WEAPON_NOT_FOUND', 4, '%player does not have %weapon weapon');
    MoveAllowed$WEAPON_DENIED_instance = new MoveAllowed('WEAPON_DENIED', 5, '%player cannot use %weapon (probably because of game situation or used too many times)');
    MoveAllowed$WEAPON_POSITION_DENIED_instance = new MoveAllowed('WEAPON_POSITION_DENIED', 6, '%player is allowed to use %weapon, but not at the specified position');
    MoveAllowed$DENIED_BY_PLUGIN_instance = new MoveAllowed('DENIED_BY_PLUGIN', 7, 'Move by %player was cancelled by plugin');
    MoveAllowed$MOVE_FAILED_instance = new MoveAllowed('MOVE_FAILED', 8, 'Move %move failed for unknown reasons');
    MoveAllowed$OK_instance = new MoveAllowed('OK', 9, 'Move is allowed');
  }
  var MoveAllowed$NO_PLAYER_instance;
  function MoveAllowed$NO_PLAYER_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$NO_PLAYER_instance;
  }
  var MoveAllowed$NO_WEAPON_instance;
  function MoveAllowed$NO_WEAPON_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$NO_WEAPON_instance;
  }
  var MoveAllowed$PLAYER_ELIMINATED_instance;
  function MoveAllowed$PLAYER_ELIMINATED_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$PLAYER_ELIMINATED_instance;
  }
  var MoveAllowed$NOT_PLAYER_TURN_instance;
  function MoveAllowed$NOT_PLAYER_TURN_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$NOT_PLAYER_TURN_instance;
  }
  var MoveAllowed$WEAPON_NOT_FOUND_instance;
  function MoveAllowed$WEAPON_NOT_FOUND_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$WEAPON_NOT_FOUND_instance;
  }
  var MoveAllowed$WEAPON_DENIED_instance;
  function MoveAllowed$WEAPON_DENIED_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$WEAPON_DENIED_instance;
  }
  var MoveAllowed$WEAPON_POSITION_DENIED_instance;
  function MoveAllowed$WEAPON_POSITION_DENIED_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$WEAPON_POSITION_DENIED_instance;
  }
  var MoveAllowed$DENIED_BY_PLUGIN_instance;
  function MoveAllowed$DENIED_BY_PLUGIN_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$DENIED_BY_PLUGIN_instance;
  }
  var MoveAllowed$MOVE_FAILED_instance;
  function MoveAllowed$MOVE_FAILED_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$MOVE_FAILED_instance;
  }
  var MoveAllowed$OK_instance;
  function MoveAllowed$OK_getInstance() {
    MoveAllowed_initFields();
    return MoveAllowed$OK_instance;
  }
  MoveAllowed.prototype.toString = function (move) {
    return replace(replace(replace(replace(this.message_vrauhg$_0, '%player', move.player.controller.name), '%pos', move.field.positionString()), '%move', move.toString()), '%weapon', move.weapon.toString());
  };
  MoveAllowed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveAllowed',
    interfaces: [Enum]
  };
  function MoveAllowed$values() {
    return [MoveAllowed$NO_PLAYER_getInstance(), MoveAllowed$NO_WEAPON_getInstance(), MoveAllowed$PLAYER_ELIMINATED_getInstance(), MoveAllowed$NOT_PLAYER_TURN_getInstance(), MoveAllowed$WEAPON_NOT_FOUND_getInstance(), MoveAllowed$WEAPON_DENIED_getInstance(), MoveAllowed$WEAPON_POSITION_DENIED_getInstance(), MoveAllowed$DENIED_BY_PLUGIN_getInstance(), MoveAllowed$MOVE_FAILED_getInstance(), MoveAllowed$OK_getInstance()];
  }
  MoveAllowed.values = MoveAllowed$values;
  function MoveAllowed$valueOf(name) {
    switch (name) {
      case 'NO_PLAYER':
        return MoveAllowed$NO_PLAYER_getInstance();
      case 'NO_WEAPON':
        return MoveAllowed$NO_WEAPON_getInstance();
      case 'PLAYER_ELIMINATED':
        return MoveAllowed$PLAYER_ELIMINATED_getInstance();
      case 'NOT_PLAYER_TURN':
        return MoveAllowed$NOT_PLAYER_TURN_getInstance();
      case 'WEAPON_NOT_FOUND':
        return MoveAllowed$WEAPON_NOT_FOUND_getInstance();
      case 'WEAPON_DENIED':
        return MoveAllowed$WEAPON_DENIED_getInstance();
      case 'WEAPON_POSITION_DENIED':
        return MoveAllowed$WEAPON_POSITION_DENIED_getInstance();
      case 'DENIED_BY_PLUGIN':
        return MoveAllowed$DENIED_BY_PLUGIN_getInstance();
      case 'MOVE_FAILED':
        return MoveAllowed$MOVE_FAILED_getInstance();
      case 'OK':
        return MoveAllowed$OK_getInstance();
      default:throwISE('No enum constant net.zomis.minesweeper.core.MoveAllowed.' + name);
    }
  }
  MoveAllowed.valueOf_61zpoe$ = MoveAllowed$valueOf;
  function PlayerEliminatedEvent(player, winResult, position) {
    this.player = player;
    this.winResult = winResult;
    this.position = position;
  }
  PlayerEliminatedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerEliminatedEvent',
    interfaces: []
  };
  PlayerEliminatedEvent.prototype.component1 = function () {
    return this.player;
  };
  PlayerEliminatedEvent.prototype.component2 = function () {
    return this.winResult;
  };
  PlayerEliminatedEvent.prototype.component3 = function () {
    return this.position;
  };
  PlayerEliminatedEvent.prototype.copy_di1y5a$ = function (player, winResult, position) {
    return new PlayerEliminatedEvent(player === void 0 ? this.player : player, winResult === void 0 ? this.winResult : winResult, position === void 0 ? this.position : position);
  };
  PlayerEliminatedEvent.prototype.toString = function () {
    return 'PlayerEliminatedEvent(player=' + Kotlin.toString(this.player) + (', winResult=' + Kotlin.toString(this.winResult)) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  PlayerEliminatedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.winResult) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  PlayerEliminatedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.player, other.player) && Kotlin.equals(this.winResult, other.winResult) && Kotlin.equals(this.position, other.position)))));
  };
  function PlayerScoreChangedEvent(player, oldScore) {
    this.player = player;
    this.oldScore = oldScore;
  }
  PlayerScoreChangedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerScoreChangedEvent',
    interfaces: []
  };
  PlayerScoreChangedEvent.prototype.component1 = function () {
    return this.player;
  };
  PlayerScoreChangedEvent.prototype.component2 = function () {
    return this.oldScore;
  };
  PlayerScoreChangedEvent.prototype.copy_pmi3ul$ = function (player, oldScore) {
    return new PlayerScoreChangedEvent(player === void 0 ? this.player : player, oldScore === void 0 ? this.oldScore : oldScore);
  };
  PlayerScoreChangedEvent.prototype.toString = function () {
    return 'PlayerScoreChangedEvent(player=' + Kotlin.toString(this.player) + (', oldScore=' + Kotlin.toString(this.oldScore)) + ')';
  };
  PlayerScoreChangedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.oldScore) | 0;
    return result;
  };
  PlayerScoreChangedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.player, other.player) && Kotlin.equals(this.oldScore, other.oldScore)))));
  };
  function PlayerAddedEvent(player) {
    this.player = player;
  }
  PlayerAddedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerAddedEvent',
    interfaces: []
  };
  PlayerAddedEvent.prototype.component1 = function () {
    return this.player;
  };
  PlayerAddedEvent.prototype.copy_4twzaj$ = function (player) {
    return new PlayerAddedEvent(player === void 0 ? this.player : player);
  };
  PlayerAddedEvent.prototype.toString = function () {
    return 'PlayerAddedEvent(player=' + Kotlin.toString(this.player) + ')';
  };
  PlayerAddedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    return result;
  };
  PlayerAddedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.player, other.player))));
  };
  function PlayerController(name, moveDecision) {
    this.name = name;
    this.moveDecision = moveDecision;
  }
  PlayerController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerController',
    interfaces: []
  };
  function EmptyController$lambda(it) {
    return null;
  }
  var EmptyController;
  function WinResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WinResult_initFields() {
    WinResult_initFields = function () {
    };
    WinResult$WIN_instance = new WinResult('WIN', 0);
    WinResult$LOSS_instance = new WinResult('LOSS', 1);
    WinResult$DRAW_instance = new WinResult('DRAW', 2);
  }
  var WinResult$WIN_instance;
  function WinResult$WIN_getInstance() {
    WinResult_initFields();
    return WinResult$WIN_instance;
  }
  var WinResult$LOSS_instance;
  function WinResult$LOSS_getInstance() {
    WinResult_initFields();
    return WinResult$LOSS_instance;
  }
  var WinResult$DRAW_instance;
  function WinResult$DRAW_getInstance() {
    WinResult_initFields();
    return WinResult$DRAW_instance;
  }
  WinResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WinResult',
    interfaces: [Enum]
  };
  function WinResult$values() {
    return [WinResult$WIN_getInstance(), WinResult$LOSS_getInstance(), WinResult$DRAW_getInstance()];
  }
  WinResult.values = WinResult$values;
  function WinResult$valueOf(name) {
    switch (name) {
      case 'WIN':
        return WinResult$WIN_getInstance();
      case 'LOSS':
        return WinResult$LOSS_getInstance();
      case 'DRAW':
        return WinResult$DRAW_getInstance();
      default:throwISE('No enum constant net.zomis.minesweeper.core.WinResult.' + name);
    }
  }
  WinResult.valueOf_61zpoe$ = WinResult$valueOf;
  function Player(map, index, controller) {
    this.map = map;
    this.index = index;
    this.controller = controller;
    this.actualWeapons_0 = ArrayList_init();
    this.winResult = null;
    this.eliminatedPosition = null;
    this.score = 0;
  }
  Object.defineProperty(Player.prototype, 'weapons', {
    get: function () {
      return toList(this.actualWeapons_0);
    }
  });
  Object.defineProperty(Player.prototype, 'eliminated', {
    get: function () {
      return this.winResult != null;
    }
  });
  Player.prototype.isMyTurn = function () {
    return this.map.currentPlayerIndex === this.index;
  };
  Player.prototype.getWeapon = function (weapon) {
    var $receiver = this.actualWeapons_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(weapon, element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Player.prototype.eliminate = function (result) {
    var position = {v: result === WinResult$LOSS_getInstance() ? this.map.players.size + 1 | 0 : 0};
    loop_label: do {
      position.v = position.v + (result === WinResult$LOSS_getInstance() ? -1 : 1) | 0;
      var $receiver = this.map.players;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.eliminated && element.eliminatedPosition === position.v) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
    }
     while (any$result);
    this.elimination_0(result, position.v);
  };
  Player.prototype.elimination_0 = function (result, position) {
    this.winResult = result;
    this.eliminatedPosition = position;
    this.map.event(new PlayerEliminatedEvent(this, result, position));
  };
  Player.prototype.changeScore = function (change) {
    var oldScore = this.score;
    this.score = this.score + change | 0;
    this.map.event(new PlayerScoreChangedEvent(this, oldScore));
  };
  Player.prototype.addWeapon = function (weapon) {
    this.actualWeapons_0.add_11rb$(weapon);
    return this;
  };
  Player.prototype.createMove = function (weaponKey, field) {
    var tmp$;
    var $receiver = this.actualWeapons_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (unboxChar(element.key) === weaponKey) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw IllegalArgumentException_init("No weapon found with key '" + String.fromCharCode(weaponKey) + "'");
    }
    var weapon = tmp$;
    return new Move(field, weapon, this);
  };
  Player.prototype.reset = function () {
    this.score = 0;
    this.winResult = null;
    this.eliminatedPosition = null;
    var tmp$;
    tmp$ = this.weapons.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.reset();
    }
  };
  Player.prototype.toString = function () {
    return 'Player(index=' + this.index + ', winResult=' + toString_0(this.winResult) + ', eliminatedPosition=' + toString_0(this.eliminatedPosition) + ', score=' + this.score + ')';
  };
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function Replay(current) {
    this.current = current;
    this.viewing = this.current;
    this.moveHistory = ArrayList_init();
    this.replayPosition = 0;
  }
  Replay.prototype.setPosition = function (position) {
    if (position > this.length()) {
      throw IllegalArgumentException_init('Position ' + position + ' is greater than length ' + this.length());
    }
    if (position < this.replayPosition) {
      this.rewind();
    }
    while (this.replayPosition < position) {
      this.stepForward();
    }
  };
  Replay.prototype.addMove = function (move) {
    this.moveHistory.add_11rb$(move);
  };
  Replay.prototype.stepForward = function () {
    var move = this.moveHistory.get_za3lpa$(this.replayPosition);
    var moveResult = this.viewing.performMove(move);
    this.replayPosition = this.replayPosition + 1 | 0;
    return moveResult === MoveAllowed$OK_getInstance();
  };
  Replay.prototype.rewind = function () {
    this.replayPosition = 0;
    var tmp$;
    tmp$ = flatten(this.viewing.fields).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.inactivate();
    }
    this.viewing.currentPlayerIndex = 0;
    var tmp$_0;
    tmp$_0 = this.viewing.players.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.reset();
    }
  };
  Replay.prototype.length = function () {
    return this.moveHistory.size;
  };
  Replay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Replay',
    interfaces: []
  };
  function ReplayFactory() {
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  ReplayFactory.prototype.liveReplay = function (map) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented yet');
  };
  ReplayFactory.prototype.fromSavedToMap = function (target, minePositions, movesString) {
    target.clear();
    var replay = new Replay(target);
    var fields = target.allFields();
    var mines = this.mineFields_0(minePositions, target, 2, 16);
    var tmp$;
    tmp$ = mines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.setMine(true);
    }
    target.minesLeft = mines.size;
    target.recount();
    this.extractMoves_0(movesString, replay, 2, 16);
    return replay;
  };
  ReplayFactory.prototype.extractMoves_0 = function (movesString, replay, charsPerField, radix) {
    var charsPerMove = charsPerField + 1 | 0;
    if (movesString.length % charsPerMove !== 0) {
      throw IllegalArgumentException_init('Expected length of string ' + movesString + ' to be evenly divisble by (' + charsPerField + ' + 1)');
    }
    var moveCount = movesString.length / charsPerMove | 0;
    var halfField = charsPerField / 2 | 0;
    var tmp$;
    tmp$ = until(0, moveCount).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var index = Kotlin.imul(element, charsPerMove);
      var weaponKey = movesString.charCodeAt(index);
      var startIndex = index + 1 | 0;
      var endIndex = index + 1 + halfField | 0;
      var textX = movesString.substring(startIndex, endIndex);
      var startIndex_0 = index + 1 + halfField | 0;
      var endIndex_0 = index + charsPerMove | 0;
      var textY = movesString.substring(startIndex_0, endIndex_0);
      var x = toInt(textX, radix);
      var y = toInt(textY, radix);
      tmp$_0 = replay.viewing.fieldAt(x, y);
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('Field not found: ' + x + ', ' + y);
      }
      var field = tmp$_0;
      var move = replay.viewing.currentPlayer.createMove(weaponKey, field);
      replay.addMove(move);
      replay.stepForward();
    }
    replay.rewind();
  };
  ReplayFactory.prototype.mineFields_0 = function (minePositions, map, charsPerField, radix) {
    if (minePositions.length % charsPerField !== 0) {
      throw IllegalArgumentException_init('Expected length of string ' + minePositions + ' to be evenly divisble by ' + charsPerField);
    }
    var $receiver = until(0, minePositions.length / charsPerField | 0);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var index = Kotlin.imul(item, charsPerField);
      var endIndex = index + (charsPerField / 2 | 0) | 0;
      var textX = minePositions.substring(index, endIndex);
      var startIndex = index + (charsPerField / 2 | 0) | 0;
      var endIndex_0 = index + charsPerField | 0;
      var textY = minePositions.substring(startIndex, endIndex_0);
      var x = toInt(textX, radix);
      var y = toInt(textY, radix);
      tmp$_1 = map.fieldAt(x, y);
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Field not found: ' + x + ', ' + y);
      }
      tmp$_0.call(destination, tmp$_1);
    }
    return destination;
  };
  ReplayFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReplayFactory',
    interfaces: []
  };
  var Math_0 = Math;
  function clamp($receiver, value) {
    var tmp$ = $receiver.first;
    var b = $receiver.last;
    var b_0 = Math_0.min(value, b);
    return Math_0.max(tmp$, b_0);
  }
  function Weapon(key) {
    this.key = toBoxedChar(key);
    this.usagesLeft_egjzd3$_0 = -1;
  }
  Object.defineProperty(Weapon.prototype, 'usagesLeft', {
    get: function () {
      return this.usagesLeft_egjzd3$_0;
    },
    set: function (usagesLeft) {
      this.usagesLeft_egjzd3$_0 = usagesLeft;
    }
  });
  Weapon.prototype.affectedFields = function (target) {
    return emptyList();
  };
  Weapon.prototype.canUse = function (player) {
    return true;
  };
  Weapon.prototype.canUseAt = function (move) {
    return false;
  };
  Weapon.prototype.use = function (player) {
    throw IllegalStateException_init('Cannot use base weapon');
  };
  Weapon.prototype.useAt = function (move) {
    throw IllegalStateException_init('Cannot use base weapon');
  };
  Weapon.prototype.reset = function () {
  };
  Weapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Weapon',
    interfaces: []
  };
  function ListenerPriority(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ListenerPriority_initFields() {
    ListenerPriority_initFields = function () {
    };
    ListenerPriority$FIRST_instance = new ListenerPriority('FIRST', 0);
    ListenerPriority$EARLIER_instance = new ListenerPriority('EARLIER', 1);
    ListenerPriority$EARLY_instance = new ListenerPriority('EARLY', 2);
    ListenerPriority$NORMAL_instance = new ListenerPriority('NORMAL', 3);
    ListenerPriority$LATE_instance = new ListenerPriority('LATE', 4);
    ListenerPriority$LATER_instance = new ListenerPriority('LATER', 5);
    ListenerPriority$LAST_instance = new ListenerPriority('LAST', 6);
  }
  var ListenerPriority$FIRST_instance;
  function ListenerPriority$FIRST_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$FIRST_instance;
  }
  var ListenerPriority$EARLIER_instance;
  function ListenerPriority$EARLIER_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$EARLIER_instance;
  }
  var ListenerPriority$EARLY_instance;
  function ListenerPriority$EARLY_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$EARLY_instance;
  }
  var ListenerPriority$NORMAL_instance;
  function ListenerPriority$NORMAL_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$NORMAL_instance;
  }
  var ListenerPriority$LATE_instance;
  function ListenerPriority$LATE_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$LATE_instance;
  }
  var ListenerPriority$LATER_instance;
  function ListenerPriority$LATER_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$LATER_instance;
  }
  var ListenerPriority$LAST_instance;
  function ListenerPriority$LAST_getInstance() {
    ListenerPriority_initFields();
    return ListenerPriority$LAST_instance;
  }
  ListenerPriority.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenerPriority',
    interfaces: [Enum]
  };
  function ListenerPriority$values() {
    return [ListenerPriority$FIRST_getInstance(), ListenerPriority$EARLIER_getInstance(), ListenerPriority$EARLY_getInstance(), ListenerPriority$NORMAL_getInstance(), ListenerPriority$LATE_getInstance(), ListenerPriority$LATER_getInstance(), ListenerPriority$LAST_getInstance()];
  }
  ListenerPriority.values = ListenerPriority$values;
  function ListenerPriority$valueOf(name) {
    switch (name) {
      case 'FIRST':
        return ListenerPriority$FIRST_getInstance();
      case 'EARLIER':
        return ListenerPriority$EARLIER_getInstance();
      case 'EARLY':
        return ListenerPriority$EARLY_getInstance();
      case 'NORMAL':
        return ListenerPriority$NORMAL_getInstance();
      case 'LATE':
        return ListenerPriority$LATE_getInstance();
      case 'LATER':
        return ListenerPriority$LATER_getInstance();
      case 'LAST':
        return ListenerPriority$LAST_getInstance();
      default:throwISE('No enum constant net.zomis.minesweeper.core.events.ListenerPriority.' + name);
    }
  }
  ListenerPriority.valueOf_61zpoe$ = ListenerPriority$valueOf;
  function Listener(description, priority, condition, handler) {
    this.description = description;
    this.priority = priority;
    this.condition_0 = condition;
    this.handler_0 = handler;
  }
  Listener.prototype.r = function (event) {
    if (this.condition_0(event)) {
      this.handler_0(event);
    }
  };
  Listener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Listener',
    interfaces: []
  };
  function ListenerList() {
    this.list_0 = ArrayList_init();
  }
  ListenerList.prototype.add = function (eventHandler) {
    var nextPriority = eventHandler.priority.ordinal + 1 | 0;
    var $receiver = this.list_0;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      var tmp$;
      var index = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (item.priority.ordinal >= nextPriority) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
        index = index + 1 | 0;
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var insertIndex = indexOfFirst$result;
    if (insertIndex >= 0) {
      this.list_0.add_wxm5ur$(insertIndex, eventHandler);
    }
     else {
      this.list_0.add_11rb$(eventHandler);
    }
  };
  ListenerList.prototype.execu = function (event) {
    var tmp$;
    tmp$ = this.list_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      try {
        element.r(event);
      }
       catch (e) {
        if (Kotlin.isType(e, RuntimeException)) {
          throw e;
        }
         else
          throw e;
      }
    }
  };
  ListenerList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListenerList',
    interfaces: []
  };
  function Events() {
    this.listeners_0 = HashMap_init();
  }
  Events.prototype.withPriority = function (description, priority, clazz, condition, handler) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = this.listeners_0;
    var key = Kotlin.isType(tmp$ = clazz, KClass) ? tmp$ : throwCCE();
    var tmp$_3;
    var list = Kotlin.isType(tmp$_1 = (tmp$_3 = tmp$_0.get_11rb$(key)) != null ? tmp$_3 : new ListenerList(), ListenerList) ? tmp$_1 : throwCCE();
    list.add(new Listener(description, priority, condition, handler));
    var $receiver = this.listeners_0;
    var value = Kotlin.isType(tmp$_2 = list, ListenerList) ? tmp$_2 : throwCCE();
    $receiver.put_xwzc9p$(clazz, value);
    return this;
  };
  function Events$listen$lambda(it) {
    return true;
  }
  Events.prototype.listen = function (clazz, handler) {
    return this.withCondition('No description', clazz, Events$listen$lambda, handler);
  };
  Events.prototype.withCondition = function (description, clazz, condition, handler) {
    return this.withPriority(description, ListenerPriority$NORMAL_getInstance(), clazz, condition, handler);
  };
  Events.prototype.feature = function (feature) {
    return this.listen(feature.first, feature.second);
  };
  Events.prototype.execute = function (event) {
    var tmp$, tmp$_0;
    var kclass = Kotlin.isType(tmp$ = Kotlin.getKClassFromExpression(event), KClass) ? tmp$ : throwCCE();
    (tmp$_0 = this.listeners_0.get_11rb$(kclass)) != null ? (tmp$_0.execu(event), Unit) : null;
    return event;
  };
  Events.prototype.with = function (registrator) {
    registrator(this);
    return this;
  };
  Events.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Events',
    interfaces: []
  };
  function EndShowMines$lambda(e) {
    var $receiver = e.map.allFields();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.isVisible() && element.isMine())
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.activate(null);
    }
    return Unit;
  }
  var EndShowMines;
  function ClassicNeighbors$lambda(e) {
    Neighbors_getInstance().setup(e.map, Neighbors_getInstance().eightDirections);
    return Unit;
  }
  var ClassicNeighbors;
  function StandardWeapons$lambda(event) {
    event.player.addWeapon(new ClickWeapon());
    event.player.addWeapon(new BombWeapon());
    return Unit;
  }
  var StandardWeapons;
  function ExpanderRuleEvent(map) {
    this.map = map;
  }
  ExpanderRuleEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExpanderRuleEvent',
    interfaces: []
  };
  ExpanderRuleEvent.prototype.component1 = function () {
    return this.map;
  };
  ExpanderRuleEvent.prototype.copy_ogqkzo$ = function (map) {
    return new ExpanderRuleEvent(map === void 0 ? this.map : map);
  };
  ExpanderRuleEvent.prototype.toString = function () {
    return 'ExpanderRuleEvent(map=' + Kotlin.toString(this.map) + ')';
  };
  ExpanderRuleEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.map) | 0;
    return result;
  };
  ExpanderRuleEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.map, other.map))));
  };
  var ClickWeaponKey;
  function ExpanderRule$lambda(e) {
    var map = e.move.map;
    var $receiver = map.allFields();
    var none$result;
    none$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        none$result = true;
        break none$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isFoundMine) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    if (none$result && unboxChar(e.move.weapon.key) === ClickWeaponKey) {
      if (e.move.field.isVisible() && e.move.field.getKnownValue() === 0) {
        map.event(new ExpanderRuleEvent(e.move.map));
        var mineCount = map.minesLeft;
        map.clear();
        map.placeMines(mineCount, Random.Default);
        map.currentPlayerIndex = 0;
        map.recount();
      }
    }
    return Unit;
  }
  var ExpanderRule;
  function EliminateLosers$lambda(e) {
    var $receiver = e.map.players;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.score);
    }
    var maxScore = ensureNotNull(max(destination));
    var $receiver_0 = e.map.players;
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!element.eliminated)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if ((e.map.minesLeft + element_0.score | 0) < maxScore)
        destination_1.add_11rb$(element_0);
    }
    var losers = destination_1;
    var tmp$_2;
    tmp$_2 = losers.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      element_1.eliminate(WinResult$LOSS_getInstance());
    }
    return Unit;
  }
  var EliminateLosers;
  function ClassicPlugin$lambda(events) {
    events.feature(EndShowMines).feature(ClassicNeighbors).feature(ExpanderRule).feature(StandardWeapons).feature(EliminateLosers);
    return Unit;
  }
  var ClassicPlugin;
  function ReplayClassicPlugin$lambda(events) {
    events.feature(ClassicNeighbors).feature(StandardWeapons).feature(EliminateLosers);
    return Unit;
  }
  var ReplayClassicPlugin;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function Neighbors() {
    Neighbors_instance = this;
    var $receiver = new IntRange(-1, 1);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = new IntRange(-1, 1);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    this.eightDirections = destination;
  }
  Neighbors.prototype.setup = function (map, neighborDeltas) {
    var tmp$;
    tmp$ = map.allFields().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = neighborDeltas.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.first !== 0 || element_0.second !== 0) {
          element.addNeighbor(element_0.first, element_0.second);
        }
      }
    }
  };
  Neighbors.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Neighbors',
    interfaces: []
  };
  var Neighbors_instance = null;
  function Neighbors_getInstance() {
    if (Neighbors_instance === null) {
      new Neighbors();
    }
    return Neighbors_instance;
  }
  function BombWeapon() {
    Weapon.call(this, 66);
    this.RANGE = 2;
    this.usagesLeft = 1;
  }
  BombWeapon.prototype.canUse = function (player) {
    var $receiver = player.map.players;
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.score > player.score) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  BombWeapon.prototype.affectedFields = function (target) {
    var x = clamp(until(this.RANGE, target.map.width - this.RANGE | 0), target.x);
    var y = clamp(until(this.RANGE, target.map.height - this.RANGE | 0), target.y);
    var center = ensureNotNull(target.map.fieldAt(x, y));
    var $receiver = fieldsInRange(center, this.RANGE);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.isVisible())
        destination.add_11rb$(element);
    }
    return destination;
  };
  BombWeapon.prototype.canUseAt = function (move) {
    return !this.affectedFields(move.field).isEmpty();
  };
  BombWeapon.prototype.useAt = function (move) {
    var fields = this.affectedFields(move.field);
    var tmp$;
    tmp$ = fields.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      expanderOpen(this, element, move);
    }
    move.map.nextTurn();
    return true;
  };
  BombWeapon.prototype.reset = function () {
    this.usagesLeft = 1;
  };
  BombWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BombWeapon',
    interfaces: [Weapon]
  };
  function ClickWeapon() {
    Weapon.call(this, 80);
  }
  ClickWeapon.prototype.affectedFields = function (target) {
    return target.isVisible() ? emptyList() : listOf(target);
  };
  ClickWeapon.prototype.canUseAt = function (move) {
    return !this.affectedFields(move.field).isEmpty();
  };
  ClickWeapon.prototype.useAt = function (move) {
    expanderOpen(this, move.field, move);
    if (!move.field.isFoundMine) {
      move.map.nextTurn();
    }
    return true;
  };
  ClickWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClickWeapon',
    interfaces: [Weapon]
  };
  function expanderOpen($receiver, field, move) {
    field.activate(move);
    if (!field.isFoundMine && field.getKnownValue() === 0) {
      var $receiver_0 = field.neighbors;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.isVisible())
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        expanderOpen($receiver, element_0, move);
      }
    }
  }
  var wrapFunction = Kotlin.wrapFunction;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  function fieldsInRange($receiver, range) {
    var map = $receiver.map;
    var $receiver_0 = new IntRange(-range | 0, range);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = new IntRange(-range | 0, range);
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_0_0;
        if ((tmp$_0_0 = map.fieldAt($receiver.x + element_0 | 0, $receiver.y + element | 0)) != null) {
          destination_0.add_11rb$(tmp$_0_0);
        }
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function hello() {
    return 'Hello from JS';
  }
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 12;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$net = _.net || (_.net = {});
  var package$zomis = package$net.zomis || (package$net.zomis = {});
  var package$minesweeper = package$zomis.minesweeper || (package$zomis.minesweeper = {});
  var package$core = package$minesweeper.core || (package$minesweeper.core = {});
  package$core.AI = AI;
  package$core.FieldActivatedEvent = FieldActivatedEvent;
  package$core.FieldHideEvent = FieldHideEvent;
  package$core.Field = Field;
  package$core.GamePreGenerateEvent = GamePreGenerateEvent;
  package$core.GamePostGenerateEvent = GamePostGenerateEvent;
  package$core.GameTurnChangeEvent = GameTurnChangeEvent;
  package$core.GameEndedEvent = GameEndedEvent;
  package$core.EliminationCheck = EliminationCheck;
  package$core.Game = Game;
  package$core.GameInitEvent = GameInitEvent;
  package$core.MapFactory = MapFactory;
  package$core.BeforeMoveEvent = BeforeMoveEvent;
  package$core.AfterMoveEvent = AfterMoveEvent;
  package$core.Move = Move;
  Object.defineProperty(MoveAllowed, 'NO_PLAYER', {
    get: MoveAllowed$NO_PLAYER_getInstance
  });
  Object.defineProperty(MoveAllowed, 'NO_WEAPON', {
    get: MoveAllowed$NO_WEAPON_getInstance
  });
  Object.defineProperty(MoveAllowed, 'PLAYER_ELIMINATED', {
    get: MoveAllowed$PLAYER_ELIMINATED_getInstance
  });
  Object.defineProperty(MoveAllowed, 'NOT_PLAYER_TURN', {
    get: MoveAllowed$NOT_PLAYER_TURN_getInstance
  });
  Object.defineProperty(MoveAllowed, 'WEAPON_NOT_FOUND', {
    get: MoveAllowed$WEAPON_NOT_FOUND_getInstance
  });
  Object.defineProperty(MoveAllowed, 'WEAPON_DENIED', {
    get: MoveAllowed$WEAPON_DENIED_getInstance
  });
  Object.defineProperty(MoveAllowed, 'WEAPON_POSITION_DENIED', {
    get: MoveAllowed$WEAPON_POSITION_DENIED_getInstance
  });
  Object.defineProperty(MoveAllowed, 'DENIED_BY_PLUGIN', {
    get: MoveAllowed$DENIED_BY_PLUGIN_getInstance
  });
  Object.defineProperty(MoveAllowed, 'MOVE_FAILED', {
    get: MoveAllowed$MOVE_FAILED_getInstance
  });
  Object.defineProperty(MoveAllowed, 'OK', {
    get: MoveAllowed$OK_getInstance
  });
  package$core.MoveAllowed = MoveAllowed;
  package$core.PlayerEliminatedEvent = PlayerEliminatedEvent;
  package$core.PlayerScoreChangedEvent = PlayerScoreChangedEvent;
  package$core.PlayerAddedEvent = PlayerAddedEvent;
  package$core.PlayerController = PlayerController;
  Object.defineProperty(package$core, 'EmptyController', {
    get: function () {
      return EmptyController;
    }
  });
  Object.defineProperty(WinResult, 'WIN', {
    get: WinResult$WIN_getInstance
  });
  Object.defineProperty(WinResult, 'LOSS', {
    get: WinResult$LOSS_getInstance
  });
  Object.defineProperty(WinResult, 'DRAW', {
    get: WinResult$DRAW_getInstance
  });
  package$core.WinResult = WinResult;
  package$core.Player = Player;
  package$core.Replay = Replay;
  package$core.ReplayFactory = ReplayFactory;
  package$core.clamp_qvjfq0$ = clamp;
  package$core.Weapon = Weapon;
  Object.defineProperty(ListenerPriority, 'FIRST', {
    get: ListenerPriority$FIRST_getInstance
  });
  Object.defineProperty(ListenerPriority, 'EARLIER', {
    get: ListenerPriority$EARLIER_getInstance
  });
  Object.defineProperty(ListenerPriority, 'EARLY', {
    get: ListenerPriority$EARLY_getInstance
  });
  Object.defineProperty(ListenerPriority, 'NORMAL', {
    get: ListenerPriority$NORMAL_getInstance
  });
  Object.defineProperty(ListenerPriority, 'LATE', {
    get: ListenerPriority$LATE_getInstance
  });
  Object.defineProperty(ListenerPriority, 'LATER', {
    get: ListenerPriority$LATER_getInstance
  });
  Object.defineProperty(ListenerPriority, 'LAST', {
    get: ListenerPriority$LAST_getInstance
  });
  var package$events = package$core.events || (package$core.events = {});
  package$events.ListenerPriority = ListenerPriority;
  package$events.Listener = Listener;
  package$events.ListenerList = ListenerList;
  package$events.Events = Events;
  var package$plugins = package$core.plugins || (package$core.plugins = {});
  Object.defineProperty(package$plugins, 'EndShowMines', {
    get: function () {
      return EndShowMines;
    }
  });
  Object.defineProperty(package$plugins, 'ClassicNeighbors', {
    get: function () {
      return ClassicNeighbors;
    }
  });
  Object.defineProperty(package$plugins, 'StandardWeapons', {
    get: function () {
      return StandardWeapons;
    }
  });
  package$plugins.ExpanderRuleEvent = ExpanderRuleEvent;
  Object.defineProperty(package$plugins, 'ClickWeaponKey', {
    get: function () {
      return ClickWeaponKey;
    }
  });
  Object.defineProperty(package$plugins, 'ExpanderRule', {
    get: function () {
      return ExpanderRule;
    }
  });
  Object.defineProperty(package$plugins, 'EliminateLosers', {
    get: function () {
      return EliminateLosers;
    }
  });
  var package$classic = package$plugins.classic || (package$plugins.classic = {});
  Object.defineProperty(package$classic, 'ClassicPlugin', {
    get: function () {
      return ClassicPlugin;
    }
  });
  Object.defineProperty(package$classic, 'ReplayClassicPlugin', {
    get: function () {
      return ReplayClassicPlugin;
    }
  });
  Object.defineProperty(package$classic, 'Neighbors', {
    get: Neighbors_getInstance
  });
  var package$weapons = package$core.weapons || (package$core.weapons = {});
  package$weapons.BombWeapon = BombWeapon;
  package$weapons.ClickWeapon = ClickWeapon;
  package$weapons.expanderOpen_um63s$ = expanderOpen;
  package$weapons.fieldsInRange_5d6odd$ = fieldsInRange;
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  EmptyController = new PlayerController('N/A', EmptyController$lambda);
  EndShowMines = to(getKClass(GameEndedEvent), EndShowMines$lambda);
  ClassicNeighbors = to(getKClass(GameInitEvent), ClassicNeighbors$lambda);
  StandardWeapons = to(getKClass(PlayerAddedEvent), StandardWeapons$lambda);
  ClickWeaponKey = unboxChar((new ClickWeapon()).key);
  ExpanderRule = to(getKClass(AfterMoveEvent), ExpanderRule$lambda);
  EliminateLosers = to(getKClass(EliminationCheck), EliminateLosers$lambda);
  ClassicPlugin = ClassicPlugin$lambda;
  ReplayClassicPlugin = ReplayClassicPlugin$lambda;
  Kotlin.defineModule('minesweeper-core', _);
  return _;
}({}, require('kotlin')));
