# Web Development Journey: Git & GitHub

Welcome to the Git & GitHub learning journey! This guide follows the BigBinary curriculum and will take you step-by-step from the basics of Git to advanced workflows and best practices.

---

## 1. Introduction to Git

Git is a **version control system** that helps track and manage changes to your code.  
It allows developers to:

- Track every change made to the codebase
- Collaborate with others without conflicts
- Create isolated environments using branches for experimentation and feature development

Think of Git as a **time machine for your code**—you can revert changes and explore multiple versions safely.

---

## 2. Git Workflow

Git organizes project files into three main states:

1. **Modified** – Files changed but not staged
2. **Staged** – Files selected for the next commit
3. **Committed** – Changes saved in Git's local database

### Project Structure in Git:

- **Working Tree**: Current editable project files  
- **Staging Area (Index)**: Tracks what will be included in the next commit  
- **Git Directory**: Stores project history and metadata

**Workflow:** Modify → Stage → Commit → Collaborate.

---

## 3. Installing Git

### Mac:
- Using **Xcode Command Line Tools**: `git --version`  
- Using **Homebrew**: `brew install git`

### Windows:
- Using **WSL**: `sudo apt install git`  
- Without WSL: Use the official Git installer (not recommended by BigBinary)

### Linux:
- Debian-based: `sudo apt install git-all`  
- RPM-based: `sudo dnf install git-all`  

Verify installation: `git --version`

---

## 4. Initializing a Repository

Use `git init` to start tracking an existing or new project.  
This creates a `.git` folder where Git stores metadata and project history.

**Adding an SSH key** helps you interact with GitHub securely without repeatedly entering your credentials.

---

## 5. Branching in Git

Branches allow you to **work independently** without affecting the main project.  

**Purpose:**

- Isolate new features
- Fix bugs safely
- Experiment freely
- Keep the main branch clean

**Key Actions:**

- Create & switch branches
- Rename branches
- Delete branches safely or forcefully

---

## 6. Staging Files

Staging is like **preparing files for a snapshot**:

- Stage specific files: `git add <file>`
- Stage all files: `git add .`
- Stage entire repository: `git add -A`

This ensures commits are clean and organized.

---

## 7. Ignoring Files

Use a `.gitignore` file to **exclude files or directories** from tracking, e.g., logs, temporary files, or personal configurations.

---

## 8. Committing Changes

Committing is like taking a **snapshot of your staged files**:

- Stage changes: `git add -A`
- Commit changes: `git commit -m "Meaningful message"`

Check status: `git status` before committing.

---

## 9. Remote Repositories

A **remote repository** connects your local repository to GitHub:

- Allows collaboration
- Provides a safe backup of your code
- Enables team workflows

**GitHub** is a platform to host remote repositories, work on open-source projects, and manage collaboration.

---

## 10. Working with Remote Repositories

**Creating a repository**:

- Fill in repository name, description, visibility
- Avoid initializing README, `.gitignore`, or license initially

**Adding a remote**: `git remote add origin <url>`  
**Pushing changes**: `git push origin <branch>`  
**Pulling changes**: `git pull origin <branch>`

---

## 11. GitHub Issues and Pull Requests

**Issues:** Track tasks, bugs, and enhancements. Assign and label for clarity.  
**Pull Requests:** Propose changes to be merged into the main branch.  

**Steps:**

1. Create a branch for your changes
2. Make edits and commit
3. Open a Pull Request on GitHub
4. Review and discuss changes with your team
5. Merge after approval

---

## 12. Assigning and Managing Work

- Assign issues and pull requests to team members
- Review code collaboratively
- Use options like **Merge**, **Squash and Merge**, or **Rebase and Merge** depending on workflow

---

## 13. Merging & Rebasing

**Merging:** Combines changes from one branch into another, preserving history.  
**Rebasing:** Moves commits to a new base commit to maintain a **linear history**.  

**Workflow example:**

1. Rebase feature branches on main
2. Merge feature branches into main
3. Keep all branches up-to-date

---

## 14. Collaborator Access

- Navigate to repository **Settings → Access**
- Invite collaborators by username or email
- Collaborators can push, pull, and manage code depending on permissions

---

## 15. Best Practices (BigBinary Style)

1. Link tasks to GitHub issues  
2. Use meaningful branch names (`<issue_number>-short-description`)  
3. Make atomic, logical commits  
4. Write descriptive, past-tense commit messages  
5. Use PRs with proper description format (`Closes #<issue-number>`)  
6. Push frequently, use draft PRs  
7. Assign PRs **only when ready**  
8. Review comments and merge **after approval**  
9. Respond to review comments systematically

---

### ✅ Summary

By following this path, you will:

- Understand Git’s workflow  
- Learn to stage, commit, and track changes  
- Manage remote repositories on GitHub  
- Collaborate using branches, issues, and pull requests  
- Follow BigBinary best practices for professional Git usage

This README serves as your **step-by-step guide and reference** as you learn and practice Git & GitHub.