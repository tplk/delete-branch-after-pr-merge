# delete-branch-after-pr-merge [![Build Status](https://travis-ci.com/tplk/delete-branch-after-pr-merge.svg?branch=master)](https://travis-ci.com/tplk/delete-branch-after-pr-merge) [![Greenkeeper badge](https://badges.greenkeeper.io/tplk/delete-branch-after-pr-merge.svg)](https://greenkeeper.io/)
A GitHub App built with [probot](https://github.com/probot/probot)
that automatically deletes branch when Pull Request is merged.

## Setup
Create a `.github/delete-branch-after-pr-merge.yml` file
in default branch of your repository after bot installation via
[GitHub Apps](https://github.com/apps/delete-branch-after-pr-merge).

#### Default configuration:
```yaml
# An array of excluded branches which shouldn't be deleted after pr merge.
exclude:
 - master
# If set to true bot will leave a comment after deleting merged branch.
comment: true
```
