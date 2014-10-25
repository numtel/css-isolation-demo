
var extractComment = function (f) {
  return f.toString().split('/*')[1].split('*/')[0];
};

var templateHeader = extractComment(function () { /*
  <style>
    :host {
      border: 1px inset;
      background: #f5f5f5;
      padding: 20px;
      display: block;
    }
    em {
      text-decoration: underline;
    }
  </style>
*/ });


xtag.register('template-component', {
  lifecycle: {
    created: function () {
      this.shadowRoot = this.createShadowRoot();
      this.uiSetTemplate();
    },
    attributeChanged: function () {
      this.uiSetTemplate();
    }
  },
  accessors: {
    src: {
      attribute: {},
      get: function () {
        return this.getAttribute('src');
      },
      set: function (value) {
        this.xtag.data.src = value;
      }
    }
  },
  methods: {
    uiSetTemplate: function () {
      this.shadowRoot.innerHTML = templateHeader + '<div></div>';
      this.blazeRoot = this.shadowRoot.querySelector('div');
      if(this.src){
        Blaze.render(Template[this.src], this.blazeRoot);
      }
    }
  }
});
