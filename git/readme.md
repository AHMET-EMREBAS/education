### Git

#### Git Status

Show the current status of working tree

```shell
    git status
```

#### Git Add

Add changes to stage

#### Git Commit

Merge the stage with the current branch

#### Git Push | Git Push --set-upstream origin [branch-name]

### Git Branch

#### Git Stash

```shell
    git stash  ( git stash push) ## Save changes to stash stack and remove from the local
    git stash pop  ## Apply the last stash in the stask to the local and removes it from the stash stack
    git stash list ## Show all stashes
    git stash show stash@{0} ## Show the first stash
    git stash show stash@{1} ## Show the second stash
    git stash show stash@{2} ## Show the third stash
    git stash apply stash@{2} ## Apply the third stash
    git stash show stash@{2} ## Show the changes in the third stash
    git stash clear ## Removes all stashes
    git stash drop stash@{2} ## Removes the third stash from stash stack
```

#### Git Config

```shell

    git config --global user.name "Your Name"
    git config --global user.email "youremail@domain.com"


```
