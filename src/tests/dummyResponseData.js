export const DUMMY_RESPONSE_DATA = {
  userData: {
    firstName: "Jimmy",
    lastName: "Oliva",
    emailAddress: "Oliva",
    phoneNumber: "Oliva",
    password: "Password!1",
  },
  creditAuths: [
    {
      firstName: "Jimmy",
      lastName: "Oliva",
      submissionDate: "5/12/22",
      borrowerEmail: "olivajames110@gmail.com",
      borrowerDob: "11/10/1992",
    },
    {
      firstName: "Bill",
      lastName: "Smith",
      submissionDate: "5/19/22",
      borrowerEmail: "test@gmail.com",
      borrowerDob: "6/3/1990",
    },
  ],
  dealSubmissions: [
    {
      dealId: "651681",
      loanType: "Purchase",
      loanPurpose: "Rehab to Flip Loan",
      propertyAddress: "125 Main Street, Huntington NY, 11743",
    },
    {
      dealId: "377345",
      loanType: "Refinance",
      loanPurpose: "Short Term Bridge Loan",
      propertyAddress: "80 Wall Street, Northport NY, 11768",
    },
  ],
};

export const DUMMY_FULL_RESPONSE_DATA = {
  userData: {
    id: "abcdefghijk",
    firstName: "Jimmy",
    lastName: "Oliva",
    emailAddress: "Oliva",
    phoneNumber: "Oliva",
    password: "Password!1",
  },
  creditAuths: [
    {
      id: "12345678",
      submissionDate: "5/12/22",
      firstName: "Jimmy",
      lastName: "Oliva",
      borrowerDob: "11/10/1992",
      homeAddress: "125 Main Street, Huntington, NY",
      borrowerPhoneNumber: "631-456-3373",
      borrowerEmail: "olivajames110@gmail.com",
      citizenshipStatus: true,
      ssn: "123-45-617",
      borrowerPhotoId: "homeAddress",
      borrowerSignature: "homeAddress",
    },
  ],
  dealSubmissions: [
    {
      id: "651681",
      loanType: "Purchase",
      loanPurpose: "Rehab to Flip Loan",
      propertyAddress: "125 Main Street, Huntington NY, 11743",
    },
    {
      id: "377345",
      loanType: "Refinance",
      loanPurpose: "Short Term Bridge Loan",
      propertyAddress: "80 Wall Street, Northport NY, 11768",
    },
  ],
};

export const DUMMY_DATA_EMPTY_CREDIT = {
  userData: {
    id: "abcdefghijk",
    firstName: "Jimmy",
    lastName: "Oliva",
    emailAddress: "Oliva",
    phoneNumber: "Oliva",
    password: "Password!1",
  },
  creditAuths: [],
  dealSubmissions: [
    {
      id: "651681",
      loanType: "Purchase",
      loanPurpose: "Rehab to Flip Loan",
      propertyAddress: "125 Main Street, Huntington NY, 11743",
    },
    {
      id: "377345",
      loanType: "Refinance",
      loanPurpose: "Short Term Bridge Loan",
      propertyAddress: "80 Wall Street, Northport NY, 11768",
    },
  ],
};

export const DUMMY_DATA_EMPTY_DEALS = {
  userData: {
    id: "abcdefghijk",
    firstName: "Jimmy",
    lastName: "Oliva",
    emailAddress: "Oliva",
    phoneNumber: "Oliva",
    password: "Password!1",
  },
  creditAuths: [
    {
      id: "12345678",
      submissionDate: "5/12/22",
      firstName: "Jimmy",
      lastName: "Oliva",
      borrowerDob: "11/10/1992",
      homeAddress: "125 Main Street, Huntington, NY",
      borrowerPhoneNumber: "631-456-3373",
      borrowerEmail: "olivajames110@gmail.com",
      citizenshipStatus: true,
      ssn: "123-45-617",
      borrowerPhotoId: "homeAddress",
      borrowerSignature: "homeAddress",
    },
  ],
  dealSubmissions: [],
};
