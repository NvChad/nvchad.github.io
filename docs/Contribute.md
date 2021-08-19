To contribute, the biggest thing you need is your own fork & `stylua`
- [Stylua](https://github.com/JohnnyMorganz/StyLua)
- [Github forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Github forking & setting upstream](https://www.atlassian.com/git/tutorials/git-forks-and-upstreams)
-- Please use the **`--rebase`** flag when updating your branch for contributions
```
git pull upstream main --rebase
```
- This will avoid redundant merge commits
- When making a PR (pull request), please be very descriptive in what you've done!
- We are open to all PRs, but may decline some for a myriad of reasons. Though don't be discouraged! We'll still be open to discussions.


### Things to know before contributing

- PR's are always welcomed however NvChad aims to be less bloated. So PR's regarding existing plugin's enhancement and creating new features with existing plugins itself ( without adding a new plugin), bug fixes and corrections are more encouraged.

- PR's regarding adding new plugins and their configs must be given some thought since NvChad is meant to be used as a "base" neovim config so it will have only a set of important plugins. So adding more and more opiniated plugins, making NvChad's config large unnecessarily + slow wont help!.

- NvChad wont keep adding more and more features (like adding new plugins most likely) as requested if they feel unneeded and arent usable by the majority, no spoonfeeding!! If you think the plugin you want to be added is very useful and many NvChaders would find it useful, then such feature's PR is welcomed!

- But adding specific features like adding config for [wakatime](https://github.com/wakatime/vim-wakatime) etc will be added in this [chad user configs](https://github.com/NvChad/NvChad/wiki/Chad-user-configs). This lets the user select the things only they want ( adding configs from extra configs ).
