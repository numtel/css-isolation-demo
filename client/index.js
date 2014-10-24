// counter starts at 0
Session.setDefault("counter", 0);

Template.body.helpers({
  less: function () {
    return 'p { border-bottom: 2px solid #f00; em { font-weight:bold; } }';
  }
});

Template.polymerExample.helpers({
  testData: function () {
    return JSON.stringify([
      {
        'name': 'mocha',
        'children': [
          {
            'title': 'section1',
            'children': [
              {
                'title': 'should have 7 fingers',
                'result': 'pending'
              }
            ]
          },
          {
            'title': 'section2',
            'children': [
              {
                'title': 'subsection7',
                'children': [
                  {
                    'title': 'should be as semantic as possible',
                    'result': 'passed',
                    'duration': 2382
                  },
                  {
                    'title': 'should work on my ipaq',
                    'result': 'failed',
                    'duration': Session.get('counter'),
                    'stack': 'ReferenceError: unable to locate the year 2002'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]);
  }
});


Template.hello.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});
