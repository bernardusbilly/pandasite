#!/usr/bin/env bash

# Stashing any working changes
# Todo: Check if there is any changes from git status
git stash --include-untracked

echo "Deleting gh-pages branch locally and remotely"
# Todo: Check if gh-pages exists locally
git branch -D gh-pages
git push origin --delete gh-pages

echo "Deleting prod-build branch locally"
git branch -D prod-build

# Saving the working current branch to go back to it later
BRANCH_NAME=$(git branch | grep \* | cut -d ' ' -f2)

# Take the specified branch to 'gh-pages' branch
git checkout -b prod-build

echo "Creating a production build and commit the changes"
npm run build
git add .
git commit -m "Creating production build"

git subtree push --prefix build origin gh-pages

# Bring user back to the the previously working branch
git checkout ${BRANCH_NAME}
git stash pop