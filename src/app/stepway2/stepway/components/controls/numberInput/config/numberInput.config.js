export const  NumberInputConfig = {
  id: 'NumberInput',
  name: 'Number input',
  subtitle: 'Text input',
  group: 'input',
  formlyType: 'input',
  formlySubtype: 'numberinput',
  formlyLabel: '',
  formlyRequired: false,
  formlyDescription: '',
  formlyOptions: [],
  formlyExpressionProperties: {},
  formlyValidators: {
    NumberInputShape: {
      expression: function(viewValue, modelValue) {
        const value = modelValue || viewValue;
        return /(\d{1,3}\.){3}\d{1,3}/.test(value);
      },
      message: '$viewValue + \' is not a valid NumberInput\''
    }
  },
  formlyValidation: {
    messages: {
      required: function(viewValue, modelValue, scope) {
        const defaultReturnMsg = 'this NumberInput field is required';
        const returnMsg = (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        if (scope.to.required) return returnMsg;
      }
    }
  }
};
