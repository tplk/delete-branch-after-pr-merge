#!/bin/sh

now="npx now --public --token $NOW_TOKEN"

echo "$ now rm --safe --yes delete-branch-after-pr-merge"
$now rm --safe --yes delete-branch-after-pr-merge

echo "$ now -e APP_ID -e WEBHOOK_SECRET -e PRIVATE_KEY"
$now -e APP_ID -e WEBHOOK_SECRET -e PRIVATE_KEY

echo "$ now alias"
$now alias
