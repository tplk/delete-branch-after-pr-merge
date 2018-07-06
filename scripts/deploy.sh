#!/bin/sh

now="npx now"
token="--token $NOW_TOKEN"

echo "$ now switch delete-branch-after-pr-merge"
$now switch $token delete-branch-after-pr-merge

echo "$ now rm --yes delete-branch-after-pr-merge"
$now rm $token --yes delete-branch-after-pr-merge

echo "$ now --public -e NODE_ENV=production -e APP_ID -e WEBHOOK_SECRET -e PRIVATE_KEY"
$now $token --public -e NODE_ENV=production -e APP_ID -e WEBHOOK_SECRET -e PRIVATE_KEY

echo "$ now alias delete-branch-after-pr-merge"
$now alias $token delete-branch-after-pr-merge
