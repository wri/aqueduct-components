'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);

    // Validations
    this.validations = {
      required: {
        validate: function validate(value) {
          var regex = /.*\S.*/;
          return regex.test(value || '');
        },
        message: function message() {
          return 'The field is required';
        }
      },

      email: {
        validate: function validate(value) {
          var regex = /\S+@\S+\.\S+/;
          return regex.test(value || '');
        },
        message: function message() {
          return 'The field should be an email';
        }
      },

      url: {
        validate: function validate(value) {
          var regex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
          return regex.test(value || '');
        },
        message: function message() {
          return 'The field should be an url: http://example.com';
        }
      },

      min: {
        validate: function validate(value, condition) {
          return parseFloat(value) >= parseFloat(condition);
        },
        message: function message(condition) {
          return 'The field should be greater than ' + condition;
        }
      },

      max: {
        validate: function validate(value, condition) {
          return parseFloat(value) <= parseFloat(condition);
        },
        message: function message(condition) {
          return 'The field should be lower than ' + condition;
        }
      },

      between: {
        validate: function validate(value, condition) {
          return parseFloat(value) >= parseFloat(condition[0]) && parseFloat(value) <= parseFloat(condition[1]);
        },
        message: function message(condition) {
          return 'The field should be greater than ' + condition[0] + ' and lower than ' + condition[1];
        }
      }
    };
  }

  _createClass(Validator, [{
    key: 'validate',
    value: function validate(validations, value) {
      var _this = this;

      return validations.map(function (validation) {
        var valid = void 0;
        var message = '';

        if (typeof validation === 'string') {
          var validObj = _this.validations[validation];
          valid = validObj.validate(value);
          message = validObj.message();
        }

        if ((typeof validation === 'undefined' ? 'undefined' : _typeof(validation)) === 'object') {
          var _validObj = _this.validations[validation.type];
          valid = _validObj.validate(value, validation.condition);
          message = _validObj.message(validation.condition);
        }

        return {
          valid: valid,
          error: !valid ? {
            message: message
          } : null
        };
      });
    }
  }]);

  return Validator;
}();

exports.default = Validator;