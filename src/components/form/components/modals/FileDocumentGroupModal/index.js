import { Button } from "@mui/material";
import React from "react";
import { createSelectItemsDocGroups } from "../../../../../helpers/createSelectItems/createSelectItemsDocGroups";
import { createSelectItemsDocType } from "../../../../../helpers/createSelectItems/createSelectItemsDocType";
import Modal from "../../../../shared/Modal/Modal";
import "./FileDocumentGroupModal.css";

const FileDocumentGroupModal = (props) => {
  const [show, setShow] = React.useState(false);
  // createSelectItemsDocGroups
  // createSelectItemsDocType
  return (
    <>
      <Modal
        id="file-document-groups-modal"
        onCancel={() => setShow(false)}
        show={show}
        headerContent={<h2>Document Groups & Types</h2>}
      >
        <div className="inner-wrapper">
          <section id="main-content-area">
            <div className="modal__body">
              <div className="doc-group-container-outer-wrapper">
                {createSelectItemsDocGroups().map((i, index) => (
                  <DocGroupContainer
                    key={index}
                    title={i.label}
                    types={"Credit Authorization"}
                    docGroup={i.name}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </Modal>
      <Button
        variant="outlined"
        sx={{ padding: "4px 10px", fontWeight: 500, fontSize: ".75rem" }}
        // className="view-doc-group-button"
        onClick={() => setShow(true)}
        // type="button"
      >
        View Document Groups & Types
      </Button>
    </>
  );
};

const DocGroupContainer = (props) => {
  return (
    <div className="doc-group-container">
      <div className="doc-group-container-inner-wrapper">
        <div className="doc-group-container__title">
          <h3>{props.title}</h3>
        </div>
        <div
          className={`doc-group-container__types ${
            createSelectItemsDocType(props.docGroup).length >= 7 ? "grid" : null
          }`}
        >
          {createSelectItemsDocType(props.docGroup).map((i) => (
            <div className="doc-group-type-item">
              <span className="bullet">•</span>
              <span>{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileDocumentGroupModal;
