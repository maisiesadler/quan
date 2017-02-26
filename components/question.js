app.component('question',  {
        bindings: {
            question: '='
        },
        template:['<div class="question title">{{et.question.title}}</div>',
            '<div class="question user">({{et.question.user.name}} - {{et.displayDate(et.question.date)}})</div>',
            '<div class="question description">{{et.question.description}}</div>'].join(''),
        controller: function($scope) {
            this.displayDate = function(date){
                return helper.displayDate(date);
            };
        },
        controllerAs: 'et'
});