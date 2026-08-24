export type QuotationRate = {
  label: string;
  unit: string;
  minRate: number;
  maxRate: number;
};

export const quotationRates: Record<string, QuotationRate> = {
  simpleApi: {
    label: "Simple API / CRUD",
    unit: "task",
    minRate: 2500,
    maxRate: 3500,
  },

  mediumApi: {
    label: "Medium API / business logic",
    unit: "task",
    minRate: 3500,
    maxRate: 5500,
  },

  complexApi: {
    label: "Complex API / multiple tables & logic",
    unit: "task",
    minRate: 5000,
    maxRate: 8000,
  },

  frontendApiIntegration: {
    label: "Frontend API integration",
    unit: "integration",
    minRate: 1500,
    maxRate: 2500,
  },

  webPage: {
    label: "New Web page – existing UI",
    unit: "page",
    minRate: 2500,
    maxRate: 4000,
  },

  webPageApi: {
    label: "Web page + API integration",
    unit: "page",
    minRate: 4000,
    maxRate: 6000,
  },

  flutterApiIntegration: {
    label: "Flutter API integration",
    unit: "integration",
    minRate: 1500,
    maxRate: 2500,
  },

  flutterScreen: {
    label: "New Flutter screen – existing UI",
    unit: "screen",
    minRate: 2500,
    maxRate: 4000,
  },

  flutterScreenApi: {
    label: "Flutter screen + API",
    unit: "screen",
    minRate: 4000,
    maxRate: 6000,
  },

  database: {
    label: "Database changes / migrations",
    unit: "task",
    minRate: 1500,
    maxRate: 3000,
  },

  thirdPartyIntegration: {
    label: "Third-party API integration",
    unit: "integration",
    minRate: 3000,
    maxRate: 6000,
  },

  completeFeature: {
    label: "Complete new feature/flow",
    unit: "feature",
    minRate: 8000,
    maxRate: 15000,
  },

  complexFlow: {
    label: "Large/complex flow",
    unit: "flow",
    minRate: 15000,
    maxRate: 25000,
  },

  minorUiChange: {
    label: "Minor UI/content change",
    unit: "change",
    minRate: 500,
    maxRate: 1000,
  },

  bugFixing: {
    label: "Bug fixing / debugging",
    unit: "task",
    minRate: 800,
    maxRate: 2000,
  },

  backendDeployment: {
    label: "Backend deployment",
    unit: "deployment",
    minRate: 1000,
    maxRate: 2000,
  },

  productionDeployment: {
    label: "Major production deployment/setup",
    unit: "deployment",
    minRate: 2000,
    maxRate: 4000,
  },

  playStoreDeployment: {
    label: "Play Store deployment",
    unit: "deployment",
    minRate: 1500,
    maxRate: 2500,
  },

  appStoreDeployment: {
    label: "App Store deployment",
    unit: "deployment",
    minRate: 2000,
    maxRate: 3500,
  },

  bothStoresDeployment: {
    label: "Both Play Store + App Store",
    unit: "deployment",
    minRate: 3500,
    maxRate: 5000,
  },

  buildCertificatesRelease: {
    label: "Build + certificates + store release fixes",
    unit: "task",
    minRate: 2500,
    maxRate: 5000,
  },

  testingQa: {
    label: "Testing / QA for feature",
    unit: "feature",
    minRate: 1000,
    maxRate: 2000,
  },
};

export const quotationCurrency = "INR";