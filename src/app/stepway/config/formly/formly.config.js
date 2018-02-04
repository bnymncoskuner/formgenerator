import {
    richTextTemplate,
    blankTemplate,
    headerTemplate,
    subTitleTemplate,
    basicSelectTemplate,
    groupedSelectTemplate,
    multiSelectTemplate,
    repeatSectionTemplate,
    datepickerTemplate,
    datetimepickerTemplate,
    validationTemplate
} from './formly.config.templates';


function formlyConfig(formlyConfigProvider) {
    formlyConfigProvider.setType({
        name: 'richEditor',
        template: richTextTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
        name: 'blank',
        template: blankTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'header',
        template: headerTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'subTitle',
        template: subTitleTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'basicSelect',
        template: basicSelectTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
        name: 'groupedSelect',
        template: groupedSelectTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
        name: 'multiSelect',
        template: multiSelectTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
        name: 'repeatSection',
        template: repeatSectionTemplate.template,
        // templateUrl: 'repeatSection.html',
        controller: function($scope) {
            $scope.formOptions = { formState: $scope.formState };
            $scope.addNew = addNew;

            $scope.copyFields = copyFields;

            console.log($scope.copyFields);

            $scope.copyFields = function(fields) {
                fields = angular.copy(fields);
                addRandomIds(fields);
                return fields;
            }

            $scope.addNew = function() {
                $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                var repeatsection = $scope.model[$scope.options.key];
                var lastSection = repeatsection[repeatsection.length - 1];
                var newsection = {};
                if (lastSection) {
                    newsection = angular.copy(lastSection);
                }
                repeatsection.push(newsection);
            }

            $scope.addRandomIds = function(fields) {
                unique++;
                angular.forEach(fields, function(field, index) {
                    if (field.fieldGroup) {
                        addRandomIds(field.fieldGroup);
                        return; // fieldGroups don't need an ID
                    }

                    if (field.templateOptions && field.templateOptions.fields) {
                        addRandomIds(field.templateOptions.fields);
                    }

                    field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                });
            }

            $scope.getRandomInt = function(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });

    ////////////////////////////
    // angular UI date picker
    ////////////////////////////
    // thx Kent C. Dodds

    const attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];

    const bindings = [
        'datepicker-mode',
        'min-date',
        'max-date'
    ];

    const ngModelAttrs = {};
    angular.forEach(attributes, (attr) => {
        ngModelAttrs[camelize(attr)] = { attribute: attr };
    });

    angular.forEach(bindings, (binding) => {
        ngModelAttrs[camelize(binding)] = { bound: binding };
    });

    formlyConfigProvider.setType({
        name: 'datepicker',
        template: datepickerTemplate.template,
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datepickerOptions: {
                    format: 'dd/MM/yyyy',
                    initDate: new Date(),
                    showWeeks: false
                }
            }
        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: ['$scope', ($scope) => {
            $scope.datepicker = {};
            // make sure the initial value is of type DATE!
            var currentModelVal = $scope.model[$scope.options.key];
            if (typeof(currentModelVal) == 'string') {
                $scope.model[$scope.options.key] = new Date(currentModelVal);
            }
            $scope.datepicker.opened = false;
            $scope.datepicker.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.datepicker.opened = !$scope.datepicker.opened;
            };
        }]
    });
    formlyConfigProvider.setType({
        name: 'datetimepicker',
        template: datetimepickerTemplate.template,
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datetimepickerOptions: {
                    format: 'dd/MM/yyyy',
                    initDate: new Date(),
                    showWeeks: false
                }
            }
        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: ['$scope', ($scope) => {
            $scope.datetimepicker = {};
            // make sure the initial value is of type DATE!
            var currentModelVal = $scope.model[$scope.options.key];
            if (typeof(currentModelVal) == 'string') {
                $scope.model[$scope.options.key] = new Date(currentModelVal);
            }
            $scope.datetimepicker.opened = false;
            $scope.datetimepicker.open = function($event) {

                $event.preventDefault();
                $event.stopPropagation();
            };

            $scope.initDateTimePicker = function() {
                if ($('#' + $scope.id).is(':visible')) {
                    $('#' + $scope.id).datetimepicker();
                } else {
                    $('#' + $scope.id).prop('disabled', false);
                    setTimeout(() => {
                        $scope.initDateTimePicker();
                    }, 10);
                }
            }

            $scope.initDateTimePicker();
        }]
    });

    /**
     * wrappers to show validation errors
     * without having to rewrite formly types
     */
    formlyConfigProvider.setWrapper([{
        template: validationTemplate.template
    }]);

    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function(match, chr) {
            return chr ? chr.toLowerCase() : '';
        });
    }
}

formlyConfig.$inject = ['formlyConfigProvider'];

export default formlyConfig;