if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    less: function () {
      return 'p { border-bottom: 2px solid #f00; em { font-weight:bold; } }';
    }
  });


  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.polymerArgExample.helpers({
    arrayTest: function () {
      return [1, 2, 3];
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}