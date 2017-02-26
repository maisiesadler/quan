app.component('addQuestion',  {
        bindings: {
            onSaveQuestion: '&',
            user: '<'
        },
        template:['<input class="add-question title" ng-model="aq.question.title" />',
            '<textarea ng-model="aq.question.description"></textarea>',
            '<div ng-click="aq.saveNewQuestion()">Add</div>'].join(''),
        controller: function(){
            this.saveNewQuestion = function() {
                if (this.question && this.question.title && this.question.description){
                    this.question.user = this.user;
                    this.question.date = new Date().toString();
                    this.onSaveQuestion({question: this.question});
                }
            }
        },
        controllerAs: 'aq'
});