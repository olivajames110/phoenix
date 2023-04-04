import { WarningAmberRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import DrilldownCardTabSection from "../../../../../../../../components/Drilldown/DrilldownCardTabSection";
import DrilldownScreenTab from "../../../../../../../../components/Drilldown/DrilldownScreenTab";
import DrilldownSection from "../../../../../../../../components/shared/Drilldown/DrilldownSection";
import PreviewableFileTable from "../../../../../../../../components/shared/Files/PreviewableFileTable";
import FlatironDisplayTable from "../../../../../../../../components/shared/FlatironDisplayTable";
import MuiGrid from "../../../../../../../../components/shared/MuiGrid";
import GridItem from "../../../../../../../../components/shared/MuiGrid/GridItem";
import WidgetOuterTitle from "../../../../../../../../components/shared/Widgets/WidgetOuterTitle";
import BorrowerFileActionRequiredModal from "../../../../../../../../forms/BorrowerFileActionRequired/BorrowerFileActionRequiredModal";
import { fileDocumentSchema } from "../../../../../../../../forms/_formQuestions/_formSchema/fileDocumentSchema";
import { BORROWER_DUMMY_DOCS } from "../../../../../../tests/BORROWER_DUMMY_DOCS";
import LoanFilesStatusKey from "./LoanFilesStatusKey";

const BorrowerLoanFilesTab = (props) => {
  const [files, setFiles] = useState([]);
  const [actionRequiredIsActive, setActionRequiredIsActive] = useState(null);
  const pending = files.filter((f) => f.status !== "Approved");
  const approved = files.filter((f) => f.status === "Approved");

  const handleActionRequireClick = (file) => {
    setActionRequiredIsActive(file);
  };
  const cols = [
    // {
    //   Header: "Name",
    //   accessor: "address",
    // },
    {
      Header: "File Name",
      accessor: (d) => d?.file?.path,
    },
    {
      Header: "Status",
      accessor: (d) =>
        d.status === "Action Required" ? (
          <Button
            onClick={() => handleActionRequireClick(d)}
            sx={{ fontSize: ".7rem", padding: 0, textAlign: "left" }}
            color="warning"
            endIcon={
              <WarningAmberRounded sx={{ width: ".9em", height: ".9em" }} />
            }
          >
            Action Required
          </Button>
        ) : (
          "Pending Review"
        ),
    },
    {
      Header: "Upload Date",
      accessor: "dateSubmitted",
    },
  ];

  const columns = React.useMemo(() => cols, []);
  return (
    <DrilldownScreenTab title={"Files"}>
      <BorrowerFileActionRequiredModal
        file={actionRequiredIsActive}
        show={actionRequiredIsActive !== null}
        onCancel={() => setActionRequiredIsActive(null)}
      />
      <MuiGrid spacing={4}>
        <GridItem size={8}>
          <DrilldownCardTabSection
            h3
            title="Required Loan Documents"
            headerContent={<LoanFilesStatusKey />}
          >
            <DrilldownSection>
              <MuiGrid
                spacing={{ xs: 2, md: 2 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {BORROWER_DUMMY_DOCS.map((d) => (
                  <GridItem
                    // md={4}
                    // lg={6}
                    // xl={12}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                  >
                    <PreviewableFileTable
                      title={d.title}
                      description={d.description}
                      docGroup={d.docGroup}
                      docType={d.docType}
                      status={d.status}
                      setFiles={setFiles}
                    />
                  </GridItem>
                ))}
              </MuiGrid>
            </DrilldownSection>
          </DrilldownCardTabSection>
        </GridItem>
        <GridItem size={4}>
          <DrilldownCardTabSection h3 noCard title="Submitted Documents">
            <DrilldownSection
            // style={{
            //   padding: "25px 0",
            //   marginTop: "15px",
            //   borderTop: "1px solid #80808036",
            // }}
            >
              <FlatironDisplayTable
                title="Pending Review"
                columns={columns}
                data={pending}
              />

              <Box marginTop={"20px"}>
                <FlatironDisplayTable
                  title="Approved Documents"
                  columns={columns}
                  data={approved}
                  // data={DUMMY_FILES}
                />
              </Box>
            </DrilldownSection>
          </DrilldownCardTabSection>
        </GridItem>
      </MuiGrid>
    </DrilldownScreenTab>
  );
};

export default BorrowerLoanFilesTab;
