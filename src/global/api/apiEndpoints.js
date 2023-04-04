export const apiEndpoints = {
  CREATE_ACCOUNT: "createAccount",
  LOGIN: "login",
  FORM: "form",
  CHANGE_PASSWORD: "changePassword",
  GUEST_FORM: "guestForm",
  GET_USER_DATA: "getUserData",
  GET_BLOB: "get_file_by_name", //previously getBlob
  GET_USERS: "getUsers",
  UPDATE_DEAL: "updateDeal",
  VERIFY: "verify",
  loanSubmissions: {
    MONEY_IN: "money_in",
  },
  documents: {
    UPLOAD_DOCUMENT: "uploadDocument",
    UPDATE_DOCUMENT: "updateDocument",
    GET_DOCUMENT_META_DATA: "getDocumentMetadata",
    GET_DOCUMENTS_BY_DEAL: "getDocumentsByDeal",
    GET_DOCUMENTS_BY_GROUP: "getDocumentsByGroup",
  },
  notes: {
    GET_COMMENTS: "getComments",
    POST_COMMENT: "postComment",
    UPDATE_NOTES: "updateNotes",
  },
  user: {
    UPDATE_USER_DATA: "updateUserData",
  },
};

export const observerEndpoints = {
  GET_PROCESSING_QUEUE: "get_processing_queue",
  IRONLINC_SUBMISSIONS: "ironlinc_submissions",
  UPDATE_COLLECTION_FROM_QUEUE: "update_collection_from_queue",
  GET_BLOB: "get_file_by_name", //previously getBlob
};

export const observerActionCategory = {
  application: "application",
  creditAuth: "creditAuth",
  invoice: "invoice",
  moneyIn: "moneyIn",
  sizer: "sizer",
};

export const observerActionOutcome = {
  update: "update",
  assignToDeal: "assignToDeal",
  create: "create",
};

export const observerRequests = {
  GET_PROCESSING_QUEUE: {
    name: "get_processing_queue",
    actionCategory: {
      application: "application",
      creditAuth: "creditAuth",
      invoice: "invoice",
      moneyIn: "moneyIn",
      loan_servicing: "loan_servicing",
    },
  },
  IRONLINC_SUBMISSIONS: {
    name: "ironlinc_submissions",
    actionCategory: {
      moneyIn: observerActionCategory.moneyIn,
      invoice: observerActionCategory.invoice,
      sizer: observerActionCategory.sizer,
    },
  },
  UPDATE_COLLECTION_FROM_QUEUE: {
    name: "update_collection_from_queue",
    actionCategory: {
      invoice: observerActionCategory.invoice,
      actionOutcome: {
        update: observerActionOutcome.update,
      },
    },
  },
  GET_BLOB: {
    name: observerEndpoints.GET_BLOB,
    actionCategory: {
      invoice: observerActionCategory.invoice,
      actionOutcome: {
        update: observerActionOutcome.update,
      },
    },
  },
  LEAD_GENERATION: {
    // name: 'leadGenPipeline',
    names: {
      CLEAR_BUSINESS_SEARCH: "clear_business_search",
      CLEAR_PERSON_SEARCH: "clear_person_search",
      CLEAR_BUSINESS_XML: "clear_business_xml",
      CLEAR_PERSON_XML: "clear_person_xml",
    },
  },
};

export const leadGenerationEndpoints = {
  CLEAR_BUSINESS_SEARCH: "clear_business_search",
  CLEAR_PERSON_SEARCH: "clear_person_search",
  CLEAR_BUSINESS_XML: "clear_business_xml",
  CLEAR_PERSON_XML: "clear_person_xml",
};

//create deal
//update deal
