# VueBarcode

Add barcodes to your Vue application super easily with VueBarcode! [Try it out!](http://jsfiddle.net/hfgan035/13/)

Supported barcode formats:
`CODE128`
`EAN`
`EAN-13`
`EAN-8`
`EAN-5`
`EAN-2`
`UPC (A)`
`CODE39`
`ITF-14`
`MSI`
`Pharmacode`
`Codabar`

It is a light wrapper for the [JsBarcode](https://github.com/lindell/JsBarcode) barcode library.

## Install
````
npm install vue-barcode
````

## Use
#### 1. Add VueBarcode as a component

````javascript
import VueBarcode from 'vue-barcode';

new Vue({
  components: {
    'barcode': VueBarcode
  }
})
````
#### 2. Use it

````html
<barcode value="value-to-render" format="barcode-format" ...more options>
  Show this if the rendering fails.
</barcode>
````

## Example
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
`display-value`


For more information, see the [JsBarcode documentation](https://github.com/lindell/JsBarcode/wiki/Options).
