/** @type {import('lint-staged').Configuration} */
export default {
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}': ['oxlint --fix', 'prettier --write'],
  '*.{json,jsonc,md,mdx,yml,yaml,css,html}': ['prettier --write'],
}
