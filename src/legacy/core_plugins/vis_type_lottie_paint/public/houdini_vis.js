import $ from 'jquery';
import lottie from './lottie.min.js';
import * as AnimFile from './christmas-tree.json';

export class HoudiniVisualization {
  constructor(el) {
    this._el = el;
    this._tobeMounted = true;
  }

  async render() {
    if (this._tobeMounted) {
      this._tobeMounted = false;
      this._lottieContainer = await $('<div class="lottie">')
        .css({ height: '400px', width: '400px', background: 'lightblue' })
        .appendTo(this._el);
      // Paint Worklet Implementation
      const animData = {
        wrapper: this._lottieContainer.get()[0],
        animType: 'paintworklet',
        loop: true,
        prerender: true,
        autoplay: true,
        animationData: AnimFile,
      };
      // Canvas Implementation
      // const animData = {
      //   wrapper: this._lottieContainer.get()[0],
      //   animType: 'canvas',
      //   loop: true,
      //   prerender: true,
      //   autoplay: true,
      //   animationData: AnimFile,
      // };

      lottie.loadAnimation(animData);
    }
  }
  destroy() {}
}
