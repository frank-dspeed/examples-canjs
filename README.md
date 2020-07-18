# examples-canjs
Recipes for CanJS



## Lessens Learned from Bitovi Projects Exploration Inovation
- Always code clean ESM for Reading code gets more read then written
- The API Docs and Other Docs are some of the most best on the internet for a Open Source Project
  - While Only the API Docs get read more often so clean code could explain the api most best.
- They did the most inovative and best loader and bundler for development targeting ES2015
- Today Rollup + babel is a better fit when exporting to SystemJS but that is still missing some of steals features.
  - Party with Steal Features for rollup systemjs bundels would be great. there is ongoing effort to implement HMR
- SSR is best done in NodeJS or Rust, Java, PHP so it is clever to use a templating engine like mustache in that environments to reuse templates between Browser Client Code and Serverside Code
  - while when you go for nodejs you can most best reuse templates directly via stache or string literals. String Literals are faster while stache 
  - will allow you to use some maybe never needed extra legacy stuff.
- they got a test framework that is steal loader based so useless if not using steal its called testee
- they got some good doc generators parsing custom formarts but as sayed befor code that is self explaining always winns 
- replace typescript always with JS and JSDOC or even better assert calls inside the dev code
