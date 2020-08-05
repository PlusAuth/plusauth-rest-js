module.exports = {
  "hooks": {
    "before:init": "yarn test && yarn build && yarn docs"
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireCleanWorkingDir": false,
    "tagAnnotation": "Release v${version}",
    "tagName": "v${version}"
  },
  "github": {
    "release": true,
    "draft": true,
    "releaseName": "v${version}"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
