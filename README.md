# bd1k

A Boulder Dash clone in 1024 bytes of JavaScript (including the image data). A lot of bytes were hurt in the making of this game.

![bd1k](https://cloud.githubusercontent.com/assets/50832/23341302/aee9343c-fc12-11e6-9d2b-e59211da3222.png)

## Run

Just open index.html in your browser. Or visit https://atesgoral.github.io/bd1k/

## Features

* Tested on Chrome and Firefox
* 10 increasingly difficult levels. Level 11 is unbeatable because the player starts trapped among boulders
* 4 sprites from the original game
* Random level generator with a custom PRNG to make level generation deterministic (and that fails on level 11)
* Boulders fall, slide over each other and crush player
* Level transition effect
* Level numbers
* Minutes and minutes of fun and excitement for the entire family!

# Reverted features

* [Buddy player](8457f67dcace46f54f874df7fbd7844d427f1feb) - Introduced a doppelgänger that moves along with the player at level 11 since the original player starts off as trapped. This was a fun feature because it's not easy to predict what happens to the other player when you're just watching one of them and it's game over when one of them dies. Reverted because this is not true to the original Boulder Dash and turns the game into a different puzzle game.
* [Bloodied boulder](868414d407a0a938e7f1b08bd1934265bd458af4) - Added a bloodied boulder sprite when the player gets crushed by a boulder. Reverted because the new spire took too much space and it wasn't even that noticeable. 
* [Sound effects](9e38f6ca3b1e642fbd63cfe4ce29ac4d6d990f8b) - Used the Web Speech API to add sound effects. I would be playing "one", "two" or "ten" at extreme pitch and rates to create percussive sound effects. Unfortunately it only worked nicely specificially on Chrome on macOS, so I reverted it.

## Updating the sprites

Keep the PNG in 4 colour indexed format. Use [TinyPNG](https://tinypng.com/) to further optimize it.

To convert to base64:

```
base64 < bd1k_sprites.png > pbcopy
```
