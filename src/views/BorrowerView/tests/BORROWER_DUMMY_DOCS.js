import { fileDocumentSchema } from "../../../forms/_formQuestions/_formSchema/fileDocumentSchema";

export const BORROWER_DUMMY_DOCS = [
  {
    title: "Articles of Organization",
    docGroup: fileDocumentSchema.entityDocs.name,
    docType: fileDocumentSchema.entityDocs.types.articlesOfOrganization.name,

    status: 0,
  },
  {
    title: "Identity",
    docGroup: fileDocumentSchema.entityDocs.name,
    docType: fileDocumentSchema.entityDocs.types.articlesOfOrganization.name,
    description:
      "Valid Forms: Driver's License, Green Card/Resident Card, Passport",
    status: 1,
  },
  {
    title: "BankStatements",
    docGroup: fileDocumentSchema.liquidity.name,
    docType: fileDocumentSchema.liquidity.types.bankStatement.name,
    description: "Please include 2 most recent months",
    status: 2,
  },
  {
    title: "Articles of Organization",
    docGroup: fileDocumentSchema.entityDocs.name,
    docType: fileDocumentSchema.entityDocs.types.articlesOfOrganization.name,

    status: 0,
  },
  {
    title: "Identity",
    docGroup: fileDocumentSchema.entityDocs.name,
    docType: fileDocumentSchema.entityDocs.types.articlesOfOrganization.name,
    description:
      "Valid Forms: Driver's License, Green Card/Resident Card, Passport",
    status: 1,
  },
  {
    title: "BankStatements",
    docGroup: fileDocumentSchema.entityDocs.name,
    docType: fileDocumentSchema.entityDocs.types.articlesOfOrganization.name,
    description: "Please include 2 most recent months",
    status: 2,
  },
];
