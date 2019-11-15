module.exports = {
  URL_REGEXP: new RegExp(
    '^' +
        // protocol identifier
        '(?:(?:(?:https?):)\\/\\/)' +
        '(?:' +
        // host & domain names, may end with dot
        '(?:' +
        '(?:' +
        '[a-z0-9\\u00a1-\\uffff]' +
        '[a-z0-9\\u00a1-\\uffff_-]{0,62}' +
        ')?' +
        '[a-z0-9\\u00a1-\\uffff]\\.' +
        ')+' +
        // TLD identifier name, may end with dot
        '(?:[a-z\\u00a1-\\uffff]{2,}\\.?)' +
        ')' +
        // resource path (optional)
        '(?:[/?#]\\S*)?' +
        '$', 'i'
  )
};