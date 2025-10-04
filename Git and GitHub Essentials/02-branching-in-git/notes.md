# Branching in Git

## What is Branching?

Branching in Git allows us to diverge from the main line of development and work independently without affecting the main project.
It’s like creating a **parallel workspace** where we can experiment, develop features, or fix bugs safely.

A **branch** in Git is essentially a pointer to a snapshot of our project at a specific moment in time.
When we create a branch, we’re copying the codebase at that point so we can modify it separately.

**Purpose of branches:**

- Isolate new feature development
- Fix bugs without affecting stable code
- Enable experimentation
- Keep the main branch clean and deployable

---

## Create and Switch Branches

### Check Current Branch

Before creating a branch, check which branch you’re currently on:

```bash
git branch
```

The branch with an asterisk (*) is the active one.

---

### Create a New Branch

To create a new branch:

```bash
git branch new-feature
```

---

### Switch to Another Branch

To move to a branch:

```bash
git checkout new-feature
```

---

### Create and Switch in One Step

Shortcut command:

```bash
git checkout -b new-feature
```

This both creates and moves you to the new branch in a single step.

---

## Renaming Branches

### Rename the Current Branch

```bash
git branch -m updated-login-feature
```

### Rename Another Branch

```bash
git branch -m fix-header-issue header-fix
```

Renaming branches improves readability and keeps branch names meaningful.

---

## Deleting Branches

### Safe Delete (checks if merged)

```bash
git branch -d old-feature-branch
```

If the branch isn’t fully merged, Git prevents deletion and shows:

```
error: The branch 'old-feature-branch' is not fully merged.
```

---

### Force Delete (ignore merge check)

```bash
git branch -D old-feature-branch
```

Use **with caution** — this permanently deletes the branch even if unmerged.
