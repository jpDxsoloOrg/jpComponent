/** @type {import('semantic-release').GlobalConfig} */
export default {
  branches: ['main'],
  plugins: [
    // Parse conventional commits to determine version bump
    '@semantic-release/commit-analyzer',

    // Generate release notes from commits
    '@semantic-release/release-notes-generator',

    // Write/update CHANGELOG.md in the repo root
    [
      '@semantic-release/changelog',
      {
        changelogFile: '../CHANGELOG.md',
      },
    ],

    // Publish to npm
    [
      '@semantic-release/npm',
      {
        pkgRoot: '.',
      },
    ],

    // Commit the updated CHANGELOG.md and package.json version back to the repo
    [
      '@semantic-release/git',
      {
        assets: ['package.json', '../CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],

    // Create a GitHub release and tag
    '@semantic-release/github',
  ],
};
