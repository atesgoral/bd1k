# bd1k

A Boulder Dash clone in 1024 bytes of JavaScript (including the image data). A lot of bytes were hurt in the making of this game.

![bd1k](https://cloud.githubusercontent.com/assets/50832/23341302/aee9343c-fc12-11e6-9d2b-e59211da3222.png)

## Run

Just open index.html in your browser. Or visit https://atesgoral.github.io/bd1k/

## Features

* Tested on Chrome and Firefox.
* 10 increasingly difficult levels. Level 11 is unbeatable because the player starts trapped among boulders.
* 4 sprites from the original game.
* Random level generator with a custom PRNG to make level generation deterministic (that fails on level 11).
* Boulders fall, slide over each other and crush player.
* Minutes and minutes of fun and excitement for the entire family!

## Updating the sprites

Keep the PNG in 4 colour indexed format. Use [TinyPNG](https://tinypng.com/) to further optimize it.

To convert to base64:

```
base64 < bd1k_sprites.png > pbcopy
```
