# Check Git version

git --version

# Install Git (Mac)

brew install git

# Install Git (Linux Debian)

sudo apt install git-all

# Install Git (Linux RPM)

sudo dnf install git-all

# Initialize Git repository

git init

# Check Git status

git status

# Stage files selectively

git add --patch `<file>`

# Commit changes

git commit -m "Commit message"

# SSH Key setup

mkdir "$HOME/.ssh"
ssh-keygen -t ed25519 -C "your_email@example.com"

# or legacy

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Add key to ssh-agent (Mac/Linux)

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Test SSH connection

ssh -T git@github.com

# Example Git aliases

git config --global alias.gapa "add --patch"
git config --global alias.gcmsg "commit --message"
