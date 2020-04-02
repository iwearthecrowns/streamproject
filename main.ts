scene.setBackgroundColor(11)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . f f f f f f f f f f f . . . 
. . f . e e d d d e e . f . . . 
. f . e d d d d d d d e . f . . 
. f d d d d d d d d d d d f . . 
f f d d d d d d d d d d d f f . 
f f d d d f d d d f d d d f f . 
f f d d d d d d d d d d d f f . 
. f d d d d d d d d d d d f . . 
. . d d f d d d d d f d d . . . 
. . d d d f f f f f d d d . . . 
. . . d d d d d d d d d . . . . 
. . . . d d d d d d d . . . . . 
. . . . 2 2 2 f 2 2 2 . . . . . 
. . . . 2 2 2 f 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . f f f f f f f f f f f . . . 
. . f . 4 4 e e e 4 4 . f . . . 
. f . 4 e e e e e e e 4 . f . . 
. f e e e e e e e e e e e f . . 
f f e e e e e e e e e e e f f . 
f f e e e f e e e f e e e f f . 
f f e e e e e e e e e e e f f . 
. f e e e e e e e e e e e f . . 
. . e e f e e e e e f e e . . . 
. . e e e f f f f f e e e . . . 
. . . e e e e e e e e e . . . . 
. . . . e e e e e e e . . . . . 
. . . . 8 8 8 f 8 8 8 . . . . . 
. . . . 8 8 8 f 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(100, 60)
mySprite.say("eh", 2000)
pause(2000)
mySprite2.say("hello", 2000)
pause(2000)
mySprite.say("rad")
