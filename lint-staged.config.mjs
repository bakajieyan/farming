/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['oxlint --fix --deny-warnings', 'prettier --write'],
  '*.{json,jsonc,md,mdx,yml,yaml,css,html}': ['prettier --write'],
}
