---
title: Creating a Quick Action to open in VS Code
date: 2021-01-22T01:14:56.095Z
description: Open files or folders in VS Code using a MacOS quick action
tags:
  - macos
  - automator
---
Steps:
1. Launch Automator
2. Create a new **Quick Action**
<br />
<img src="https://www.jimbobbennett.io/content/images/2018/12/2018-12-13_14-01-47.png" style="width:100%; max-width:400px;" />
<br />
3. Configure the workflow:
    - Set it to receive current *"files and folders"* from Finder.
    - Set an image if you want one
4. Add a new **Run Shell Script** action to the workflow.
    - Set the *Pass Input* to be *"as arguments"*
    - Set the shell script as <code>open -nb "com.microsoft.VSCode" --args "$*"</code>
    - Save the action using a name like <code>Open in VS Code</code>
```bash
open -nb "com.microsoft.VSCode" --args "$*"
```

<img src="https://www.jimbobbennett.io/content/images/2018/12/workflow.png" style="width:100%; max-width:500px;" />


This will register a new quick action with Finder, and you will now able to right-click on any file or folder in Finder and select *Quick Actions -> Open in VS Code*

<img src="https://www.jimbobbennett.io/content/images/2018/12/2018-12-13_14-11-29-1.png" style="width:100%; max-width:500px;" />