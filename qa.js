var question = function(title, description, user) {
    this.title = title;
    this.description = description;
    this.user = user;
    this.date = new Date();
};

var questionPage = function(question){
    this.question = question;
    this.comments = [];
};

questionPage.prototype.addComment = function(user, description) {
    this.comments.push(new comment(user, description));
};

var comment = function(user, description) {
    this.user = user;
    this.description = description;
    this.comments = [];
    this.date = new Date().toString();
    this.rating = 0;
};

comment.prototype.addComment = function(user, description) {
    this.comments.push(new comment(user, description));
};

comment.prototype.incrRating = function() {
    this.rating ++;
};

comment.prototype.decrRating = function() {
    this.rating --;
};

var user = function(name, userkey) {
    this.name = name;
    this.userkey = userkey;
};

//var pageStorer = new store(storeType.page);
