# Best Practices for Git and GitHub

Following best practices ensures a consistent, efficient workflow and makes collaboration easier. These are the practices recommended at BigBinary.

## 1. Linking Tasks to GitHub Issues
- Every task must have a corresponding GitHub issue.  
- Create issues in the **future tense**.  
  Example: "Add Playwright tests to verify logging in to the application"

## 2. Branch Naming Convention
- Branches should also use the **future tense**.  
- Format: `<issue_number>-a-short-hyphenized-description-of-the-issue`  
  Example: `2-add-tests-to-verify-login`

## 3. Atomic Commits
- Make **small, logical commits**.  
- Do not commit all changes for an issue at once.  
- Break down features and commit after completing each part.

## 4. Meaningful Commit Messages
- Commit messages should **describe the change logically**, not vaguely.  
  ❌ Bad: "Completed first part"  
  ✅ Good: "Added beforeEach block for login tests"

## 5. PR Description Format
- The first line of a pull request description should reference the issue:  
  `Closes #<issue-number>`  
  Example: `Closes #1`

## 6. Past Tense for Commit Messages
- Use **past tense** because commits describe work already done.  
  Examples:  
  - Added tests to verify logging into the application  
  - Fixed tests failing due to page closing unexpectedly

## 7. Past Tense for PR Titles
- PR titles summarize the **entire feature** and should be in past tense.  
  Examples:  
  - Added tests for login  
  - Added tests to verify tasks assigned to the same user

## 8. Frequent Pushes and Draft PRs
- Push commits frequently.  
- After the first commit, create a **draft PR** and continue pushing changes.  
- If a draft PR is unavailable, raise a regular PR.

## 9. Assign PRs for Review Only When Ready
- Do **not assign a PR** before it is fully ready.  
- Assign the reviewer only when work is complete and functional.

## 10. Assign the PR to the Reviewer
- Simply adding a reviewer is not enough; **assign the PR** so they receive notifications for updates.

## 11. Prioritize Review Comments
- Address review comments before starting new features to ensure faster approval and merge.

## 12. Merge Only After Approval
- Merge a PR **only after it has been fully approved** by the reviewer.

## 13. Responding to Review Comments
- When review comments are received, the PR is assigned back to you.  
- Complete the requested changes, push them, reassign the PR to the reviewer, and comment that changes are fixed.
