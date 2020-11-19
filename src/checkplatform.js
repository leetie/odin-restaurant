var platform = require('platform');

function checkPlatform() {
    return platform.os.family
}

export { checkPlatform }