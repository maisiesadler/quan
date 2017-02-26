app.component('questionPage',  {
        bindings: {
            onClickQuestion: '&',
            questionPage: '=',
            editable: '<'
        },
        template:['<div class="question-page">',
        '<div ng-if="qp.canDelete" ng-click="qp.deleteMe()">X</div>',
            '<question question="qp.questionPage.question" ng-dblclick="qp.clickQu()"></question>',
            //'<div ng-click="qp.questionPage.showComments = !qp.questionPage.showComments" class="toggle-comments">Toggle comments</div>',
            '<div ng-show="qp.editable">',
                '<div ng-repeat="comment in qp.questionPage.comments">',
                    '<comment comment="comment"></comment>',
                '</div>',
                '<div ng-click="qp.addNewComment(questionPage)">+</div>',
            '</div>',
        '</div>'].join(''),
        controller: function($scope) {
            var me = this;
            this.addNewComment = function(questionPage) {
                var user = $scope.$parent.$parent.user;
                if (!user){
                    alert("pls log in");
                    return;
                }
                for(var i = 0; i < this.questionPage.comments.length; i++){
                    if (this.questionPage.comments[i].isEditable)
                        return;
                }

                var co = new comment(user,'');
                co.isEditable = true;
                this.questionPage.comments.push(co);
            };

            this.deleteMe = function(){
                $scope.$emit('deleteme', me.questionPage);
            };

            $scope.$on('saveyourself', function(evt, data){
                $scope.$emit('saveme', me.questionPage);
            });

            this.clickQu = function() {
                this.onClickQuestion({questionPage: me.questionPage});
            };

            var user = $scope.$parent.$parent.user;
            this.canDelete = this.editable && user.name === this.questionPage.question.user.name;
        },
        controllerAs: 'qp'
});