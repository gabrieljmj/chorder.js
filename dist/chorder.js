'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var FormTemplate =
/*#__PURE__*/
function () {
  function FormTemplate(name, template) {
    _classCallCheck(this, FormTemplate);

    this.name = name;

    this._cloneFromTemplate(template);
  }

  _createClass(FormTemplate, [{
    key: "build",
    value: function build(n) {
      var _this = this;

      var clone = this.template.cloneNode(true);
      clone.dataset[this.name] = n;
      Array.from(clone.querySelectorAll('*[cd-field]')).forEach(function (field) {
        var name = field.dataset.cdName;
        field.setAttribute('name', "".concat(_this.name, "[").concat(name, "][]"));
      });

      clone.querySelector('button[cd-remove]').onclick = function (e) {
        clone.outerHTML = '';
      };

      return clone;
    }
  }, {
    key: "_cloneFromTemplate",
    value: function _cloneFromTemplate(template) {
      if (!template.hasAttribute('cd-template')) {
        throw new Error('Invalid template. Add the \'cd-template\' parameter.');
      }

      this.template = template.cloneNode(true);
    }
  }]);

  return FormTemplate;
}();

function deleteElement(element) {
  element.outerHTML = '';
}

var Chorder =
/*#__PURE__*/
function () {
  function Chorder() {
    _classCallCheck(this, Chorder);
  }

  _createClass(Chorder, [{
    key: "init",
    value: function init() {
      var _this = this;

      Array.from(document.querySelectorAll('div[cd]')).forEach(function (cd) {
        var name = cd.getAttribute('cd');
        var originalTemplateEl = cd.querySelector('div[cd-template]');
        var template = new FormTemplate(name, originalTemplateEl);
        var number = cd.dataset.initialNumber || 1;

        _this.__createInitials(cd, template, number);

        _this.__applyEvents(cd, template);

        deleteElement(originalTemplateEl);
      });
    }
  }, {
    key: "appendToData",
    value: function appendToData(chorderElement, templateElement) {
      chorderElement.querySelector('*[cd-data]').append(templateElement.build());
    }
  }, {
    key: "getData",
    value: function getData(name) {
      var data = [];
      var cd = document.querySelector('*[cd="' + name + '"]');
      Array.from(cd.querySelectorAll('*[data-' + name + ']')).forEach(function (el) {
        var _data = {};
        Array.from(el.querySelectorAll('*[cd-field]')).forEach(function (field) {
          _data[field.dataset.cdName] = field.value;
        });
        data.push(_data);
      });
      return data;
    }
  }, {
    key: "__createInitials",
    value: function __createInitials(cd, template, n) {
      for (var i = 1; i <= n; i++) {
        this.appendToData(cd, template);
      }
    }
  }, {
    key: "__applyEvents",
    value: function __applyEvents(cd, template) {
      var _this2 = this;

      var addBtn = cd.querySelector('*[cd-add]');

      addBtn.onclick = function () {
        _this2.appendToData(cd, template);
      };
    }
  }]);

  return Chorder;
}();

module.exports = Chorder;
