var List = function (tasks) {
    this.tasks = tasks;
};

List.prototype = Object.create(List.prototype, {
    items: {
        value: function () {
            return this.tasks;
        },
        enumerable: true,
        writeable: false
    }
});