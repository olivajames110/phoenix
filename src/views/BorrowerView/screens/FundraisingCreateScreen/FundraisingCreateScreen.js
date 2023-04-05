import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ScreenBody from "../../../../components/layout/Screen/ScreenBody";
import ScreenSubTitleSection from "../../../../components/layout/Screen/sections/ScreenSubTitleSection";
import BorderCard from "../../../../components/shared/BorderCard";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import SubmittedLoanApplicationWidget from "../BorrowerDashboardScreen/borrowerDashboardWidgets/SubmittedLoanApplicationWidget";
import DisplayTable from "../../../../components/shared/DisplayTable";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightRounded } from "@mui/icons-material";
import DrilldownCard from "../../../../components/Drilldown/DrilldownCard";
import DisplayDataFieldItem from "../../../../components/shared/DisplayDataFieldItem";
import { isArray, isNil, isObject } from "lodash";
import { formFormatDollar } from "../../../../helpers/parse/formFormatDollar";
import { useFormState } from "react-final-form";
import { getTodaysDate } from "../../../../helpers/getTodaysDate";
import { parseISOToDate } from "../../../../helpers/parseISOToDate";
import FlatIronLogo from "../../../../components/shared/FlatIronLogo";
import FormGroup from "../../../../components/form/components/shared/FormGroup/FormGroup";
import FinalFormTextField from "../../../../components/form/Fields/FinalFormTextField";
import ReactFinalForm from "../../../../components/form/ReactFinalForm";
import LoanServicingDrilldownScreenTab from "./LoanServicingDrilldownScreenTab";
import TabSwitcher from "../../../../components/shared/TabSwitcher";

const FundraisingCreateScreen = (props) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const handleClick = (id) => {
    navigate(`fundraising/${"1234"}`);
  };
  const cols = [
    {
      Header: "Campaign Name",
      accessor: "campaignName",
    },
    {
      Header: "Type",
      accessor: "campaignType",
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "Start Date",
      accessor: "endDate",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },
    {
      Header: "Status",
      accessor: "status",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },
    {
      Header: "Amount Raised",
      accessor: "amountRaised",
      // accessor: (d) => formFormatDollar(d.requestedLoanAmount),
    },

    {
      Header: " ",
      accessor: (d) => (
        <Link
          style={{ textDecoration: "underline" }}
          className="action-button"
          to={`/fundraising/${"1234"}`}
        >
          View Details
        </Link>
        // <Button
        //   onClick={handleClick}
        //   color="primary"
        //   endIcon={<ChevronRightRounded />}
        //   sx={{ background: "#39679112", marginLeft: "10px" }}
        // >
        //   View Details
        // </Button>
      ),
    },
  ];

  const DUMMY = [
    {
      campaignName: "Campaign 1",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Open",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 2",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Open",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 3",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Complete",
      amountRaised: "$1700",
    },
    {
      campaignName: "Campaign 4",
      campaignType: "Goal Based",
      startDate: "3/01/2023",
      endDate: "5/01/2023",
      status: "Draft",
      amountRaised: "$1700",
    },
  ];

  return (
    <Stack sx={{ flexGrow: 1 }}>
      {/* <ScreenSubTitleSection>My Loan Applications</ScreenSubTitleSection> */}

      {/* <ScreenBody>
        <MuiGrid spacing={4}>
          <GridItem size={12}>
            <BorderCard type="bar">
              <DisplayTable noBorder columns={cols} data={DUMMY} />
            </BorderCard>
          </GridItem>
        </MuiGrid>
      </ScreenBody> */}
      <ReactFinalForm
        hideButton
        subscription={{ submitting: true, pristine: true }}
      >
        <ScreenBody>
          <Stack spacing={2} direction={"row"} sx={{ marginTop: "10px" }}>
            <DrilldownCard sx={{ height: "unset", flexGrow: 1 }}>
              <LoanServicingDrilldownScreenTab
                // headerContent={UI_EL__TAB_HEADER}
                // noPadding
                title="Fundraisor Creator"
              >
                <DisplayDataFieldItem
                  label="Next Payment Date:"
                  value={"1/2/2023"}
                  row
                />

                <FormContent />
              </LoanServicingDrilldownScreenTab>
            </DrilldownCard>
            <TemplateCard showForm={showForm} />
          </Stack>
        </ScreenBody>
      </ReactFinalForm>
    </Stack>
  );
};

const FormContent = (props) => {
  return (
    <>
      <FormGroup bold label="Borrower Information">
        <MuiGrid>
          <GridItem size={12}>
            <FinalFormTextField
              label="Payoff Version Number"
              name={"payoffVersionNumber"}
            />
          </GridItem>
          <GridItem size={12}>
            <FinalFormTextField
              label="Email Address"
              name={"primaryContactEmail"}
            />
          </GridItem>
        </MuiGrid>
      </FormGroup>
    </>
  );
};

const TemplateCard = (props) => {
  const { values } = useFormState();
  return (
    <DrilldownCard
      sx={
        {
          // boxShadow: "var(--bs)",
          // margin: "10px",
        }
      }
    >
      <Stack>
        <TabSwitcher
          tabs={[
            "Email Preview",
            "Facebook Preview",
            "Instagram Preview",
            "Web Preview",
          ]}
        />
        <Box sx={{ maxWidth: "700px", margin: "0 auto", padding: "25px" }}>
          <Stack direction={"row"} justifyContent="space-between">
            <Box flexDirection={"column"} display="flex" flexGrow={1}>
              <Stack direction={"row"}>
                <Box>
                  <Typography fontSize=".7rem" variant="body1">
                    Version #:
                  </Typography>
                  <Typography fontSize=".7rem" variant="body1">
                    Quote Issued On:
                  </Typography>{" "}
                  <Typography fontSize=".7rem" variant="body1">
                    Quote Valid Through:
                  </Typography>
                </Box>
                <Box ml={"40px"}>
                  <Typography fontSize=".7rem" variant="body1">
                    {isNil(values?.payoffVersionNumber)
                      ? "-"
                      : values?.payoffVersionNumber}
                  </Typography>
                  <Typography fontSize=".7rem" variant="body1">
                    {/* February 3, 2023 */}
                    {getTodaysDate(true)}
                  </Typography>
                  <Typography fontSize=".7rem" variant="body1">
                    {/* July 23, 2022 at 2:00 PM EST */}
                    {`${parseISOToDate(
                      values.payoffDate,
                      true
                    )} at 2:00 PM EST`}
                  </Typography>
                </Box>
              </Stack>
              <Stack marginTop="20px" direction={"row"}>
                <Box>
                  <Typography fontSize=".7rem" variant="body1">
                    To:
                  </Typography>
                  <Typography fontSize=".7rem" variant="body1">
                    Re:
                  </Typography>{" "}
                </Box>
                <Box ml={"40px"}>
                  <Typography
                    fontSize=".7rem"
                    fontWeight="bold"
                    variant="body1"
                  >
                    {values.borrowerName}
                  </Typography>
                  <Typography
                    fontSize=".7rem"
                    fontWeight="bold"
                    variant="body1"
                  >
                    {`${values.collateralAddress} ${values.collateralCity} ${values.collateralState} ${values.collateralZip}`}
                  </Typography>
                </Box>
              </Stack>
            </Box>
            {/* LOGO  */}
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              flexDirection={"column"}
              // width="100%"
            >
              <FlatIronLogo width="220px" />
              <Stack
                width="100%"
                direction={"row"}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography fontSize=".7rem" variant="body1">
                  Investor Loan No.
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  {/* FRC-RTL-00001964 */}
                  {values.loanId}
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Section>
            <Stack direction={"row"} justifyContent="space-between">
              <Typography fontSize={".7rem"} variant="body1">
                We have prepared the following figures for the payoff that is to
                occur on
              </Typography>
              <Stack flexGrow={1} direction={"column"}>
                <Stack flexGrow={1} direction={"column"}>
                  <SectionRow title labelBold="Amount" valueBold="Account" />
                  <SectionRow
                    label={values.principalBalance}
                    value="Principal balance"
                  />
                  <SectionRow
                    label={values.undrawnRehabEscrow}
                    value="Undrawn Rehab Escrow"
                  />
                  <SectionRow
                    label={values.accruedInterest}
                    value="Accrued Interest"
                  />
                  <SectionRow
                    label={values.accruedDefaultInterest}
                    value="Accrued Default Interest"
                  />
                  <SectionRow
                    label={values.unappliedCash}
                    value="Unapplied Cash"
                  />
                  <SectionRow
                    label={values.primaryServicing}
                    value="Primary Servicing"
                  />
                  <SectionRow
                    label={values.specialServicing}
                    value="Special Servicing"
                  />
                  <SectionRow
                    label={values.extensionFees}
                    value="Extension Fees"
                  />
                  <SectionRow
                    label={values.protectiveAdvancesLegalFees}
                    value="Protective Advances - Legal Fees"
                  />
                  <SectionRow
                    label={values.protectiveAdvancesInsurance}
                    value="Protective Advances - Insurance"
                  />
                  <SectionRow
                    label={values.protectiveAdvancesReTaxes}
                    value="Protective Advances - RE Taxes"
                  />
                  <SectionRow
                    label={values.assignmentFee}
                    value="Assignment Fee"
                  />
                  <SectionRow
                    label={values.postMaturityFee}
                    value="Post-Maturity Fee"
                  />
                  <SectionRow
                    label={values.payoffPrepFee}
                    value="Total Prep Fee"
                  />
                  <Box
                    sx={{
                      borderTop: "var(--border)",
                      paddingTop: "3px",
                      margin: " 0 auto",
                      marginTop: "3px",
                      width: "80%",
                    }}
                  ></Box>
                  <SectionRow
                    labelBold={values.totalPayoff}
                    value="Total Payoff"
                  />
                </Stack>
                <Stack marginTop="20px" flexGrow={1} direction={"column"}>
                  <SectionRow
                    label={values.regularInterestPerDiem}
                    value="Regular Interest Per Diem"
                  />
                  <SectionRow
                    label={values.defaultInterestPerDiem}
                    value="Default Interest Per Diem"
                  />
                  <Box
                    sx={{
                      borderTop: "var(--border)",
                      paddingTop: "3px",
                      margin: " 0 auto",
                      marginTop: "3px",
                      width: "80%",
                    }}
                  ></Box>
                  <SectionRow
                    labelBold={values.totalInterestPerDiem}
                    value="Total Interest Per Diem"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Section>
          <Section>
            <Typography fontSize={".7rem"} color={"var(--red)"} variant="body1">
              * This figure reflects current legal fees incurred by lender
              through the date the payoff is issued. This figure is subject to
              change and borrower remains responsible for all recoverable legal
              fees billed after the payoff quote issuance date. Satisfactions
              and Note will be returned in the ordinary course of business.
            </Typography>
          </Section>
          <Section>
            <Typography fontSize={".7rem"} fontWeight="600" variant="body1">
              All Funds must be received by 2:00 PM EST to receive same day
              credit, payments received after 2:00 PM EST are subject to
              additional Per Diem interest. You are still responsible for
              keeping your account current during the payoff process.
            </Typography>
            <Box marginTop="25px">
              <Typography fontSize={".7rem"} fontWeight="600" variant="body1">
                Every effort has been made to ensure the informational accuracy
                of this Payoff Quote and, if applicable, all accompanying
                attachment(s). Please review the loan number, name of mortgagor,
                property address, and principal balance, and confirm this
                information agrees with your record of the loan. Notification is
                hereby given that, in the event of error or omission, the lender
                does not, in any way, prejudice its right and entitlement to all
                monies lawfully due it under the terms of the Mortgage, Note or
                related documents and provided that the loan documents contain
                no provisions that would prohibit payment. Mortgagor needs to
                review the loan documents for the existence of such provisions
                and be aware that this quote does not in any way alter or modify
                any of the terms therein.
              </Typography>
            </Box>
          </Section>
          <Section>
            <Typography fontSize={".7rem"} fontWeight="500" variant="body1">
              Please have wired to the lender pursuant to the following wiring
              instructions:
            </Typography>
            <Stack marginTop="10px" direction={"row"}>
              <Box>
                <Typography fontSize=".7rem" variant="body1">
                  Funds are to be wired to:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  For credit to:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Account number:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  ABA routing number:
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Reference:
                </Typography>
              </Box>
              <Box ml={"40px"}>
                <Typography fontSize=".7rem" variant="body1">
                  JP Morgan Chase Bank
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  Flatiron Realty Capital LLC
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  378060120
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  021000021
                </Typography>
                <Typography fontSize=".7rem" variant="body1">
                  {values.loanId} Payoff
                </Typography>
              </Box>
            </Stack>
          </Section>
          <Section>
            <Typography
              fontWeight="600"
              fontSize={".7rem"}
              color={"var(--red)"}
              variant="body1"
            >
              Before initiating any wire to Lender, sender is required to
              verbally confirm these wire instructions with Director of Loan
              Servicing, Conor McAuley Phone Number: 516-550-0427
            </Typography>
          </Section>
        </Box>
      </Stack>
    </DrilldownCard>
  );
};

const Section = (props) => {
  return <Box marginTop="50px">{props.children}</Box>;
};

const SectionRow = ({ label, value, valueBold, labelBold, title }) => {
  const checkIfValid = (val, dollar) => {
    if (title) {
      return val;
    }
    if (isNil(val) || val === "" || isArray(val) || isObject(val)) {
      return "-";
    }
    if (dollar) {
      let valNum = Number(val);
      return `$${formFormatDollar(valNum)}`;
    }
    return val;
  };
  return (
    <Stack
      direction={"row"}
      padding="1px 6px"
      spacing={2}
      // justifyContent="space-between"
      alignItems={"center"}
    >
      <Typography
        flexBasis={"40%"}
        fontSize=".7rem"
        textAlign={"right"}
        fontWeight={labelBold ? 700 : 500}
        variant="body1"
      >
        {labelBold ? checkIfValid(labelBold, true) : checkIfValid(label, true)}
      </Typography>
      <Typography
        flexBasis={"60%"}
        fontSize=".7rem"
        textAlign={"left"}
        fontWeight={valueBold ? 700 : 500}
        variant="body1"
      >
        {valueBold ? checkIfValid(valueBold) : checkIfValid(value)}
      </Typography>
    </Stack>
  );
};

export default FundraisingCreateScreen;
