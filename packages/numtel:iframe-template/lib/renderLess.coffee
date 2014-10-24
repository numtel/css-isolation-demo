# Can only include less on the server
less = Npm.require 'less'

Meteor.methods
  renderLess: (input) ->
    operation = Meteor.wrapAsync (input, callback) ->
      less.render input, callback
    return operation input
