import { k } from 'kaboom'

k.loadSprite('spritesheet', './spritesheet.png', {
  sliceX: 39, //count frames hor in spreadsheet
  sliceY: 31,
  anims: {
    "idle-down": 936,
    "walk-down": { from: 952, to: 955, loop: true, speed: 8 },
    "idle-side": 991,
    "walk-side": { from: 991, to: 994, loop: true, speed: 8 },
    "idle-up": 1030,
    "walk-up": { from: 1030, to: 1033, loop: true, speed: 8 },
  },
})