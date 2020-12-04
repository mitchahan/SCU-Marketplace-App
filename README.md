# SCU-Marketplace-App
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Make sure that when you run `npm start` that you are in the client folder, NOT the root directory or server directory.

### `npm run dev`

Runs the app in the development mode with the server.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Make sure that when you run `npm run dev` that you are in the client folder, NOT the root directory or server directory.

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

## Comment Convention
When creating a new file, please copy and paste the following into the start of the file:
```
/* @author
 * @lastModifiedBy
 * Description: [Please enter a quick description of what the files purpose is.]
 */
```

## Setting up the Local Server
In order to get the local server up and running to make edits and manipulate data you must do the following:

1. Create a '.env' in the root project directory, same location as '.env.sample'
    ```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PWD=yourpassword
    MYSQL_DB=scu-marketplace
    ```

2. Go to terminal:
Navigate to `scu-marketplace-app/src/server`, i.e. `cd 'blah/blah/scu-marketplace-app/src/server'`

    Type: 
    
    `mysql -u root -p < scu-marketplace.sql`
    
    enter your password
    
    Type: 
    
    `mysql -u root -p`

    enter your password again

    Type: 
    
    `USE scu-marketplace;`

    `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPassword';`

    `flush privileges;` 

## Other Notes
If you messed up a commit or Pull Request, reach out to Mitch. Mitch has dealt with lots of messed up commits and pull requests.
