---
id: contribute
title: Contribute
---

## NvChad install for contributors

If you wish to contribute to NvChad, you should:
1. [create a fork on GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. clone your fork to your machine
  - For ssh:
    ```shell
    $ git clone git@github.com:<YOUR GITHUB USERNAME>/NvChad.git ${XDG_CONFIG_HOME:-~/.config}/nvim
    ```
  - For https:
    ```shell
    $ git clone https://github.com/<YOUR GITHUB USERNAME>/NvChad.git ${XDG_CONFIG_HOME:-~/.config}/nvim
    ```
3. [add a new remote repo to track](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams)
   - this means you can push/pull as normal to your own repo, but also easily track & update from the NvChad repo
    - for ssh:
       ```shell
       $ git remote add upstream git@github.com:NvChad/NvChad.git
       ```
    - for https:
       ```shell
       $ git remote add upstream https://github.com/NvChad/NvChad.git
       ```  
4. any time you create a branch to do some work, use 
   ```shell
   $ git fetch upstream && git checkout -b dev-myFEAT upstream/main
   ```
5. only use the **--rebase** flag to update your dev branch
   - this means that there are no `Merge NvChad/main into devBranch` commits, which are to be avoided
   ```shell
   $ git pull upstream --rebase
   ```

## Things to know before contributing

- When making a PR (pull request), please be very descriptive about what you've done!

- We are open to all PRs, but may decline some for a myriad of reasons. Though don't be discouraged! We'll still be open to discussions.

- PR's are always welcomed however NvChad aims to be less bloated. So PR's regarding existing plugin's enhancement and creating new features with existing plugins itself ( without adding a new plugin), bug fixes and corrections are more encouraged.

- NvChad wont keep adding more and more features (like adding new plugins most likely) as requested if they feel unneeded and arent usable by the majority!! If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such feature's PR is welcomed!

- But adding specific features like adding config for [wakatime](https://github.com/wakatime/vim-wakatime) etc will be added in this [chad user configs](https://github.com/NvChad/NvChad/wiki/Chad-user-configs). This lets the user select the things only they want ( adding configs from extra configs ).


## Format your PR with stylua 

- check the [stylua config](https://github.com/NvChad/NvChad/blob/main/.stylua.toml)

## How to remove or edit commits from your PR
> You may have been directed here to remove a commit such as a merge commit: `Merge NvChad/main into devBranch` from your PR

> As these commands edit your git history, you may need to **force push** with `git push origin --force`

1. Run the following:
  ```
  $ git rebase -i HEAD~<NUMBER OF COMMITS TO GO BACK>
  ```
  <details><summary>Example</summary>
  <p>
  
  ```shell
  $ git rebase -i HEAD~4
  ```
  
  ```shell
  pick 28b2dcb statusline add lsp status
  pick dad9a39 feat: Added lsp radial progress
  pick 68f72f1 add clickable btn for exiting nvim
  pick b281b53 avoid using q! for quitting vim
  
  # Rebase 52b655b..b281b53 onto 52b655b (4 commands)
  #
  # Commands:
  # p, pick <commit> = use commit
  # r, reword <commit> = use commit, but edit the commit message
  # e, edit <commit> = use commit, but stop for amending
  # s, squash <commit> = use commit, but meld into previous commit
  # f, fixup <commit> = like "squash", but discard this commit's log message
  # x, exec <command> = run command (the rest of the line) using shell
  # b, break = stop here (continue rebase later with 'git rebase --continue')
  # d, drop <commit> = remove commit
  # l, label <label> = label current HEAD with a name
  # t, reset <label> = reset HEAD to a label
  # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
  # .       create a merge commit using the original merge commit's
  # .       message (or the oneline, if no original merge commit was
  # .       specified). Use -c <commit> to reword the commit message.
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  ```
  
  </p>
  </details>

2. Change the `pick` commands to whatever you wish, you may wish to `d` `drop` or `e` `edit` a commit. Then save & quit this git file to run it.

  <details><summary>Example</summary>
  <p>
  
  ```shell {3,4}
  pick 28b2dcb statusline add lsp status
  pick dad9a39 feat: Added lsp radial progress
  edit 68f72f1 add clickable btn for exiting nvim
  d b281b53 avoid using q! for quitting vim
  
  # Rebase 52b655b..b281b53 onto 52b655b (4 commands)
  #
  # Commands:
  # p, pick <commit> = use commit
  # r, reword <commit> = use commit, but edit the commit message
  # e, edit <commit> = use commit, but stop for amending
  # s, squash <commit> = use commit, but meld into previous commit
  # f, fixup <commit> = like "squash", but discard this commit's log message
  # x, exec <command> = run command (the rest of the line) using shell
  # b, break = stop here (continue rebase later with 'git rebase --continue')
  # d, drop <commit> = remove commit
  # l, label <label> = label current HEAD with a name
  # t, reset <label> = reset HEAD to a label
  # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
  # .       create a merge commit using the original merge commit's
  # .       message (or the oneline, if no original merge commit was
  # .       specified). Use -c <commit> to reword the commit message.
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
  #
  # Note that empty commits are commented out
  ```
  
  </p>
  </details>

3. If you picked `drop` you are done, if you picked `edit` then edit your files, then run:
  ```shell
  $ git add <files>
  ```

4. Once you have edited & added your files, run:
  ```shell
  $ git rebase --continue
  ```

5. You will likely need to push using:
  ```shell
  $ git push origin --force
  ```


## How to submit themes?

- check the dirs : hl_themes and themes in [nvim-base16 repo](https://github.com/NvChad/nvim-base16.lua) to get an idea.
- hl_themes/file.lua manages overall pretty highlights and their colors in nvchad , like statusline , nvim-tree , bufferline etc
- themes/file-base16.lua manages syntax colors + other highlights colors which havent been defined (by colors/highlights.lua file in nvchad config)

### Creating the theme (example)

- create a file and name it doom.lua 
- put this file in the hl_themes dir

Use my [tool](https://siduck76.github.io/hex-tools/) to lighten or darken colors , or some tool which does the same thing.

(Creating highlights theme)

- Copy the structure of other themes in doom.lua
- Ok now make sure you add appropriate and pretty colors!!

```
black = usually your theme bg (this should be the same as base00 in doom-base16.lua)
darker_black = 6% darker than black
black2 = 6% lighter than black

onebg = 10% lighter than black
oneb2 = 19% lighter than black
oneb3 = 27% lighter than black

grey = 40% lighter than black (the % here depends so choose the perfect grey!)
grey_fg = 10% lighter than grey
grey_fg2 = 20% lighter than grey
light_grey = 28% lighter than grey

baby_pink = 15% lighter than red or any babypink color you like!
line = 15% lighter than black 

nord_blue = 13% darker than blue 
sun = 8% lighter than yellow

statusline_bg = 4% lighter than black
lightbg = 13% lighter than statusline_bg
lightbg2 = 7% lighter than statusline_bg

pmenu_bg = green color mostly
folder_bg = blue color mostly i.e the hex value of the blue color you assigned earlier

(note : the above values are mostly approx values so its not compulsory that you have to use those exact numbers , test your theme i.e show it in the PR to get feedback from @siduck76)
```

(Creating base16 theme)

- create a file and name it doom-base16.lua
- put this file in the themes dir.

- copy the structure from other base16 themes in the themes dir.
- Follow the [base16 conventions](https://github.com/chriskempson/base16/blob/master/styling.md).
- make sure the variable names dont have "#" before the hex values i.e base00 = #000000 would be wrong , but base00 = 000000 would be right.

- Now send the PR!!

(note : above guide was only for the dark theme! making light themes is tougher and a pain xD , will make doc for it too soon!)
