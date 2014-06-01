var ListItem = function (task, owner) {
    this.task = task;
    this.owner = owner;
};

ListItem.prototype = Object.create(ListItem.prototype, {
    details : {
        value: function () {
            return "[DETAILS] Taak '" + this.task + "' is toegewezen aan " + this.owner + ".";
        },
        enumerable: true
    }
});