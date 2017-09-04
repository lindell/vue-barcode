var JsBarcode = require('jsbarcode');

var VueBarcode = {
  template: '<div>' +
    '<svg class="vue-barcode-element" v-show="valid"></svg>'+
    '<div v-show="!valid">'+
      '<slot></slot>'+
    '</div>'+
    '</div>',
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    displayValue: [String, Boolean],
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  var that = this;
  JsBarcode(this.$el.querySelector('.vue-barcode-element'), this.value, {
    format: this.format,
    height: this.height,
    width: this.width,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    displayValue: this.displayValue,
    valid: function (valid) {
      that.valid = valid;
    }
  });
}

module.exports = VueBarcode;
