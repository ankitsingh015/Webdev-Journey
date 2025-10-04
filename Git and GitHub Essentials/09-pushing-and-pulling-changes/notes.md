# Pushing and Pulling Changes

## Pushing Changes to GitHub

Pushing changes sends your **local commits** to the remote repository on GitHub.  

### Workflow:

1. **Stage Changes**  
   Stage the files you want to commit:

```bash
git add -A
````

2. **Commit Changes**
   Commit the staged changes with a descriptive message:

```bash
git commit -m "Add meaningful commit message"
```

3. **Push Changes**
   Push commits to the remote repository:

```bash
git push origin <branch-name>
```

* The default branch is usually `main`.
* It's recommended to **push to a feature branch** instead of directly to `main`:

```bash
git push origin new-branch
```

After pushing, anyone with access to the repository can see your latest changes.

---

## Pulling Changes from GitHub

Pulling changes updates your **local repository** with changes from the remote repository.

### Workflow:

1. **Fetch Changes**
   Retrieve the latest changes without merging:

```bash
git fetch origin
```

2. **Check Changes**
   Compare your local branch with the remote branch:

```bash
git diff main origin/main
```

3. **Pull Changes**
   Merge remote changes into your local branch:

```bash
git pull origin main
```

* Pull from a specific branch:

```bash
git pull origin <branch-name>
```

* Pull all branches:

```bash
git pull origin
```

After pulling, your local repository is up-to-date with the remote repository.

---

## Task 3: Create Branch and Push README

In **Task 2**, you linked your local repository to GitHub. Now you will create a branch, add a README, and push it.

**Steps:**

1. Create a new branch named `add-readme`:

```bash
git checkout -b add-readme
```

2. Create a new file `README.md` in the root directory.
3. Add some content to `README.md`.
4. Stage and commit the changes:

```bash
git add README.md
git commit -m "docs: add README file for personal blog"
```

5. Push the branch to the remote repository:

```bash
git push origin add-readme
```

> After this, the `add-readme` branch is available on GitHub and can be reviewed or merged later.
