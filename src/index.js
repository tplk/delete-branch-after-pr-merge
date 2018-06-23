const getConfig = require('./lib/get-config')
const defaultConfig = require('./lib/default-config')

const deleteBranch = async (context, head) =>
  context.github.gitdata.deleteReference(head)

const setupConfig = async (context) => {
  let config = await getConfig(context, 'delete-branch-after-pr-merge.yml', defaultConfig)

  if (config == null) {
    config = {...defaultConfig}
  } else if (config.exclude == null || config.exclude.length == null) {
    config.exclude = [...defaultConfig.exclude]
  }

  return config
}

module.exports = function (robot) {
  robot.on([
    'pull_request',
  ], async context => {
    const pr = context.payload.pull_request

    // Delete only if Pull Request is closed by merging.
    if (context.payload.action === 'closed' && pr.merged === true) {
      const config = await setupConfig(context)
      const branchName = pr.head.ref

      // Delete only if branch isn't excluded
      if (config.exclude.indexOf(branchName) < 0) {
        const head = {
          ...context.repo(),
          ref: `heads/${branchName}`,
        }

        const response = await deleteBranch(context, head)

        if (response.status === 204 && config.comment) {
          const commentData = {
            owner: head.owner,
            repo: head.repo,
            number: pr.number,
            body: `Deleted merged branch **${branchName}**`,
          }

          return context.github.issues.createComment(commentData)
        }
      }
    }
  })
}
