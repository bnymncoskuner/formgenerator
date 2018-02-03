export const EDIT_REPEAT_SECTION_CONTROL_COMPONENT = 'editRepeatSectionControl';

export const editRepeatSectionControlComponent = {
  template: `
    <div class="panel panel-default"  ng-controller="demoController as vm">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="greyText">
            <i class="fa fa-eye"></i>
            &nbsp;
            {{'PREVIEW_TAB' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label
              for="repeatSection"
              class="control-label textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
            
                <form ng-submit="vm.onSubmit()" novalidate>
                  <formly-form model="vm.model" fields="vm.fields" form="vm.form" options="vm.options">
                    <button type="submit" class="btn btn-primary submit-button" ng-disabled="vm.form.$invalid">Submit</button>
                  </formly-form>
                </form>
                <hr />
                <h2>Model</h2>
                <pre>{{vm.model | json}}</pre>
                <h2>Fields <small>(note, functions are not shown)</small></h2>
                <pre>{{vm.originalFields | json}}</pre>
                <h2>Form</h2>
                <pre>{{vm.form | json}}</pre>

                <p class="help-block">
                  {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script type="text/ng-template" id="repeatSection.html">
      <div>
      	<!--loop through each element in model array-->
      	<div class="{{hideRepeat}}">
          <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)">
            <formly-form fields="fields"
                         model="element"
                         form="form">
            </formly-form>
            <div style="margin-bottom:20px;">
              <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                Remove
              </button>
            </div>
            <hr>
        </div>
        <p class="AddNewButton">
  	      <button type="button" class="btn btn-primary" ng-click="addNew()" >{{to.btnText}}</button>
        </p>
      </div>
    </script>
  </div>
  `,
  bindings: {
    nyaSelect: '='
  },
  controller:
  class editRepeatSectionControlController {
    static $inject = [];
    constructor() {
      //
    }
  }
};

const editRepeatSectionModuleName = 'stepway.editRepeatSectionControl.module';

export default angular
                .module(editRepeatSectionModuleName, [])
                .component(EDIT_REPEAT_SECTION_CONTROL_COMPONENT, editRepeatSectionControlComponent);



  // <div class="panel panel-default">
  //   <div class="panel-body">
  //     <div class="row">
  //       <div class="col-md-12">
  //           <h5 class="greyText">
  //             <i class="fa fa-pencil-square-o"></i>
  //             &nbsp;
  //             {{'EDIT_PROPERTIES' | translate}} :
  //           </h5>
  //       </div>
  //     </div>
  //     <hr/>
  //     <div class="row">
  //       <div class="form-group">
  //         <label
  //           for="inputTextLabelUpdate"
  //           class="col-lg-3 control-label greyText editPropertiesLabel">
  //           {{'LABEL_TEXT' | translate}} :
  //         </label>
  //         <div class="col-lg-9">
  //           <input
  //             type="text"
  //             class="form-control"
  //             ng-model="$ctrl.nyaSelect.temporyConfig.formlyLabel"
  //             id="inputTextLabelUpdate"
  //             placeholder="{{'ADD_EDIT_LABEL_HERE' | translate}}">
  //         </div>
  //       </div>
  //     </div>
  //     <div class="marginTopFivepixels"></div>
  //     <div class="row">
  //       <div class="form-group">
  //         <label
  //           for="inputTextplaceholderUpdate"
  //           class="col-lg-3 control-label greyText editPropertiesLabel">
  //           {{'PLACEHOLDER' | translate}} :
  //         </label>
  //         <div class="col-lg-9">
  //           <input
  //             type="text"
  //             class="form-control"
  //             ng-model="$ctrl.nyaSelect.temporyConfig.formlyPlaceholder"
  //             id="inputTextplaceholderUpdate"
  //             placeholder="{{'ADD_EDIT_PLACEHOLD' | translate}}">
  //         </div>
  //       </div>
  //     </div>
  //     <div class="marginTopFivepixels"></div>
  //     <div class="row">
  //       <div class="form-group">
  //         <label
  //           for="inputTextRequiredUpdate"
  //           class="col-lg-3 control-label greyText editPropertiesLabel">
  //           {{'REQUIRED' | translate}} :
  //         </label>
  //         <div class="col-lg-9">
  //           <div class="checkboxCssCorrection">
  //             &nbsp;
  //           </div>
  //           <input
  //             type="checkbox"
  //             ng-model="$ctrl.nyaSelect.temporyConfig.formlyRequired"
  //             id="inputTextRequiredUpdate">
  //         </div>
  //       </div>
  //     </div>
  //     <div class="marginTopFivepixels"></div>
  //     <div class="row">
  //       <div class="form-group">
  //         <label
  //           for="inputTextDescriptionUpdate"
  //           class="col-lg-3 control-label greyText editPropertiesLabel">
  //           {{'DESCRIPTION' | translate}} :
  //         </label>
  //         <div class="col-lg-9">
  //           <input
  //             type="text"
  //             class="form-control"
  //             ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
  //             id="inputTextDescriptionUpdate"
  //             placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>





    // <script type="text/ng-template" id="repeatSection.html">
    //   <div>
    //   	<!--loop through each element in model array-->
    //   	<div class="{{hideRepeat}}">
    //       <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)">
    //         <formly-form fields="fields"
    //                      model="element"
    //                      form="form">
    //         </formly-form>
    //         <div style="margin-bottom:20px;">
    //           <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
    //             Remove
    //           </button>
    //         </div>
    //         <hr>
    //     </div>
    //     <p class="AddNewButton">
  	//       <button type="button" class="btn btn-primary" ng-click="addNew()" >{{to.btnText}}</button>
    //     </p>
    //   </div>
    // </script>