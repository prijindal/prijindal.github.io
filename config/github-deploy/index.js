const helpers = require('../helpers');
const execSync = require('child_process').execSync;

const HTTPS_REPO_NAME_RE = /Push  URL: https:\/\/github\.com\/.*\/(.*)\.git/;
const SSH_REPO_NAME_RE = /Push\s*URL:\s*git@github\.com:.*\/(.*)\.git/;

function getWebpackConfigModule() {
  if (helpers.hasProcessFlag('github-dev')) {
    return require('../webpack.dev.js');
  } else if (helpers.hasProcessFlag('github-prod')) {
    return require('../webpack.prod.js');
  } else {
    throw new Error('Invalid compile option.');
  }
}

function getRepoName(remoteName) {
  remoteName = remoteName || 'origin';

  var stdout_https = execSync('git remote show ' + remoteName),
      match_https = HTTPS_REPO_NAME_RE.exec(stdout_https);

  var stdout_ssh = execSync('git remote show ' + remoteName),
      match_ssh = SSH_REPO_NAME_RE.exec(stdout_ssh);

  if (!match_https) {
     if (!match_ssh) {
        throw new Error('Could not find a repository on remote ' + remoteName);
     } else {
       return match_ssh[1];
    }} else {
      return match_https[1];
  }
}

function stripTrailing(str, char) {

  if (str[0] === char) {
    str = str.substr(1);
  }

  if(str.substr(-1) === char) {
    str = str.substr(0, str.length - 1);
  }

  return str;
}

/**
 * Given a string remove trailing slashes and adds 1 slash at the end of the string.
 *
 * Example:
 * safeUrl('/value/')
 * // 'value/'
 *
 * @param url
 * @returns {string}
 */
function safeUrl(url) {
  const stripped = stripTrailing(url || '', '/');
  return stripped ? stripped + '/' : ''
}

exports.getWebpackConfigModule = getWebpackConfigModule;
exports.getRepoName = getRepoName;
exports.safeUrl = safeUrl;
