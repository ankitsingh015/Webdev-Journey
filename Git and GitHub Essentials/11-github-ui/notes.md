# Assigning Issues and Pull Requests

## Assigning Issues

To assign someone to work on an issue:

1. Navigate to the **Issues** tab in your repository.  
2. Open the issue you want to assign.  
3. On the right side, under **Assignees**, start typing the username of the person you want to assign and select their name.  
4. Up to **10 people** can be assigned to each issue.

---

## Assigning Pull Requests

To assign someone to review code changes:

1. Navigate to the **Pull requests** tab.  
2. Open the relevant pull request.  
3. Use the **Assignees** section on the right side to assign reviewers.  

> Assigning issues and pull requests helps communicate responsibilities clearly within the team.

---

# Merging Pull Requests

Merging a pull request incorporates proposed changes into the main codebase.  

### Steps:

1. **Select Pull Request**  
   Open the pull request to review the proposed changes and discussion.

2. **Choose Merge Option**  
   At the bottom of the pull request page, you have three options:
   - **Merge pull request:** Merge changes directly, retaining the commit history.  
   - **Squash and merge:** Combine all commits into a single commit for a clean history.  
   - **Rebase and merge:** Rewrite commit history to apply changes on top of the base branch.

3. **Confirm Merge**  
   Click the appropriate **Confirm merge** button. You may type a commit message or accept the default.  

4. **Clean Up**  
   Optionally delete the merged branch to keep the repository tidy.

---

## Task 5: Review and Merge Pull Request

In **Task 4**, you created an issue and a pull request for the `add-readme` branch. Now:

1. Navigate to the **Pull requests** tab in your repository.  
2. Open the pull request titled **"Added README file"**.  
3. Review the changes made in the pull request.  
4. Click **Squash and merge** to merge the changes into the `main` branch.  
5. Click **Confirm merge** to finalize.  

> After merging, the `add-readme` branch can be safely deleted.