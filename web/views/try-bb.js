/**
 * Created by Yinlin on 12/21/14.
 */


"use strict";

(function($) {
    var Book = Backbone.Model.extend({
        urlRoot: 'http://localhost:3000/books/',
        initialize: function() {
            var self = this;

            self.on('change', function () {
                console.log('Model changed: ' + JSON.stringify(self.changed));
            });

            self.on('change:ddd', function() {
                console.log('Model.ddd changed');
            });
            console.log('a new book');

//            self.on('invalid', function(model, err) {
//               alert(JSON.stringify(model.attributes) + ' error: ' + err);
//            });
        },
        defaults: {
            name: 'Book Title',
            author: 'No One'
        },
        validate: function(attrs) {
            if(attrs.year < 2000) {
                return 'Year must be after 2000';
            }
            if(!attrs.name) {
                return 'A name must be provided';
            }
        }
    });

    var Library = Backbone.Collection.extend({
        model: Book,
        url: 'http://localhost:3000/books/',
        initialize: function() {
            var self = this;
            self.on('add', function (model) {
                console.log('new model added' + model.get('name') + ', ' + model.get('author'));
            });
            console.log('Creating a new library collection, length: ' + self.length);
        },
        comparator: function(first, second) {
            var firstAuthor = first.get('author'),
                secondAuthor = second.get('author');

            if(firstAuthor > secondAuthor) return 1;
            else if(firstAuthor < secondAuthor) return -1;
            else return 0;
        }
    });

    var myBook = new Book();
    var library = new Library([myBook]);
    console.log('Creating a new library collection, length: ' + library.length);


    //

    console.log('Begin of Backbone Collection Part-------------------------');
    var bookOne = new Book({name: 'Beginning Backbone', author: 'James Sugrue'});
    var bookTwo = new Book({name: 'Pro Javascript Design Patterns', author:'Dustin Diaz, Ross Harmes'});
    var myLibrary = new Library([bookOne, bookTwo]);
    console.log('Library contains ' + myLibrary.length + ' books');
    var bookThree = new Book({name: 'Pro Node.js for Developers', author: 'Colin J. Ihrig'});
    myLibrary.add(bookThree);
    console.log('Library contains ' + myLibrary.length + ' books');
    var bookFour = new Book({name: 'Pro jQuery', author: 'Adam Freeman'});
    var bookFive = new Book({id: 'abc', name : 'Pro Javascript Performance', author: 'Tom Barker'});
    myLibrary.create([bookFour, bookFive]);
    console.log('Library has ' + myLibrary.length + ' books');
    myLibrary.add(bookOne, {merge:true});
    console.log('Library has ' + myLibrary.length + ' books');
    console.log(myLibrary.get('abc'));
    console.log('End of Backbone Collection Part-------------------------');

    myLibrary.forEach(function(item) {
        console.log(item.get('name') + ', ' + item.get('author'));
    });


    var authors = myLibrary.pluck('author');
    authors.forEach(function(item) {
        console.log('author -----> ' + item);
    });


//    myLibrary.save({
//        success: function(e) {
//            console.log('myLibrary saved');
//        },
//        error: function(e) {
//            console.log('myLibrary failed saved');
//        }
//    });

    //

    console.log(myBook.get('name'));
    console.log(myBook.attributes);
    myBook.set('name', 'Beginning backbone.js', {silent: true});
    myBook.set('ddd', 'Beginning backbone.js');
    console.log(myBook.attributes);
    myBook.set('year', 2013);
    console.log('Book year: ', myBook.get('year'));
//    myBook.set('year', 1999);
//    console.log('Book year: ', myBook.get('year'));
    console.log('Model valid status: ', myBook.isValid());
//    myBook.unset('year');
    console.log('Book year: ', myBook.get('year'));
//    myBook.set('id', 100);
    myBook.save(myBook.attributes, {
        success: function(model, response, options) {
            console.log('Model saved');
            console.log('Id: ' + model.get('id'));
        },
        error: function(model, xhr, options) {
            console.log('Failed to save model');
        }
    });//myBook.attributes);

    myBook.set('year', 2011);
    myBook.fetch({
        success: function(model, res, options) {
            console.log('Fetch success');
            console.log('year: ' + model.get('year'));
        },
        error: function(model, res, options) {
            console.log('Fetch error');
        }
    });


    //

    var LibraryView = Backbone.View.extend({
        initialize: function() {
            console.log('View created');
        }
    });

    //

    var World = Backbone.Model.extend({
        url: /world/,
        name: null
    });

    var Worlds = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.bind("add", options.view.addOneWorld);
        }
    });

    var AppView = Backbone.View.extend({
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
