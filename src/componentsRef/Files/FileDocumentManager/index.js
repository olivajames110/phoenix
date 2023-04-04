import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { cookieTypes } from "../../../../global/cookieTypes";

import { tableColumnsLoanFilesUW } from "../../ReactTable/columns/tableColumnsLoanFilesUW";
import AllFilesTable from "./AllFilesTable";
import CategorizedDocGroupTables from "./CategorizedDocGroupTables";
import DocumentManagerHeader from "./DocumentManagerHeader";

import "./FileDocumentManager.css";

const FileDocumentManager = (props) => {
  //State
  const formData = useSelector((state) => state.formData);
  const [tableDocs, setTableDocs] = useState(formData.documents);

  const [showCategorizedGroups, setShowCategorizedGroups] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const columns = React.useMemo(() => tableColumnsLoanFilesUW, []);

  //----Header navbar functions----//

  //Toggle Categorize
  const toggleCategorizeDocuments = (e) => {
    let checkedCookie = Cookies.get(cookieTypes.categorizedFiles);
    console.log("TOGGLE : checkedCookie", checkedCookie);

    if (checkedCookie) {
      console.log("SET FALSE");
      Cookies.remove(cookieTypes.categorizedFiles);
    }

    if (checkedCookie === undefined) {
      console.log("SET TRUE");
      Cookies.set(cookieTypes.categorizedFiles, "true");
    }

    setShowCategorizedGroups((s) => !s);
  };

  //Toggle Hidden
  const toggleHiddenFiles = (e) => {
    let value = e.target.checked;

    if (showFinal) {
      setShowHidden(false);
      return;
    }
    if (value) {
      setTableDocs(formData.documents);
      setShowHidden(true);
    }
    if (!value) {
      let filtered = formData.documents.filter((d) => d.isHidden !== true);
      setTableDocs(filtered);
      setShowHidden(false);
    }
  };

  //Toggle Final
  const handleFinalFiles = (e) => {
    let value = e.target.checked;

    if (value) {
      let filtered = formData.documents.filter(
        (d) => d.isFinal === true && d.isHidden !== true
      );
      setTableDocs(filtered);
      setShowHidden(false);
      setShowFinal(true);
    }

    if (!value) {
      let filtered = formData.documents.filter((d) => d.isHidden !== true);
      // setShowHidden(true);
      setTableDocs(filtered);
      setShowFinal(false);
    }
  };

  useEffect(() => {
    let filteredWithoutHidden = formData.documents.filter(
      (d) => d.isHidden !== true
    );

    setTableDocs(filteredWithoutHidden);
  }, [formData]);

  useEffect(() => {
    if (Cookies.get(cookieTypes.categorizedFiles) === "true") {
      setShowCategorizedGroups(true);
    }
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "10px" }} className="between">
        {/* <DrilldownHeader h3>{"Loan Files"}</DrilldownHeader> */}
        <DocumentManagerHeader
          toggleCategorizeDocuments={toggleCategorizeDocuments}
          toggleHiddenFiles={toggleHiddenFiles}
          handleFinalFiles={handleFinalFiles}
          showHidden={showHidden}
          showFinal={showFinal}
        />
      </div>

      <section className={`document-manager-tables all`}>
        {showCategorizedGroups ? (
          <CategorizedDocGroupTables
            showCategorizedGroups={showCategorizedGroups}
            documents={tableDocs}
          />
        ) : (
          <AllFilesTable
            toggleHiddenFiles={toggleHiddenFiles}
            columns={columns}
            documents={tableDocs}
            data={tableDocs}
          />
        )}
      </section>
    </>
  );
};

export default FileDocumentManager;
