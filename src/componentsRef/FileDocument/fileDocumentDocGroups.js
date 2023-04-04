// export const fileDocumentDocGroups = {
//   PHOTOID: "photoId",
//   CREDITAUTH: "creditAuth",
//   BORROWEREXPERIENCE: "borrowerExperience",
//   LIQUIDITY: "liquidity",
//   ENTITYDOCS: "entityDocs",
//   LOANAPPLICATION: "loanApplication",
//   CLOSINGPACKAGE: "closingPackage",
//   APPRAISAL: "appraisal",
//   INSURANCEDOCS: "insuranceDocs",
//   TITLEDOCS: "titleDocs",
//   BACKGROUNDREPORT: "backgroundReport",
//   CREDITREPORT: "creditReport",
//   LEASESANDRENTS: "leasesAndRents",
//   CONSTRUCTIONDOCUMENTS: "constructionDocuments",
//   PROPERTYDOCUMENTS: "propertyDocuments",
//   THIRDPARTYREPORTS: "thirdPartyReports",
//   QUESTIONNAIRES: "questionnaires",
//   TERMSANDSIZER: "termsAndSizer",
//   LOE: "loe",
//   NOCATEGORY: "noCategory",
// };

export const fileDocumentSchema = {
  titleDocs: {
    name: "titleDocs",
    label: "Title Docs",
    types: {
      preliminaryTitle: {
        name: "preliminaryTitle",
        label: "Preliminary Title",
      },
      taxCerts: { name: "taxCerts", label: "Tax Certs" },
      titleDocsOther: { name: "titleDocsOther", label: "Title Docs - Other" },
    },
  },
  constructionDocuments: {
    name: "constructionDocuments",
    label: "Construction Documents",
    types: {
      scopeOfWork: { name: "scopeOfWork", label: "Scope Of Work" },
      permits: { name: "permits", label: "Permits " },
      plans: { name: "plans", label: "Plans " },
      constructionDocumentsOther: {
        name: "constructionDocumentsOther",
        label: "Construction Documents - Other",
      },
    },
  },

  thirdPartyReports: {
    name: "thirdPartyReports",
    label: "Third Party Reports",
    types: {
      feasibilityReport: {
        name: "feasibilityReport",
        label: "Feasibility Report",
      },
      environmentalReport: {
        name: "environmentalReport",
        label: "Environmental Report",
      },
      thirdPartyReportsOther: {
        name: "thirdPartyReportsOther",
        label: "Third Party Reports - Other",
      },
    },
  },
  insuranceDocs: {
    name: "insuranceDocs",
    label: "Insurance Docs",
    types: {
      insuranceInvoice: {
        name: "insuranceInvoice",
        label: "Insurance Invoice",
      },
      insuranceBinder: { name: "insuranceBinder", label: "Insurance Binder" },
      hoaMasterInsurancePolicy: {
        name: "hoaMasterInsurancePolicy",
        label: "Hoa Master Insurance Policy",
      },
      insuranceFinalPaidInFullReceipt: {
        name: "insuranceFinalPaidInFullReceipt",
        label: "Insurance Final Paid Receipt",
      },
      floodInsurance: { name: "floodInsurance", label: "Flood Insurance" },
      insuranceDocsOther: {
        name: "insuranceDocsOther",
        label: "Insurance Docs - Other",
      },
    },
  },
  liquidity: {
    name: "liquidity",
    label: "Liquidity",
    types: {
      bankStatement: { name: "bankStatement", label: "Bank Statement" },
      otherAccountTypeStatement: {
        name: "otherAccountTypeStatement",
        label: "Other Account Type Statement",
      },
      giftLetter: { name: "giftLetter", label: "Gift Letter" },
      liquidityOther: { name: "liquidityOther", label: "Liquidity - Other" },
    },
  },

  entityDocs: {
    name: "entityDocs",
    label: "Entity Docs",
    types: {
      ein: { name: "ein", label: "EIN" },
      articlesOfOrganization: {
        name: "articlesOfOrganization",
        label: "Articles Of Organization",
      },
      operatingAgreement: {
        name: "operatingAgreement",
        label: "Operating Agreement",
      },
      cogs: { name: "cogs", label: "COGS" },
      foreignEntityDocs: {
        name: "foreignEntityDocs",
        label: "Foreign Entity Docs",
      },
      entityDocsOther: {
        name: "entityDocsOther",
        label: "Entity Docs - Other",
      },
    },
  },
  loeAndExceptions: {
    name: "loeAndExceptions",
    label: "Letter of Explanation & Exceptions",
    types: {
      backgroundLOE: { name: "backgroundLOE", label: "Background LOE" },
      creditReportLOE: { name: "creditReportLOE", label: "CreditReport LOE" },
      liquidityLOE: { name: "liquidityLOE", label: "Liquidity LOE" },
      akaLOE: { name: "akaLOE", label: "Aka Letter" },
      loeOther: { name: "loeOther", label: "Letter of Explanation - Other" },
    },
  },
  appraisal: {
    name: "appraisal",
    label: "Appraisal",
    types: {
      appraisalPDF: { name: "appraisalPDF", label: "Appraisal PDF" },
      appraisalXML: { name: "appraisalXML", label: "Appraisal XML" },
      secondaryAppraisal: {
        name: "secondaryAppraisal",
        label: "Secondary Appraisal",
      },
      appraisalAmendment: {
        name: "appraisalAmendment",
        label: "Appraisal Amendment",
      },
      appraisalOther: { name: "appraisalOther", label: "Appraisal - Other" },
    },
  },
  closingPackage: {
    name: "closingPackage",
    label: "Closing Package",
    types: {
      finalHud: { name: "finalHud", label: "FinalHud" },
      assignmentOfMortgage: {
        name: "assignmentOfMortgage",
        label: "Assignment Of Mortgage",
      },
      allonge: { name: "allonge", label: "Allonge" },
      assignmentOfLeasesAndRents: {
        name: "assignmentOfLeasesAndRents",
        label: "Assignment Of Leases & Rents",
      },
      businessPurposeAffadavit: {
        name: "businessPurposeAffadavit",
        label: "Business Purpose Affadavit",
      },
      cema: { name: "cema", label: "Cema" },
      closingPackage: { name: "closingPackage", label: "Closing Package" },
      loanAgreement: { name: "loanAgreement", label: "Loan Agreement" },
      finalTitlePolicy: {
        name: "finalTitlePolicy",
        label: "Final Title Policy",
      },
      guaranty: { name: "guaranty", label: "Guaranty" },
      mortgage: { name: "mortgage", label: "Mortgage" },
      note: { name: "note", label: "Note" },
      recordedDocs: { name: "recordedDocs", label: "Recorded Documents" },
      closingPackageOther: {
        name: "closingPackageOther",
        label: "Closing Package - Other",
      },
    },
  },
  questionnaires: {
    name: "questionnaires",
    label: "Questionnaires",
    types: {
      condoQuestionnaire: {
        name: "condoQuestionnaire",
        label: "Condo Questionnaire",
      },
      managementQuestionnaire: {
        name: "managementQuestionnaire",
        label: "Management Questionnaire",
      },
      questionnairesOther: {
        name: "questionnairesOther",
        label: "Questionnaires - Other",
      },
    },
  },
  leasesAndRents: {
    name: "leasesAndRents",
    label: "Leases & Rents",
    types: {
      proofOfRentReceived: {
        name: "proofOfRentReceived",
        label: "Proof Of Rent Received",
      },
      unitLeaseDocs: { name: "unitLeaseDocs", label: "Unit Rental Lease" },
      leasesAndRentsOther: {
        name: "leasesAndRentsOther",
        label: "Leases & Rents - Other",
      },
    },
  },
  propertyDocuments: {
    name: "propertyDocuments",
    label: "Property Documents",
    types: {
      hoaDues: { name: "hoaDues", label: "Hoa Dues" },
      payoffLetter: { name: "payoffLetter", label: "Payoff Letter" },
      floodCert: { name: "floodCert", label: "Flood Certificate" },
      purchaseContract: {
        name: "purchaseContract",
        label: "Purchase Contract",
      },
      purchaseHud: { name: "purchaseHud", label: "Purchase Hud" },
      vom: { name: "vom", label: "Verification of Mortgage" },
      propertyManagementAgreement: {
        name: "propertyManagementAgreement",
        label: "Property Management Agreement",
      },
      propertyDocumentsOther: {
        name: "propertyDocumentsOther",
        label: "Property Documents - Other",
      },
    },
  },
  termsAndSizer: {
    name: "termsAndSizer",
    label: "Terms & Sizer",
    types: {
      sizer: { name: "sizer", label: "Sizer" },
      termSheet: { name: "termSheet", label: "TermSheet" },
      preliminaryHud: { name: "preliminaryHud", label: "Preliminary Hud" },
      termsAndSizerOther: {
        name: "termsAndSizerOther",
        label: "Terms & Sizer - Other",
      },
    },
  },
  borrowerDocs: {
    name: "borrowerDocs",
    label: "Borrower Documents",
    types: {
      photoId: { name: "photoId", label: "Photo Identification" },
      backgroundReport: {
        name: "backgroundReport",
        label: "Background Report",
      },
      creditReport: { name: "creditReport", label: "Credit Report" },
      creditAuth: { name: "creditAuth", label: "Credit Authorization" },
      borrowerExperience: {
        name: "borrowerExperience",
        label: "Borrower Experience Docs",
      },
      loanApplication: { name: "loanApplication", label: "Loan Application" },
      ofacReport: { name: "ofacReport", label: "OFAC Report" },
      borrowerDocsOther: {
        name: "borrowerDocsOther",
        label: "Borrower Documents - Other",
      },
    },
  },
  noCategory: {
    name: "noCategory",
    label: "No Category",
    types: {
      noCategory: { name: "noCategory", label: "No Category" },
    },
  },
};

// export const fileDocumentDocTypes = {
//   titleDocs: {
//     preliminaryTitle: "preliminaryTitle",
//     finalTitlePolicy: "finalTitlePolicy",
//     taxCerts: "taxCerts",
//     titleDocsOther: "titleDocsOther",
//   },
//   constructionDocuments: {
//     scopeOfWork: "scopeOfWork",
//     permits: "permits",
//     plans: "plans",
//   },
//   thirdPartyReports: {
//     feasibilityReport: "feasibilityReport",
//     environmentalReport: "environmentalReport",
//     thirdPartyReportsOther: "thirdPartyReportsOther",
//   },
//   insuranceDocs: {
//     insuranceInvoice: "insuranceInvoice",
//     insuranceBinder: "insuranceBinder",
//     hoaMasterInsurancePolicy: "hoaMasterInsurancePolicy",
//     insuranceFinalPaidInFullReceipt: "insuranceFinalPaidInFullReceipt",
//     floodInsurance: "floodInsurance",
//     insuranceDocsOther: "insuranceDocsOther",
//   },
//   liquidity: {
//     bankStatement: "bankStatement",
//     otherAccountTypeStatement: "otherAccountTypeStatement",
//     giftLetter: "giftLetter",
//     liquidityOther: "liquidityOther",
//   },
//   entityDocs: {
//     ein: "ein",
//     articlesOfOrganization: "articlesOfOrganization",
//     operatingAgreement: "operatingAgreement",
//     cogs: "cogs",
//     foreignEntityDocs: "foreignEntityDocs",
//     entityDocsOther: "entityDocsOther",
//   },
//   loe: {
//     backgroundLOE: "backgroundLOE",
//     creditReportLOE: "creditReportLOE",
//     liquidityLOE: "liquidityLOE",
//     akaLOE: "akaLOE",
//     loeOther: "loeOther",
//   },
//   appraisal: {
//     appraisalPDF: "appraisalPDF",
//     appraisalXML: "appraisalXML",
//     secondaryAppraisal: "secondaryAppraisal",
//     appraisalAmendment: "appraisalAmendment",
//     appraisalOther: "appraisalOther",
//   },
//   closingPackage: {
//     finalHud: "finalHud",
//     assignmentOfMortgage: "assignmentOfMortgage",
//     allonge: "allonge",
//     assignmentOfLeasesAndRents: "assignmentOfLeasesAndRents",
//     businessPurposeAffadavit: "businessPurposeAffadavit",
//     closingPackage: "closingPackage",
//     loanAgreement: "loanAgreement",
//     mortgage: "mortgage",
//     note: "note",
//     guaranty: "guaranty",
//     closingPackageOther: "closingPackageOther",
//   },
//   questionnaires: {
//     condoQuestionnaire: "condoQuestionnaire",
//     managementQuestionnaire: "managementQuestionnaire",
//     questionnairesOther: "questionnairesOther",
//   },
//   leasesAndRents: {
//     proofOfRentReceived: "proofOfRentReceived",
//     unitLeaseDocs: "unitLeaseDocs",
//     leasesAndRentsOther: "leasesAndRentsOther",
//   },
//   propertyDocuments: {
//     hoaDues: "hoaDues",
//     payoffLetter: "payoffLetter",
//     purchaseContract: "purchaseContract",
//     purchaseHud: "purchaseHud",
//     VOM: "VOM",
//     propertyManagementAgreement: "propertyManagementAgreement",
//     propertyDocumentsOther: "propertyDocumentsOther",
//   },
//   termsAndSizer: {
//     sizer: "sizer",
//     termSheet: "termSheet",
//     preliminaryHud: "preliminaryHud",
//   },
// };

// -------

export const selectOptionsDocGroups = [
  { name: "appraisal", label: "Appraisal" },
  { name: "backgroundReport", label: "Background Report" },
  { name: "borrowerExperience", label: "Borrower Experience" },
  { name: "closingPackage", label: "Closing Package" },
  { name: "constructionDocuments", label: "Construction Documents" },
  { name: "creditReport", label: "Credit Report" },
  { name: "creditAuth", label: "Credit Auth" },
  { name: "entityDocs", label: "Entity Docs" },
  { name: "insuranceDocs", label: "Insurance Docs" },
  { name: "loe", label: "LOE" },
  { name: "leasesAndRents", label: "Leases & Rents" },
  { name: "liquidity", label: "Liquidity" },
  { name: "loanApplication", label: "Loan Application" },
  { name: "photoId", label: "Photo Id" },
  { name: "propertyDocuments", label: "Property Documents" },
  { name: "termsAndSizer", label: "Terms & Sizer" },
  { name: "titleDocs", label: "Title Docs" },
  { name: "thirdPartyReports", label: "Third Party Reports" },
  { name: "questionnaires", label: "Questionnaires" },
  { name: "noCategory", label: "No Category" },
];

export const selectOptionsDocTypes = {
  titleDocs: [
    { name: "preliminaryTitle", label: "Preliminary Title" },
    { name: "finalTitlePolicy", label: "Final Title Policy" },
    { name: "taxCerts", label: "Tax Certs" },
    { name: "titleDocsOther", label: "Title Docs Other" },
  ],
  constructionDocuments: [
    { name: "scopeOfWork", label: "Scope Of Work" },
    { name: "permits", label: "Permits" },
    { name: "plans", label: "Plans" },
  ],
  thirdPartyReports: [
    { name: "feasibilityReport", label: "Feasibility Report" },
    { name: "environmentalReport", label: "Environmental Report" },
    { name: "thirdPartyReportsOther", label: "ThirdParty Reports Other" },
  ],
  insuranceDocs: [
    { name: "insuranceInvoice", label: "Insurance Invoice" },
    { name: "insuranceBinder", label: "Insurance Binder" },
    { name: "hoaMasterInsurancePolicy", label: "Hoa Master Insurance Policy" },
    {
      name: "insuranceFinalPaidInFullReceipt",
      label: "InsuranceFinalPaidInFullReceipt",
    },
    { name: "floodInsurance", label: "Flood Insurance" },
    { name: "insuranceDocsOther", label: "Insurance Docs Other" },
  ],
  liquidity: [
    { name: "bankStatement", label: "BankStatement" },
    { name: "otherAccountTypeStatement", label: "OtherAccount Type Statement" },
    { name: "giftLetter", label: "Gift Letter" },
    { name: "liquidityOther", label: "Liquidity Other" },
  ],
  entityDocs: [
    { name: "ein", label: "Ein" },
    { name: "articlesOfOrganization", label: "Articles Of Organization" },
    { name: "operatingAgreement", label: "Operating Agreement" },
    { name: "cogs", label: "COGS" },
    { name: "foreignEntityDocs", label: "Foreign Entity Docs" },
    { name: "entityDocsOther", label: "Entity Docs Other" },
  ],
  loe: [
    { name: "backgroundLOE", label: "Background LOE" },
    { name: "creditReportLOE", label: "CreditReport LOE" },
    { name: "liquidityLOE", label: "Liquidity LOE" },
    { name: "akaLOE", label: "Aka LOE" },
    { name: "loeOther", label: "Loe Other" },
  ],
  appraisal: [
    { name: "appraisalPDF", label: "Appraisal PDF" },
    { name: "appraisalXML", label: "Appraisal XML" },
    { name: "secondaryAppraisal", label: "Secondary Appraisal" },
    { name: "appraisalAmendment", label: "Appraisal Amendment" },
    { name: "appraisalOther", label: "Appraisal Other" },
  ],
  closingPackage: [
    { name: "finalHud", label: "FinalHud" },
    { name: "assignmentOfMortgage", label: "Assignment Of Mortgage" },
    { name: "allonge", label: "Allonge" },
    {
      name: "assignmentOfLeasesAndRents",
      label: "Assignment Of Leases & Rents",
    },
    { name: "businessPurposeAffadavit", label: "Business Purpose Affadavit" },
    { name: "closingPackage", label: "Closing Package" },
    { name: "loanAgreement", label: "Loan Agreement" },
    { name: "mortgage", label: "Mortgage" },
    { name: "note", label: "Note" },
    { name: "guaranty", label: "Guaranty" },
    { name: "closingPackageOther", label: "Closing Package Other" },
  ],
  questionnaires: [
    { name: "condoQuestionnaire", label: "Condo Questionnaire" },
    { name: "managementQuestionnaire", label: "Management Questionnaire" },
    { name: "questionnairesOther", label: "Questionnaires Other" },
  ],
  leasesAndRents: [
    { name: "proofOfRentReceived", label: "Proof Of Rent Received" },
    { name: "unitLeaseDocs", label: "Unit Lease Docs" },
    { name: "leasesAndRentsOther", label: "Leases & Rents Other" },
  ],
  propertyDocuments: [
    { name: "hoaDues", label: "Hoa Dues" },
    { name: "payoffLetter", label: "Payoff Letter" },
    { name: "purchaseContract", label: "Purchase Contract" },
    { name: "purchaseHud", label: "Purchase Hud" },
    { name: "VOM", label: "VOM" },
    {
      name: "property Management Agreement",
      label: "Property Management Agreement",
    },
    { name: "propertyDocumentsOther", label: "Property Documents Other" },
  ],
  termsAndSizer: [
    { name: "sizer", label: "Sizer" },
    { name: "termSheet", label: "TermSheet" },
    { name: "preliminaryHud", label: "Preliminary Hud" },
  ],
};
