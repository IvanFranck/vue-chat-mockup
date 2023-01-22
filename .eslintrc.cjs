/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
		'prettier',
	],
	overrides: [
		{
			files: [
				'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
				'src/components/*.{cy,spec}.{js,ts,jsx,tsx}'
			],
			extends: ['plugin:cypress/recommended'],
		},
	],
	parserOptions: {
		ecmaVersion: 2020,
	},

	rules: {
		'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'off',
			{ singleQuote: true, endOfLine: 'auto', tabWidth: 2 },
		],
	},
};
