import JsBarcode from 'jsbarcode'

var VueBarcode = {
  template: `
  <div>
    <svg class="vue-barcode-element" v-show="valid"></svg>
    <div v-show="!valid">
      <slot></slot>
    </div>
   </div>`,
  props: {
    value: {type: [String, Number], default: undefined},
    format: {type: [String], default: 'CODE128'},
    width: {type: [String, Number], default: 2},
    height: {type: [String, Number], default: 40},
    text: {type: [String, Number], default: ''},
    fontOptions: {type: [String], default: ''},
    font: {type: [String], default: ''},
    textAlign: {type: [String], default: 'center'},
    textPosition: {type: [String], default: 'bottom'},
    textMargin: {type: [String, Number], default: 0},
    fontSize: {type: [String, Number], default: 12},
    background: {type: [String], default: '#FFF'},
    lineColor: {type: [String], default: '#000'},
    margin: {type: [String, Number], default: 0},
    marginTop: {type: [String, Number], default: 0},
    marginBottom: {type: [String, Number], default: 0},
    marginLeft: {type: [String, Number], default: 0},
    marginRight: {type: [String, Number], default: 0}
  },
  mounted: function () {
    this.$watch('$props', render, { deep: true, immediate: true })
    render.call(this)
  },
  data: function () {
    return {valid: true}
  }
}

function render () {
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
    valid: valid => {
      this.valid = valid
    }
  })
}

export default VueBarcode
