# Committing Changes in Git

## What is a Commit?

Committing in Git is like saving a **snapshot** of our project at a specific point in time.  
It allows us to track progress, revert to previous states if needed, and maintain a clean project history.

---

## Workflow for Committing Changes

### 1. Check Status

Before committing, it’s a good practice to check the status of your repository to see which files are staged or unstaged:

```bash
git status
```

This ensures you commit only the changes you intend to.

---

### 2. Stage Changes

Before committing, changes must be staged using `git add`.

Examples:

* Stage all changes in the repository:

```bash
git add -A
```

* Stage specific files:

```bash
git add index.html
```

Staging allows precise control over which changes will be included in the next commit.

---

### 3. Commit Changes

Only staged changes are included in a commit. Examples:

* Commit all staged changes with a message:

```bash
git commit -m "Add new feature"
```

* Commit specific files with a message:

```bash
git commit -m "Update index.html" index.html
```

* Commit all changes, including tracked files automatically:

```bash
git commit -a -m "Commit all changes"
```

After committing, Git saves the snapshot to the repository, allowing you to continue working while preserving a clear history.

---

### Why Committing Matters

* Tracks project progress and changes
* Enables reverting to previous states if needed
* Keeps repository history clean and understandable
* Supports collaboration by providing meaningful change records