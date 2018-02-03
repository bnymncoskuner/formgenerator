export const EDIT_DATE_TIME_COMPONENT = 'editDateTimeControl';

export const editDateTimeControlComponent = {
  template: `
    <div class="panel panel-default">
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
                for="inputDateTime"
                class="control-label textControlLabel">
                {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
                <span
                  ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  class="textControlLabel">
                  *
                </span>
              </label>
              <div class="">
                <div class="input-group" >
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-calendar"></i>
                  </span>
                  <input id='formly_3_datetimepicker_datetimepicker-1994127_1'
                    type="text"
                    class=" formly_3_datetimepicker_datetimepicker-1994127_1 form-control ng-pristine ng-valid ng-isolate-scope ng-not-empty ng-valid-date ng-touched"
                    uib-datepicker-popup="{{$ctrl.nyaSelect.temporyConfig.datetimepickerOptions.format}}"
                    ng-model="$ctrl.demodttime.dt"
                    is-open="$ctrl.demodttime.opened"
                    close-text="Close"
                    ng-click="$ctrl.openDateTime()"
                  />
                </div>
                <p class="help-block">
                  {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h5 class="greyText">
              <i class="fa fa-pencil-square-o"></i>
              &nbsp;
              {{'EDIT_PROPERTIES' | translate}} :
            </h5>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="form-group">
          <label class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'DATE_FORMAT' | translate}} :
          </label>
          <div class="col-lg-9">
            <ol
              class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
              ng-model="$ctrl.nyaSelect.temporyConfig.datetimepickerOptions.format"
              id="dateformatSelect">
              <li
                class="nya-bs-option"
                nya-bs-option="dateformat in $ctrl.demodttime.formats"
                value="dateformat">
                <a>
                  {{dateformat}}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextLabelUpdate"
            class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'LABEL_TEXT' | translate}} :
          </label>
          <div class="col-lg-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyLabel"
              id="inputTextLabelUpdate"
              placeholder="{{'ADD_EDIT_LABEL_HERE' | translate}}">
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextRequiredUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              {{'REQUIRED' | translate}} :
            </label>
            <div class="col-lg-9">
              <div class="checkboxCssCorrection">
                &nbsp;
              </div>
              <input
                type="checkbox"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                id="inputTextRequiredUpdate">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextDescriptionUpdate"
              class="col-lg-3 control-label greyText editPropertiesLabel">
              {{'DESCRIPTION' | translate}} :
            </label>
            <div class="col-lg-9">
              <input
                type="text"
                class="form-control"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
                id="inputTextDescriptionUpdate"
                placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  bindings: {
    nyaSelect: '=',
    demodttime: '=',
    dateTimeOptions: '=',
    open: '&'
  },
  controller:
  class editDateTimeControlController {
    static $inject = [];

    constructor() {

    }
  }
};

const editDateTimeControlModuleName = 'stepway.editDateTimeControl.module';

export default angular
                .module(editDateTimeControlModuleName, [])
                .component(EDIT_DATE_TIME_COMPONENT, editDateTimeControlComponent);

/* <input type="text" id="datetimepicker1" class="datetimepicker1 form-control ng-pristine ng-valid ng-isolate-scope ng-empty ng-valid-date ng-touched" data-date-format="dd/MM/yyyy hh:mm:ss" ng-model="$ctrl.demodttime.dt" is-open="$ctrl.demodttime.opened" datepicker-options="$ctrl.dateOptions" close-text="Close" ng-click="$ctrl.openDateTime({event : $event})" style=""> */

                
                