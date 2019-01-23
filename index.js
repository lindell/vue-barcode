var JsBarcode = require('jsbarcode');

var VueBarcode = {
   render: function (createElement) {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vue-barcode-element']
      }),
      createElement('div', {
        style: { display: this.valid ? 'none' : undefined }
      }, this.$slots.default),
    ]);
  },
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
    displayValue: {
      type:  [String, Boolean],
      default: true
    },
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
          return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
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

  var settings = {
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
    valid: function (valid) {
      that.valid = valid;
    },
    displayValue: this.displayValue,
    elementTag: this.elementTag
  };

  removeUndefinedProps(settings);

  JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
}

function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

module.exports = VueBarcode;
