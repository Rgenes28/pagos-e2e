const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html-report",
  metadata: {
    browser: {
      name: "chromium",
      version: "latest"
    },
    device: "Local test machine",
    platform: {
      name: "linux",
      version: "WSL"
    }
  },
  customData: {
    title: "Execution Info",
    data: [
      { label: "Project", value: "Pagos E2E" },
      { label: "Tester", value: "Ronaldo Genes" },
      { label: "Execution Date", value: new Date().toLocaleString() }
    ]
  }
});
