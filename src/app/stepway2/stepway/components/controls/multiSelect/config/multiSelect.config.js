export const MultiSelectConfig = {
  id: 'MultiSelect',
  name: 'Multi Select',
  subtitle: 'Grouped Select',
  options: [],
  group: 'Select',
  formlyType: 'groupedSelect',
  formlySubtype: '',
  formlyLabel: '',
  formlyRequired: false,
  formlyDescription: '',
  formlyOptions: [],
  formlyExpressionProperties: {},
  formlyValidators: {},
  formlyValidation: {
    messages: {
      required: (viewValue, modelValue, scope) => {
        //return a required validation message :
        //-> '<label as name> is required '
        //-> or if not exists or empty just 'this field is required'
        const defaultReturnMsg = 'this Multi Select field is required';
        const returnMsg = (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        return returnMsg;
      }
    }
  }
};
