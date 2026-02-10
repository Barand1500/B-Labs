# NPM Publishing Guide for B-Labs

This guide will help you publish B-Labs to npm.

## Prerequisites

1. **NPM Account**
   - Create an account at [npmjs.com](https://www.npmjs.com/signup)
   - Verify your email address

2. **NPM Authentication**
   ```bash
   npm login
   ```
   Enter your username, password, and email when prompted.

3. **Check Package Name Availability**
   ```bash
   npm search blabs
   ```
   If the name is taken, update the `name` field in `package.json`.

## Pre-Publish Checklist

✅ All files are committed to git
✅ Tests are passing: `npm test`
✅ Package.json has correct information
✅ README.md is up to date
✅ LICENSE file exists
✅ Version number is correct

## Publishing Steps

### 1. Test the Package Locally

```bash
# Create a test installation
npm pack

# This creates a .tgz file
# Test it in another directory:
cd /path/to/test/directory
npm install /path/to/B-Labs/blabs-1.0.0.tgz
npx blabs init
```

### 2. Dry Run

```bash
# See what will be published without actually publishing
npm publish --dry-run
```

Review the output to ensure only necessary files are included.

### 3. Publish to NPM

```bash
# For first-time publishing
npm publish

# For subsequent updates (after incrementing version)
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

npm publish
```

### 4. Verify Publication

```bash
# Check on npm
npm view blabs

# Install and test globally
npm install -g blabs
blabs --version
blabs init
```

## GitHub Release (Optional but Recommended)

After publishing to npm, create a GitHub release:

1. Go to: https://github.com/Barand1500/B-Labs/releases
2. Click "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `B-Labs v1.0.0`
5. Description: List major features and changes
6. Click "Publish release"

This will trigger the automatic npm publish workflow if configured.

## Updating the Package

When you make changes:

1. Update code
2. Run tests: `npm test`
3. Update version: `npm version patch|minor|major`
4. Commit changes: `git add . && git commit -m "Release v1.0.1"`
5. Push to GitHub: `git push && git push --tags`
6. Publish: `npm publish`

## Common Issues

### Issue: Package name already exists
**Solution**: Change the `name` in package.json to something unique like `@username/blabs`

### Issue: Authentication error
**Solution**: Run `npm login` again and verify credentials

### Issue: Version already published
**Solution**: Increment version number: `npm version patch`

### Issue: Missing files in published package
**Solution**: Check `.npmignore` and `files` array in package.json

## NPM Scripts Reference

```bash
npm test                 # Run all tests
npm test:watch          # Run tests in watch mode
npm pack                # Create a tarball of the package
npm publish --dry-run   # Preview what will be published
npm publish             # Publish to npm registry
```

## Need Help?

- NPM Documentation: https://docs.npmjs.com/
- Publishing Guide: https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry
- B-Labs Issues: https://github.com/Barand1500/B-Labs/issues
