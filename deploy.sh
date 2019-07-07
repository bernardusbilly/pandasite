#!/usr/bin/env bash

echo "Creating new build gh-pages branch locally"
git stash
npm run build
git add .
git commit -m "Creating production build"

# Todo: Ask if user wants to push their current build to their current working branch

echo "Deleting gh-pages branch locally"
# Todo: Check if gh-pages exists locally
git branch -D gh-pages

echo "Take the specified branch to 'gh-pages' branch"
BRANCH_NAME=$(git branch | grep \* | cut -d ' ' -f2)
git checkout ${BRANCH_NAME}
git checkout gh-pages
git push -f origin gh-pages