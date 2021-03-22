module.exports = {
  "*.ts": (filenames) => {
    return [
      "yarn lint --quiet",
      `git add ${filenames.join(' ')}`
    ];
  },
};
