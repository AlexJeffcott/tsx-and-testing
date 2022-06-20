module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: { 'type-enum': [2, 'always', ['[RELEASE]', 'docs', 'fix', 'feat', 'wip']] }
};
