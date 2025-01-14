const path = require('path');
const { I18n } = require('i18n');

const i18n = new I18n({
    locales: ['en', 'zh'],
    directory: path.join(__dirname, '../locales')
});

module.exports = i18n;