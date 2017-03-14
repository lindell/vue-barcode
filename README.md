# VueBarcode

Add barcodes to your Vue application super easily with VueBarcode!

It is a light wrapper for the [JsBarcode](https://github.com/lindell/JsBarcode) barcode library.

## Install
````
npm install vue-barcode
````

## Use / Example
Simple example with input binding. [Try it out with this JsFiddle!](http://jsfiddle.net/hfgan035/4/)
````html
<div id="app">
  <input v-model="barcodeValue" /><br>
  <barcode v-bind:value="barcodeValue">
    Show this if the rendering fails.
  </barcode>
</div>
````

````javascript
import VueBarcode from 'vue-barcode';

var app = new Vue({
  el: '#app',
  data: {
    barcodeValue: 'test',
  },
  components: {
    'barcode': VueBarcode
  }
})
````

# Options
All options:

`value`
`format`
`width`
`height`
`text`
`font-options`
`font`
`text-align`
`text-position`
`text-margin`
`font-size`
`background`
`lineColor`
`margin`
`margin-top`
`margin-bottom`
`margin-left`
`margin-right`

For more information, see the [JsBarcode documentation](https://github.com/lindell/JsBarcode/wiki/Options).
