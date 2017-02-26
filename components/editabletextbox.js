app.component('editableTextbox',  {
        bindings: {
            isEditable: '=',
            value: '=',
            onClick: '&',
            large: '<'
        },
        template:['<div class="input">',
            '<div ng-hide="et.isEditable" ng-click="et.clickText()">{{et.value}}</div>',
            '<input ng-model="et.value" ng-show="et.isEditable && !et.large" />',
            '<textarea ng-model="et.value" ng-show="et.isEditable && et.large"></textarea>',
        '</div>'].join(''),
        controller: function(){
            
        },
        controllerAs: 'et'
});