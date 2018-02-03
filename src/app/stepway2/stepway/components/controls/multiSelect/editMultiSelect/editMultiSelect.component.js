export const EDIT_MULTI_SELECT_COMPONENT = 'editMultiSelectControl';

export const editMultiSelectControlComponent = {
  template: `
    <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5
            class="greyText">
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
              for="select"
              class="control-label textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <select multiple                 
                ng-model="myVar"
                class="js-example-basic-multiple col-sm-12 col-xs-12 col-md-12 col-lg12"
                ng-disabled="$ctrl.multiSelectRowCollection.rows.length == 0">

                <option ng-repeat="multiSelectRow in $ctrl.multiSelectRowCollection.rows | orderBy : 'group'" 
                  value="$nidex">
                        {{multiSelectRow.option}}
                  </option>

              </select>
            
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
          <h5
            class="greyText">
            <i class="fa fa-pencil-square-o"></i>
            &nbsp;
            {{'EDIT_PROPERTIES' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <label
            for="multiSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="col-sm-9 col-xs-9 col-md-9 col-lg-9">
              <input
                type="text"
                class="form-control"
                id="inputAddNewMultiOption"
                placeholder="{{'ADD_A_NEW_OPTION' | translate}}"
                ng-model="$ctrl.newOptionMultiSelect.saisie">
            </div>
            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
              <button
                class="btn btn-primary"
                ng-click="$ctrl.addNewOptionMultiSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <label
            for="multiSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_GROUPS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="col-sm-9 col-xs-9 col-md-9 col-lg-9">
              <input
                id="inputAddNewGroupMultiOption"
                type="text"
                class="form-control"
                ng-model="$ctrl.newGroupMultiSelect.saisie" id="inputTextLabelUpdateMultiSelect"
                placeholder="{{'ADD_A_NEW_GROUP' | translate}}">
            </div>
            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
              <button
                class="btn btn-primary"
                ng-click="$ctrl.addNewGroupToMultiSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3">
          <label  class=" control-label greyText editPropertiesLabel">
            {{'EDIT_GROUPS_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="container">
              <div ng-if="$ctrl.multiSelectRowCollection.rows.length === 0">
                <h5 class="text-center greyText">
                  <em>
                    - {{'NO_OPTION_ADD_NEW' | translate}} -
                  </em>
                </h5>
              </div>
              <table
                ng-if="$ctrl.multiSelectRowCollection.rows.length > 0"
                class="table table-striped">
                <thead>
                  <tr>
                    <th st-ratio="20">
                      {{'ORDER' | translate}}
                    </th>
                    <th st-ratio="25">
                      {{'GROUP' | translate}}
                    </th>
                    <th st-ratio="30">
                      {{'OPTION' | translate}}
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  <tr>
                    <th st-ratio="20">
                    </th>
                    <th st-ratio="25">
                    </th>
                    <th st-ratio="30">
                      <input
                        ng-model="$ctrl.multiSelectFilter"
                        placeholder="{{'SEARCH_4_OPTION' | translate}}"
                        class="input-sm form-control"
                        type="search"
                      />
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr ng-repeat="multiSelectRow in $ctrl.multiSelectRowCollection.rows | filter:$ctrl.multiSelectFilter as multiSelectRow">
                    <td st-ratio="20">
                      {{$index}}
                    </td>
                    <td st-ratio="25">
                      <div ng-if="$ctrl.groupSelectGroupClick.showList === true">
                        <div ng-if="$ctrl.multiSelectGroups.list.length === 0">
                          <p class="text-left noGroupText">- {{'NO_GROUP_ADD_NEW' | translate}} -</p>
                        </div>
                        <div ng-if="$ctrl.multiSelectGroups.list.length > 0">
                          <ol
                            class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editMultiSelectnyaSelect"
                            ng-model="multiSelectRow.group"
                            id="modelMultiOptionMultiChoose"
                            disabled="$ctrl.multiSelectGroups.list.length === 0">
                            <li
                              class="nya-bs-option"
                              nya-bs-option="MultiSelectGroup in $ctrl.multiSelectGroups.list"
                              value="MultiSelectGroup">
                              <a>{{MultiSelectGroup}}</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div ng-if="$ctrl.groupSelectGroupClick.showList === false">
                        {{multiSelectRow.group}}
                      </div>
                    </td>
                    <td st-ratio="30">
                      {{multiSelectRow.option}}
                    </td>
                    <td st-ratio="25">
                      <div class="pull-right">
                        <button
                          class="btn btn-primary"
                          ng-click="$ctrl.upThisMultiSelectRow({index: $index})">
                          <i class="fa fa-arrow-up"></i>
                        </button>
                        <button
                          class="btn btn-primary"
                          ng-click="$ctrl.downThisMultiSelectRow({index: $index})">
                          <i class="fa fa-arrow-down"></i>
                        </button>
                        <button
                          class="btn btn-warning"
                          ng-click="$ctrl.showGroupListToChoose()">
                          <i class="fa fa-pencil-square-o"></i>
                        </button>
                        <button
                          class="btn btn-danger"
                          ng-click="$ctrl.removeMultiSelectRow({index: $index})">
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    <hr/>
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
  <script>
    console.log($ctrl.multiSelectRowCollection.rows);
  </script>
  `,
  bindings: {
    nyaSelect:                  '=',
    multiSelectRowCollection: '=',
    newOptionMultiSelect:     '=',
    newGroupMultiSelect:      '=',
    groupSelectGroupClick:      '=',
    multiSelectGroups:        '=',

    addNewOptionMultiSelect:  '&',
    addNewGroupToMultiSelect: '&',
    upThisMultiSelectRow:     '&',
    downThisMultiSelectRow:   '&',
    showGroupListToChoose:      '&',
    removeMultiSelectRow:     '&'
  },
  controller    :
  class editMultiSelectControlController {
    static $inject = [];

    constructor() {

    }
  }
};

const editMultiSelectModuleName = 'stepway.editMultiSelect.module';

export default angular
                .module(editMultiSelectModuleName, [])
                .component(EDIT_MULTI_SELECT_COMPONENT, editMultiSelectControlComponent);



            //   <ol class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12" 
            //   ng-model="modelMultiSelect"
            //   data-live-search="true"
            //   disabled="$ctrl.multiSelectRowCollection.rows.length === 0">
            //   <li
            //     nya-bs-option="multiSelectRow in $ctrl.multiSelectRowCollection.rows group by multiSelectRow.group"
            //     value="$index">
            //     <span class="dropdown-header">
            //       {{multiSelectRow.group}}
            //     </span>
            //     <a>
            //       <span>
            //         {{multiSelectRow.option}}
            //       </span>
            //       <span class="glyphicon glyphicon-ok check-mark">
            //       </span>
            //     </a>
            //   </li>
            // </ol>


          //   <option ng-repeat="multiSelectRow in $ctrl.multiSelectRowCollection.rows group by multiSelectRow.group" value="{{multiSelectRow.option}}">
          //   {{multiSelectRow.option}}
          // </option>
                    // <strong class="select2-results__group" ng-disabled="true">{{multiSelectRow.group}}<br/></strong>
