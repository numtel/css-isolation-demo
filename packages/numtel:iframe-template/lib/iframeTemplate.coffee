Template.iframeTemplate.rendered = ->
  frame = @find 'iframe'
  frameDoc = frame.contentWindow.document
  frameBody = frameDoc.body

  lessContent = @data.less
  if lessContent
    Meteor.call 'renderLess', lessContent, (error, css) ->
      console.log error if error
      frameDoc.head.innerHTML = '<style>' + css + '</style>'

  Blaze.render Template[@data.src], frameBody
