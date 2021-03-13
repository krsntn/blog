---
title: Homebrew Cheatsheet
date: 2021-03-13T03:05:05.714Z
description: Homebrew basic commands
tags:
  - brew
---
### Brew Updates

| Command                          | Description                                        |
| :------------------------------- | :------------------------------------------------- |
| brew update                      | Fetch latest version of homebrew and formulae      |
| brew outdated {--formula/--cask} | Show formulae with an updated version available    |
| brew upgrade {--formula/--cask}  | Upgrade all outdated and unpinned brews            |
| brew pin \<formulae\>            | Prevent the specified formulae from being upgraded |
| brew unpin \<formulae\>          | Allow the specified pinned formulae to be upgraded |

### Brew Install

| Command                                   | Description                          |
| :---------------------------------------- | :----------------------------------- |
| brew install \<formulae/cask\> {--cask}   | Install given formulae or cask       |
| brew reinstall \<formulae/cask\> {--cask} | Reinstall the given formulae or cask |
| brew uninstall \<formulae/cask\> {--cask} | Uninstall the given formulae or cask |

### Brew Cleanup

| Command                        | Description                                             |
| :----------------------------- | :------------------------------------------------------ |
| brew cleanup                   | Remove older versions of installed formulae and cask    |
| brew cleanup \<formulae/cask\> | Remove older versions of specified formulae or cask     |
| brew cleanup -n                | Display all the formulae that will be removed (dry run) |

### Brew Search

| Command                     | Description                                                    |
| :-------------------------- | :------------------------------------------------------------- |
| brew list                   | List all the installed formulae                                |
| brew list --casks           | List all the installed casks                                   |
| brew \<formulae/cask\>      | Display all locally available formulae or casks for brewing    |
| brew search \<text\>        | Search all known formulae or casks based on the substring text |
| brew info \<formulae/cask\> | Display information about the formulae or cask                 |

### Brew Repositories

| Command                      | Description                                               |
| :--------------------------- | :-------------------------------------------------------- |
| brew tap                     | List all the current tapped repositories (taps)           |
| brew tap \<user/repo\>       | Tap a formulae or cask repository from Github using https |
| brew tap \<user/repo\> <URL> | Tap a formulae or cask repository from the specified URL  |
| brew untap \<user/repo\>     | Remove the given tap from the repository                  |

### Brew Help

| Command               | Description                         |
| :-------------------- | :---------------------------------- |
| brew --version        | Display the version of Homebrew     |
| brew help             | Print help information              |
| brew help \<command\> | Print help info of a brew command   |
| brew doctor           | Check system for potential problems |
