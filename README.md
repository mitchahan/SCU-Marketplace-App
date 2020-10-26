# SCU-Marketplace-App
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Make sure that when you run `npm start` that you are in the client folder, NOT the root directory or server directory.

## Branching Strategy

These are just some helpful commands you might want to use when branching:
Switch to a branch by this name that is locally stored:
`git checkout branchName`
Pull a branch from the git repo:
`git pull origin/branchName`
This will likely be `origin/develop`.
Delete a local branch:
`git branch -D branchName`
This displays if the branch you're in is up to date:
`git status`

Checking code in on console
```
    cd .. to root directory... i.e. leasr
    git add .
    git commit -m "MESSAGE DESCRIBING WHAT YOU DID"
    git push
```
Sometimes you may need to copy the upstream command because it hasn't been created yet, just copy and paste the prompted one in console.

### Creating a New Branch to Work From Example
```
    git pull origin/develop
    git checkout -b feature/WhatYouAreBuilding
```

Do some work.

Test and make sure it works.

```
    git add .
    git commit -m "Quick desc. of what you did"
```

Or

`git commit . -m "Quick desc. of what you did"` (This just combines the two commands above)

Then head over to our Git Repository, create a pull request for your feature branch -> develop.

Have at least one person approve the Pull Request.

Go back to your local code.

```
    git checkout develop
    git pull origin/develop
    git status
```

This checks if everything is up to date and in the right commit order.

`git branch`

Make sure you're in develop.

`git branch -D feature/WhatYouAreBuilding`

Repeat.

## Other Notes
If you messed up a commit or Pull Request, reach out to Mitch. Mitch has dealt with lots of fucked up commits and pull requests.
