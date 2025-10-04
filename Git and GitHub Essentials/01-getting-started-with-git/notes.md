# Module 2: Getting Started with Git

## 2.1 Introduction to Git
- Git is a version control system that helps developers track and manage changes to their code.
- **Track Changes:** Keeps a record of every modification; can revert to previous versions.
- **Collaboration:** Multiple developers can work on the same project simultaneously.
- **Branching:** Create branches to work on features or bug fixes separately, then merge back.

## 2.2 Workflow of Git
Git manages files through three main states:

- **Modified:** Changes made to files on your computer.
- **Staged:** Selected changes to include in the next commit (`git add`).
- **Committed:** Staged changes are saved to Git’s database (`git commit`).

Sections of a Git project:

- **Working Tree:** Current project files.
- **Staging Area (Index):** Tracks changes for the next commit.
- **Git Directory:** Stores history and metadata.

**Basic Workflow:** Modify → Stage → Commit → Repeat.  
Branches allow experimentation and merging back safely.

## 2.3 Installing Git on Mac
- **Xcode Command Line Tools:** `git --version` (installs if not present)
- **Homebrew:** `brew install git`
- **Verify:** `git --version`

## 2.4 Installing Git on Windows
- **With WSL:** Use Linux commands inside WSL
  - `sudo apt update`
  - `sudo apt install git`
  - `git --version`
- **Without WSL:** Use official installer from Git website (not recommended by BigBinary)

## 2.5 Installing Git on Linux
- **Debian-based:** `sudo apt install git-all`
- **RPM-based:** `sudo dnf install git-all`
- Verify: `git --version`

## 2.6 Introduction to `git init`
- Initializes Git in a directory, creates `.git` folder to track changes.
- Commands:
  1. Create directory (if new): `mkdir directory-name`
  2. Enter directory: `cd directory-name`
  3. Initialize Git: `git init`

## 2.8 Add SSH Key to GitHub
- Check existing keys: `ls -al ~/.ssh`
- Create `.ssh` directory: `mkdir "$HOME/.ssh"`
- Generate SSH key:
  - `ssh-keygen -t ed25519 -C "your_email@example.com"`
  - Or for legacy: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- Add key to `ssh-agent` and GitHub.
- Verify: `ssh -T git@github.com`

## 2.9 Git Best Practices - Staging and Aliases
- Use `git add --patch` to selectively stage changes.
- Set aliases to simplify commands:
  - `git add --patch` → `gapa`
  - `git commit --message` → `gcmsg`
