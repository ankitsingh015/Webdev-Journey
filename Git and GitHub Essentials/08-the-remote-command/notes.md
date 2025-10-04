# The `git remote` Command

## Overview

The `git remote` command lets us **manage remote repositories** linked to our local repository.  
It allows us to list, add, remove, and rename remote repositories.

---

## Listing Remote Repositories

To see all configured remote repositories:

```bash
git remote -v
````

This shows remote names along with their URLs.

---

## Adding a Remote Repository

To add a new remote repository:

```bash
git remote add <name> <url>
```

**Example:**

```bash
git remote add origin <url>
```

> `origin` is the conventional name for the primary remote repository.

---

## Removing a Remote Repository

To remove a remote repository:

```bash
git remote remove <name>
```

**Example:**

```bash
git remote remove origin
```

This unlinks the specified remote from your local repository.

---

## Renaming a Remote Repository

To rename a remote repository:

```bash
git remote rename <old-name> <new-name>
```

**Example:**

```bash
git remote rename origin production
```

Renaming helps clarify the purpose of remotes, e.g., `origin` vs `production`.

---

## Task 2: Add Remote Repository to Local Repository

In **Task 1**, you created a remote repository on GitHub for your personal blog.
Now, you will connect your **local repository** to this remote.

**Steps:**

1. Create a local directory named `personal-blog`:

```bash
mkdir personal-blog
cd personal-blog
```

2. Initialize a new Git repository:

```bash
git init
```

3. Add the remote repository named `origin`:

```bash
git remote add origin <url>
```

> After this, your local repository is connected to the remote repository on GitHub, ready for pushing and pulling changes.