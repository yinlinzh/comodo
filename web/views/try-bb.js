/**
 * Created by Yinlin on 12/21/14.
 */

(function($) {
    Book = Backbone.Model.extend({
        initialize: function() {
            console.log('a new book');
        },
        defaults: {
            name: 'Book Title',
            author: 'No One'
        },
    });

    var book = new Book();

    World = Backbone.Model.extend({
        url: /world/,
        name: null
    });

    Worlds = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.bind("add", options.view.addOneWorld);
        }
    });

    AppView = Backbone.View.extend({
        el: $("body"),
        initialize: function() {
            this.worlds = new Worlds(null, {view: this});
        },
        events: {
            "click #check-btn": "checkIn"
        },
        checkIn: function() {
            var worldName = prompt("Where");
            worldName = worldName || "unknown";
            var world = new World({name: worldName});
            this.worlds.add(world);
        },
        addOneWorld: function(model) {
            $("#world-list").append("<li>This is the greeting from <b>" + model.get("name") + "</b>, hello world</li");
            model.save();
        }
    });

    var appView = new AppView();

    var AppRouter = Backbone.Router.extend({
        routes: {
            ":page/:part": "defaultRoute"
        },
        defaultRoute: function(page, part) {
//            alert("This is " + page + " and " + part + ".");
            appRouter.navigate('/' + page + '#' + part, {trigger: false, replace: false});
        }
    });

    var appRouter = new AppRouter();

    Backbone.history.start();
})(jQuery);
