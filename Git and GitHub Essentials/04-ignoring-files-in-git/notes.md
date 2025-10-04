# Ignoring Files in Git

## What is .gitignore?

In Git, we can ignore certain files or directories by using a `.gitignore` file.  
This is useful for files that we don't want to track or include in our repository, such as:

- Log files (`log.txt`)  
- Temporary files  
- Personal configuration files  
- Build artifacts  

By ignoring unnecessary files, we keep the repository clean and avoid committing sensitive or irrelevant data.

---

## How to Ignore Files

### Step 1: Create a `.gitignore` file

In the root directory of your project, create a `.gitignore` file:

```bash
touch .gitignore
````

---

### Step 2: Specify files or directories to ignore

Inside `.gitignore`, list the files or directories you want Git to ignore. Examples:

* Ignore a single file:

```
log.txt
```

* Ignore a file inside a directory:

```
logs/log.txt
```

* Ignore all `.env` files:

```
*.env
```

---

### Step 3: Save and commit

After saving your `.gitignore` file, commit it to your repository.
Git will now ignore the specified files in future commits:

```bash
git add .gitignore
git commit -m "docs(git-github): add notes for ignoring files using .gitignore"
```

---

### Why .gitignore Matters

Using a `.gitignore` file ensures that only relevant files are tracked in the repository, which:

* Reduces clutter in commits
* Prevents accidental exposure of sensitive data
* Keeps project history clean and manageable
