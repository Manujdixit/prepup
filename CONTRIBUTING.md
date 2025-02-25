# Contributing to Tayyari Plus

Thank you for your interest in contributing to Tayyari Plus! This guide will help you get started with contributing to the project.

## Development Workflow

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tayyari_plus.git
   ```
3. Create a new branch from `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

## Making Changes

1. Make your changes in your feature branch
2. Write meaningful commit messages
3. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

## Submitting Changes

1. Ensure your branch is up to date with the dev branch:

   ```bash
   git checkout dev
   git pull origin dev
   git checkout feature/your-feature-name
   git rebase dev
   ```

2. Create a Pull Request (PR) to merge your changes into the `dev` branch
3. Wait for review and address any feedback
4. Once approved, your changes will be merged into `dev`

## Merging to Main Branch

The `main` branch is our production branch. Changes flow from `dev` to `main` through the following process:

1. Changes are merged into `dev` through PRs
2. When `dev` is stable and ready for release:
   ```bash
   git checkout main
   git pull origin main
   git merge dev
   git push origin main
   ```

**Note:** Only repository maintainers can merge to `main` branch.

## Questions?

If you have any questions, feel free to open an issue for discussion.
