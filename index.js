module.exports = function (robot) {
  robot.log('Yay, the app was loaded!')

  robot.on([
    'pull_request.reopened',
    'pull_request.opened',
  ], async context => {
    robot.log(context)
    console.log(context)

    const params = context.issue({body: 'Hello World!'})

    // Post a comment on the issues
    return context.github.issues.createComment(params)
  })
}
