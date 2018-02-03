const EDIT_MODAL_CONTROLLER_NAME = 'editControlModalController';
const EDIT_MODAL_CONTROLLERAS_NAME = 'editControlModCtrl';

/* global angular */
(function () {

  'use strict';

  var app = angular.module('formlyExample', ['formly', 'formlyBootstrap'], function config(formlyConfigProvider) {
    var unique = 1;
    formlyConfigProvider.setType({
      name: 'repeatSection',
      templateUrl: 'repeatSection.html',
      controller: function ($scope) {
        $scope.formOptions = {
          formState: $scope.formState
        };
        $scope.addNew = addNew;

        $scope.copyFields = copyFields;


        function copyFields(fields) {
          fields = angular.copy(fields);
          addRandomIds(fields);
          return fields;
        }

        function addNew() {
          $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
          var repeatsection = $scope.model[$scope.options.key];
          var lastSection = repeatsection[repeatsection.length - 1];
          var newsection = {};
          if (lastSection) {
            newsection = angular.copy(lastSection);
          }
          repeatsection.push(newsection);
        }

        function addRandomIds(fields) {
          unique++;
          angular.forEach(fields, function (field, index) {
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

        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }
    });
  });


  app.controller('MainCtrl', function MainCtrl(formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Joe Zhou',
      url: 'https://plus.google.com/u/0/111062476999618400219/posts' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Repeating Section'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };
    vm.options = {};

    init();

    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }


    function init() {
      vm.model = {
        investments: [{
            investmentName: 'abc',
            investmentDate: (new Date()).toDateString(),
            stockIdentifier: '',
            investmentValue: '',
            relationshipName: '',
            complianceApprover: '',
            requestorComment: ''
          },
          {
            investmentName: 'haf',
            investmentDate: (new Date()).toDateString(),
            stockIdentifier: '',
            investmentValue: '',
            relationshipName: '',
            complianceApprover: '',
            requestorComment: ''
          }
        ]
      };

      vm.fields = [{
        type: 'repeatSection',
        key: 'investments',
        templateOptions: {
          btnText: 'Add another investment',
          fields: [{
              className: 'row',
              fieldGroup: [{
                  className: 'col-xs-4',
                  type: 'input',
                  key: 'investmentName',
                  templateOptions: {
                    label: 'Name of Investment:',
                    required: true
                  }
                },
                {
                  type: 'input',
                  key: 'investmentDate',
                  className: 'col-xs-4',
                  templateOptions: {
                    label: 'Date of Investment:',
                    placeholder: 'dd/mm/yyyy such as 20/05/2015',
                    dateFormat: 'DD, d  MM, yy'
                  }
                },
                {
                  type: 'input',
                  key: 'stockIdentifier',
                  className: 'col-xs-4',
                  templateOptions: {
                    label: 'Stock Identifier:'
                  }
                }
              ]
            },
            {
              "type": "radio",
              "key": "type",
              "templateOptions": {
                "options": [{
                    "name": "Text Field",
                    "value": "input"
                  },
                  {
                    "name": "TextArea Field",
                    "value": "textarea"
                  },
                  {
                    "name": "Radio Buttons",
                    "value": "radio"
                  },
                  {
                    "name": "Checkbox",
                    "value": "checkbox"
                  }
                ],
                "label": "Field Type",
                "required": true
              }
            },
            {
              type: 'input',
              key: 'investmentValue',
              templateOptions: {
                label: 'Value:'
              },
              expressionProperties: {
                'templateOptions.disabled': '!model.stockIdentifier'
              }
            },
            {
              type: 'checkbox',
              model: 'formState',
              key: 'selfExecuting',
              templateOptions: {
                label: 'Are you executing this trade?'
              }
            },
            {
              hideExpression: '!formState.selfExecuting',
              fieldGroup: [{
                  type: 'input',
                  key: 'relationshipName',
                  templateOptions: {
                    label: 'Name:'
                  }
                },
                {
                  type: 'select',
                  key: 'complianceApprover',
                  templateOptions: {
                    label: 'Compliance Approver:',
                    options: [{
                        name: 'approver 1',
                        value: 'some one 1'
                      },
                      {
                        name: 'approver 2',
                        value: 'some one 2'
                      }
                    ]
                  }
                },
                {
                  type: 'textarea',
                  key: 'requestorComment',
                  templateOptions: {
                    label: 'Requestor Comment',
                    rows: 4
                  }
                }
              ]
            }
          ]
        }

      }];
    }
  });

})();


// const newLocal = $('.formly_3_datetimepicker_datetimepicker-1994127_1').datetimepicker();

class editControlModalController {
  constructor($uibModalInstance,
    nyaSelect,
    toaster,
    selectOptionManage,
    $modalProxy) {

    this.$modalInstance = $uibModalInstance;
    this.nyaSelect = nyaSelect;
    this.toaster = toaster;
    this.selectOptionManage = selectOptionManage;
    this.$modalProxy = $modalProxy;

    this.init();
  }

  init() {
    const initOptionModel = {
      rows: []
    };

    this.radioRowCollection = initOptionModel;
    this.newOptionRadio = {
      saisie: ''
    };
    this.basicSelectRowCollection = initOptionModel;
    this.newOptionBasicSelect = {
      saisie: ''
    };
    this.groupedSelectRowCollection = initOptionModel;
    this.newOptionGroupedSelect = {
      saisie: ''
    };
    this.GroupedSelectGroups = {
      list: []
    };
    this.newGroupGroupedSelect = {
      saisie: ''
    };



    this.multiSelectRowCollection = initOptionModel;
    this.nyaSelect.temporyConfig.multifilter = [];

    var temp_const = {
      'group': ""
    };
    this.nyaSelect.temporyConfig.multifilter.push(temp_const);

    this.newOptionMultiSelect = {
      saisie: ''
    };
    this.MultiSelectGroups = {
      list: []
    };
    this.newGroupMultiSelect = {
      saisie: ''
    };

    this.groupSelectGroupClick = {
      showList: false
    };
    this.showGroupList = false;
    this.demodt = {};
    this.dateOptions = this.dateOptionsInit();
    this.demodt.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

    this.demodttime = {};
    this.dateTimeOptions = this.dateTimeOptionsInit();
    this.demodttime.formats = ['dd/MM/yyyy hh:mm:ss', 'yyyy-MM-dd hh:mm', 'yyyy-MM-ddThh:mm', 'yyyy-MM-dd hh:mm:ss', 'yyyy-MM-ddThh:mm:ssZ', 'yyyy-MM-dd hh:mm P Z'];

    this.nyaSelect.selectedControl = this.nyaSelect.temporyConfig.selectedControl;
    this.nyaSelectFiltered = {};
    this.modelNyaSelect = {};

    // this.options                    = {};
    // this.fields                     = [];
    // this.model                      = {};
    // this.originalFields             = {};

    //init today date
    this.today();
    //init nyaSelect model depending selected control
    this.initNyaSelectConformingSelectedControl();

    // var vm = this;
    // funcation assignment

    // this.onSubmit = onSubmit;

    // variable assignment

    // this.author = { // optionally fill in your info below :-)
    //   name: 'Joe Zhou',
    //   url: 'https://plus.google.com/u/0/111062476999618400219/posts' // a link to your twitter/github/blog/whatever
    // };

    this.exampleTitle = 'Repeating Section'; // add this

    // this.env = {
    //   angularVersion: angular.version.full,
    //   formlyVersion: formlyVersion
    // };

    var vm = this;
    // funcation assignment
    // vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Joe Zhou',
      url: 'https://plus.google.com/u/0/111062476999618400219/posts' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Repeating Section'; // add this
    // vm.env = {
    //   angularVersion: angular.version.full,
    //   formlyVersion: formlyVersion
    // };
    vm.options = {};
    vm.originalFields = angular.copy(vm.fields);


    vm.model = {
      investments: [{
          investmentName: 'abc',
          investmentDate: (new Date()).toDateString(),
          stockIdentifier: '',
          investmentValue: '',
          relationshipName: '',
          complianceApprover: '',
          requestorComment: ''
        },
        {
          investmentName: 'haf',
          investmentDate: (new Date()).toDateString(),
          stockIdentifier: '',
          investmentValue: '',
          relationshipName: '',
          complianceApprover: '',
          requestorComment: ''
        }
      ]
    };

    vm.fields = [{
      type: 'repeatSection',
      key: 'investments',
      templateOptions: {
        btnText: 'Add another investment',
        fields: [{
            className: 'row',
            fieldGroup: [{
                className: 'col-xs-4',
                type: 'input',
                key: 'investmentName',
                templateOptions: {
                  label: 'Name of Investment:',
                  required: true
                }
              },
              {
                type: 'input',
                key: 'investmentDate',
                className: 'col-xs-4',
                templateOptions: {
                  label: 'Date of Investment:',
                  placeholder: 'dd/mm/yyyy such as 20/05/2015',
                  dateFormat: 'DD, d  MM, yy'
                }
              },
              {
                type: 'input',
                key: 'stockIdentifier',
                className: 'col-xs-4',
                templateOptions: {
                  label: 'Stock Identifier:'
                }
              }
            ]
          },
          {
            "type": "radio",
            "key": "type",
            "templateOptions": {
              "options": [{
                  "name": "Text Field",
                  "value": "input"
                },
                {
                  "name": "TextArea Field",
                  "value": "textarea"
                },
                {
                  "name": "Radio Buttons",
                  "value": "radio"
                },
                {
                  "name": "Checkbox",
                  "value": "checkbox"
                }
              ],
              "label": "Field Type",
              "required": true
            }
          },
          {
            type: 'input',
            key: 'investmentValue',
            templateOptions: {
              label: 'Value:'
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.stockIdentifier'
            }
          },
          {
            type: 'checkbox',
            model: 'formState',
            key: 'selfExecuting',
            templateOptions: {
              label: 'Are you executing this trade?'
            }
          },
          {
            hideExpression: '!formState.selfExecuting',
            fieldGroup: [{
                type: 'input',
                key: 'relationshipName',
                templateOptions: {
                  label: 'Name:'
                }
              },
              {
                type: 'select',
                key: 'complianceApprover',
                templateOptions: {
                  label: 'Compliance Approver:',
                  options: [{
                      name: 'approver 1',
                      value: 'some one 1'
                    },
                    {
                      name: 'approver 2',
                      value: 'some one 2'
                    }
                  ]
                }
              },
              {
                type: 'textarea',
                key: 'requestorComment',
                templateOptions: {
                  label: 'Requestor Comment',
                  rows: 4
                }
              }
            ]
          }
        ]
      }

    }];
  }

  // function definition
  onSubmit() {
    alert(JSON.stringify(this.model), null, 2);
  }

  initNyaSelectConformingSelectedControl() {
    //place nya-select to selection if not none :
    if (this.nyaSelect.selectedControl !== 'none') {
      for (let i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
        if (this.nyaSelect.controls[i].id === this.nyaSelect.selectedControl) this.modelNyaSelect = this.nyaSelect.controls[i];
      }
      if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectFromNYA();
      if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectFromNYA();
      if (this.nyaSelect.selectedControl === 'MultiSelect') {
        this.bindMultiSelectFromNYA();
        console.log(this.demodt);
      }
      if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioFromNYA();
      if (this.nyaSelect.selectedControl === 'RepeatSection') {
        console.log(this.fields);
        console.log("TSTSTSTSTS");
      }
    }
    this.initNyaSelectFiltered();
  }

  initNyaSelectFiltered() {
    const listCtrl = [].concat(this.$modalProxy.getFilteredNyaSelectObject());
    angular.extend(this.nyaSelectFiltered, {
      'controls': listCtrl,
      'selectedControl': this.nyaSelect.selectedControl,
      'temporyConfig': this.nyaSelect.temporyConfig
    });

  }

  bindBasicSelectFromNYA() {
    if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
      for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
        const newOption = {
          'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
          'order': i,
          'group': ''
        };
        this.basicSelectRowCollection.rows.push(newOption);
      }
    }
  }

  bindRadioFromNYA() {
    if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
      for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
        const newOption = {
          'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
          'order': i,
          'group': ''
        };
        this.radioRowCollection.rows.push(newOption);
      }
    }
  }

  bindGroupedSelectFromNYA() {
    if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
      for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
        const newOption = {
          'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
          'order': i,
          'group': this.nyaSelect.temporyConfig.formlyOptions[i].group
        };
        this.groupedSelectRowCollection.rows.push(newOption);
      }
      const filteredgroup = _.uniq(_.pluck(this.groupedSelectRowCollection.rows, 'group'));
      angular.copy(filteredgroup, this.GroupedSelectGroups.list);
    }
  }

  bindMultiSelectFromNYA() {
    if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
      for (let i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
        const newOption = {
          'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
          'order': i,
          'group': this.nyaSelect.temporyConfig.formlyOptions[i].group
        };
        this.multiSelectRowCollection.rows.push(newOption);
        // this.nyaSelect.temporyConfig.multifilter.push(this.nyaSelect.temporyConfig.formlyOptions[i].group);
      }
      const filteredgroup = _.uniq(_.pluck(this.multiSelectRowCollection.rows, 'group'));
      angular.copy(filteredgroup, this.MultiSelectGroups.list);
    }
  }

  addNewOptionRadio() {
    const result = this.selectOptionManage.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio.saisie);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: `'${this.newOptionRadio.saisie}' cannot be added.`,
        showCloseButton: true
      });
    }
    this.newOptionRadio = {
      saisie: ''
    }; //reset input
  }

  removeRadioRow(index) {
    const result = this.selectOptionManage.removeOption(this.radioRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Delete was cancelled.',
        showCloseButton: true
      });
    }
  }

  upThisRadioRow(index) {
    const result = this.selectOptionManage.upthisOption(this.radioRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  downThisRadioRow(index) {
    const result = this.selectOptionManage.downthisOption(this.radioRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  addNewOptionBasicSelect() {
    const result = this.selectOptionManage.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect.saisie);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: `'${this.newOptionBasicSelect.saisie}' cannot be added.`,
        showCloseButton: true
      });
    }
    this.newOptionBasicSelect = {
      saisie: ''
    }; //reset input
  }

  removeRow(index) {
    const result = this.selectOptionManage.removeOption(this.basicSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Delete was cancelled.',
        showCloseButton: true
      });
    }
  }

  upThisRow(index) {
    const result = this.selectOptionManage.upthisOption(this.basicSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  downThisRow(index) {
    const result = this.selectOptionManage.downthisOption(this.basicSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  showGroupListToChoose() {
    this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
  }

  addNewGroupToGroupedSelect() {
    if (this.newGroupGroupedSelect.saisie !== '') {
      for (let i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
        if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
          this.toaster.pop({
            type: 'warning',
            timeout: 2000,
            title: 'Group already exists',
            body: 'No group added.',
            showCloseButton: true
          });
        }
      }
      this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
    } else {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: 'Not a valid group to add',
        body: 'No group added.',
        showCloseButton: true
      });
    }
    this.newGroupGroupedSelect.saisie = '';
  }


  addNewGroupToMultiSelect() {
    var enable_push = false;
    if (this.newGroupMultiSelect.saisie !== '') {
      for (let i = this.MultiSelectGroups.list.length - 1; i >= 0; i--) {
        if (this.MultiSelectGroups.list[i] === this.newGroupMultiSelect.saisie) {
          this.toaster.pop({
            type: 'warning',
            timeout: 2000,
            title: 'Group already exists',
            body: 'No group added.',
            showCloseButton: true
          });
        }
      }
      this.MultiSelectGroups.list.push(this.newGroupMultiSelect.saisie);

      for (var i = 0; i < this.nyaSelect.temporyConfig.multifilter.length; i++) {
        if (this.nyaSelect.temporyConfig.multifilter[i].group == this.newGroupMultiSelect.saisie) {
          enable_push = true;
        }
      }
      if (!enable_push) {
        const cconst = {
          'group': this.newGroupMultiSelect.saisie
        };
        this.nyaSelect.temporyConfig.multifilter.push(cconst);
      }
      console.log(this.nyaSelect.temporyConfig.multifilter);
    } else {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: 'Not a valid group to add',
        body: 'No group added.',
        showCloseButton: true
      });
    }
    this.newGroupMultiSelect.saisie = '';
  }

  addNewOptionGroupedSelect() {
    const result = this.selectOptionManage.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect.saisie, '');
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: `'${this.newOptionGroupedSelect.saisie}' cannot be added.`,
        showCloseButton: true
      });
    }
    // bind nya : dont bind here $apply is not done fast enough
    // bindGroupedSelectToNya();
    // reset input
    this.newOptionGroupedSelect = {
      saisie: ''
    };
  }


  addNewOptionMultiSelect() {
    // $('.js-example-basic-multiple').select2();
    console.log(this.multiSelectRowCollection);
    const result = this.selectOptionManage.addNewOptionMultiSelect(this.multiSelectRowCollection, this.newOptionMultiSelect.saisie, '');
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: `'${this.newOptionMultiSelect.saisie}' cannot be added.`,
        showCloseButton: true
      });
    }
    // bind nya : dont bind here $apply is not done fast enough
    // bindGroupedSelectToNya();
    // reset input
    this.newOptionMultiSelect = {
      saisie: ''
    };
  }

  removeGroupedSelectRow(index) {
    const result = this.selectOptionManage.removeOption(this.groupedSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Delete was cancelled.',
        showCloseButton: true
      });
    }
  }

  removeMultiSelectRow(index) {
    const result = this.selectOptionManage.removeOption(this.multiSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Delete was cancelled.',
        showCloseButton: true
      });
    }
  }


  upThisGroupedSelectRow(index) {
    const result = this.selectOptionManage.upthisOption(this.groupedSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  upThisMultiSelectRow(index) {
    const result = this.selectOptionManage.upthisOption(this.multiSelectRowCollection, index);
    // for(var i = 0; i < this.multiSelectRowCollection.rows.length; i++){
    //   this.nyaSelect.temporyConfig.multifilter.push(this.multiSelectRowCollection.rows[i].group);
    // }
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  downThisGroupedSelectRow(index) {
    const result = this.selectOptionManage.downthisOption(this.groupedSelectRowCollection, index);
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  downThisMultiSelectRow(index) {
    const result = this.selectOptionManage.downthisOption(this.multiSelectRowCollection, index);
    // for(var i = 0; i < this.multiSelectRowCollection.rows.length; i++){
    //   this.nyaSelect.temporyConfig.multifilter.push(this.multiSelectRowCollection.rows[i].group);
    // }
    if (result.resultFlag === false) {
      this.toaster.pop({
        type: 'warning',
        timeout: 2000,
        title: result.details,
        body: 'Operation cancelled.',
        showCloseButton: true
      });
    }
  }

  today() {
    this.demodt.dt = new Date();
    this.demodttime.dt = new Date();
  }

  clear() {
    this.demodt.dt = null;
    this.demodttime.dt = null;
  }

  openDateTime() {
    // this.demodt.opened = true;
    // this.demodttime.opened = true;

    // $( ".input-group-addon" ).html( "<span class='input-group-addon'><i class='glyphicon glyphicon-calendar'></i></span> <input type='text' id='datetimepicker1' class='datetimepicker1 form-control ng-pristine ng-valid ng-isolate-scope ng-empty ng-valid-date ng-touched' data-date-format='dd/MM/yyyy hh:mm:ss' ng-model='$ctrl.demodttime.dt' is-open='$ctrl.demodttime.opened' datepicker-options='$ctrl.dateOptions' close-text='Close' ng-click='$ctrl.openDateTime()' style=''>" );
    console.log(this.demodttime);
    console.log($('.formly_3_datetimepicker_datetimepicker-1994127_1').datetimepicker());
    this.set_DateTime();
    console.log("This is openDateTime");
  }

  set_DateTime() {
    $('.formly_3_datetimepicker_datetimepicker-1994127_1').datetimepicker()
  }

  open($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.set_DateTime();
    this.demodt.opened = true;
  }

  dateOptionsInit() {
    return {
      formatYear: 'yy',
      startingDay: 1,
      showWeeks: true,
      initDate: null
    };
  }

  dateTimeOptionsInit() {
    return {
      formatYear: 'yy',
      startingDay: 1,
      showWeeks: true,
      initDate: null
    };
  }

  selectThisControl(controlName) {
    this.nyaSelect.selectedControl = 'none';
    if (controlName == 'MultiSelect') {
      console.log("This is Multiselect");
      if ($('.js-example-basic-multiple').is(':visible') == false) {
        this.set_select2function();
      }
    }
    this.resetTemporyConfig();
    for (let i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
      if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
    }
    if (this.nyaSelect.selectedControl === 'Date') {
      this.initDatePicker();
      console.log("TTTTT");
    }
    if (this.nyaSelect.selectedControl === 'DateTime') {
      this.initDateTimePicker();
    }
    if (controlName == 'RepeatSection') {
      console.log(this.fields);
      console.log("TSTSTSTSTS");
    }
  }


  set_select2function() {
    setTimeout(() => {
      $('.js-example-basic-multiple').select2();
      console.log("This part is call");
    }, 100);
  }

  // selectThisControl(controlName) {
  //   this.nyaSelect.selectedControl = 'none';
  //   this.resetTemporyConfig();
  //   for (let i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
  //     if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
  //   }
  //   if (this.nyaSelect.selectedControl === 'Date') this.initDatePicker();
  // }

  ok() {
    if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectToNya();
    if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectToNya();
    if (this.nyaSelect.selectedControl === 'MultiSelect') this.bindMultiSelectToNya();
    if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioToNya();
    //save config to control
    this.$modalProxy.applyConfigToSelectedControl(this.nyaSelect);
    //return current model to parent controller :
    this.$modalInstance.close(this.nyaSelect);
  }

  cancel() {
    this.$modalInstance.dismiss('cancel');
  }

  bindBasicSelectToNya() {
    const resetNyASelectOptions = [];
    this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
    if (this.basicSelectRowCollection.rows.length > 0) {
      for (let i = 0; i <= this.basicSelectRowCollection.rows.length - 1; i++) {
        const newOption = {
          'name': this.basicSelectRowCollection.rows[i].option,
          'value': i,
          'group': ''
        };
        this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
      }
    }
  }

  bindGroupedSelectToNya() {
    this.nyaSelect.temporyConfig.formlyOptions = [];
    for (let i = 0; i <= this.groupedSelectRowCollection.rows.length - 1; i++) {
      const newOption = {
        'name': this.groupedSelectRowCollection.rows[i].option,
        'value': i,
        'group': this.groupedSelectRowCollection.rows[i].group
      };
      this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
    }
  }


  bindMultiSelectToNya() {
    this.nyaSelect.temporyConfig.formlyOptions = [];
    for (let i = 0; i <= this.multiSelectRowCollection.rows.length - 1; i++) {
      const newOption = {
        'name': this.multiSelectRowCollection.rows[i].option,
        'value': i,
        'group': this.multiSelectRowCollection.rows[i].group
      };
      this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
      // this.nyaSelect.temporyConfig.multifilter.push(this.multiSelectRowCollection.rows[i].group);
    }
  }

  bindRadioToNya() {
    const resetNyASelectOptions = [];
    this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
    if (this.radioRowCollection.rows.length > 0) {
      for (let i = 0; i <= this.radioRowCollection.rows.length - 1; i++) {
        const newOption = {
          'name': this.radioRowCollection.rows[i].option,
          'value': i,
          'group': ''
        };
        this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
      }
    }
  }

  initDatePicker() {
    this.nyaSelect.temporyConfig.datepickerOptions = {
      format: this.demodt.formats[0]
    };
  }

  initDateTimePicker() {
    console.log(this.demodttime.formats[0]);
    if ($(".formly_3_datetimepicker_datetimepicker-1994127_1").is(':visible')) {
      this.nyaSelect.temporyConfig.datepickerOptions = {
        format: this.demodttime.formats[0]
      };
      this.set_DateTime();
    } else {
      $(".formly_3_datetimepicker_datetimepicker-1994127_1").prop('disabled', false);
      setTimeout(() => {
        this.initDateTimePicker();
      }, 10);
    }
  }

  resetTemporyConfig() {
    this.nyaSelectFiltered.temporyConfig = {
      formlyLabel: '',
      formlyRequired: false,
      formlyPlaceholder: '',
      formlyDescription: '',
      formlyOptions: []
    };
  }
}

const toInject = [
  '$uibModalInstance',
  'nyaSelect',
  'toaster',
  'selectOptionManage',
  '$modalProxy'
];

editControlModalController.$inject = toInject;

export default editControlModalController;

export {
  EDIT_MODAL_CONTROLLER_NAME,
  EDIT_MODAL_CONTROLLERAS_NAME
};