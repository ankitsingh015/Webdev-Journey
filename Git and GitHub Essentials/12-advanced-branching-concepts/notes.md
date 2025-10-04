# Merging and Rebasing Changes

## Git Merge

`git merge` integrates changes from one branch into another.

### Example Workflow:

Consider two feature branches: `feature-login` and `feature-signup`.  

1. **Pull Request:**  
   Create a pull request to merge `feature-login` into `main` for review.

2. **Merge:**  
   After approval, merge `feature-login` into `main`. Now all `feature-login` changes are in `main`.

3. **Update Feature Branch:**  
   Ensure `feature-signup` has the latest changes from `main`:

```bash
git checkout feature-signup
git merge main
````

**Result:**
`feature-signup` now contains all changes from `main`, including those from `feature-login`.

> Merging ensures smooth integration of changes across branches.

---

## Git Rebase

`git rebase` moves or combines a sequence of commits onto a new base commit, maintaining a **linear history**.

### Example Workflow:

Consider the same branches: `feature-login` and `feature-signup`.

1. **Rebase Feature Branch:**

```bash
git checkout feature-login
git rebase main
```

This moves all commits from `feature-login` onto the tip of `main`.

2. **Merge After Rebase:**

```bash
git checkout main
git merge feature-login
```

3. **Update Other Feature Branch:**

```bash
git checkout feature-signup
git rebase main
```

**Result:**
`feature-signup` now contains all changes from `main` in a **linear history**, making the project easier to understand.

> Rebase is preferred when you want a clean, linear commit history.

---

## Task 6: Create Branch and Merge Main

In **Task 5**, you merged the `add-readme` pull request. Now:

1. Create a new branch named `login-feature`:

```bash
git checkout -b login-feature
```

2. Create a file `login.html` in the root directory.
3. Commit the changes to `login-feature`:

```bash
git add login.html
git commit -m "feat(login): add login page template"
```

4. Switch to `main` and pull the latest changes:

```bash
git checkout main
git pull origin main
```

5. Merge the changes from `main` into `login-feature`:

```bash
git checkout login-feature
git merge main
```

6. Push the `login-feature` branch to the remote repository:

```bash
git push origin login-feature
```

> After this, `login-feature` contains the latest changes from `main` and is ready for further development.


