export default {
  "*.{js,jsx,ts,tsx}": ["npm run lint -- --fix", () => "npm run type-check"],
  "*.{css,scss,md,json,html}": "prettier --write",
};
