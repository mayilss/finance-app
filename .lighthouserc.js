// eslint-disable-next-line no-undef
module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:4173/"],
      numberOfRuns: 3,
      startServerCommand: "npm run preview",
      startServerReadyPattern: "http://localhost:4173/",
      startServerReadyTimeout: 30000,
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
