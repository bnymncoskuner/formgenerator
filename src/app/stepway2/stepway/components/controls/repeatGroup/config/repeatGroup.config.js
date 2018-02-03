export const RepeatSectionConfig =       {
  id: 'RepeatSection',
  name: 'RepeatSection',
  subtitle: 'RepeatSection',
  group: 'RepeatSection',
  formlyType: 'RepeatSection',
  formlySubtype: '',
  formlyLabel: '',
  formlyRequired: false,
  formlyDescription: '',
  formlyOptions: [] ,
  formlyExpressionProperties: {},
  formlyValidators: {},
  formlyValidation: {
    messages: {
      required: (viewValue, modelValue, scope) => {
        const defaultReturnMsg = 'this RepeatSection field is required';
        const returnMsg = (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        return returnMsg;
      }
    }
  }
};
