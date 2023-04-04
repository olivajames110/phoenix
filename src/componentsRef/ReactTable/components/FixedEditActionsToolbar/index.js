import React from "react";
import "./FixedEditActionsToolbar.css";
import { Download, CloseOutlined } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import FixedBanner from "../../../FixedBanner";

const FixedEditActionsToolbar = (props) => {
  const { selectedRows, onClick, onClose } = props;

  return (
    <>
      {/* <Toolbar className="fixed-edit-actions-toolbar">
      <div className="tool-bar-inner-wrapper">
        <div className="num-items-selected">
          <div className="value center">{selectedRows.length}</div>

          <span>Selected</span>
        </div>
        <div className="actions-container">
          {props.children}
          <div className="button-wrapper">
            <button onClick={onClick}>
              <Download />
              <span>Download ({selectedRows.length})</span>
            </button>
          </div>
        </div>
      </div>
      <div id="close" className="button-wrapper">
        <button onClick={onClose}>
          <CloseOutlined />
        </button>
      </div>
    </Toolbar> */}

      <FixedBanner
        onClose={onClose}
        className={"fixed-edit-actions-toolbar"}
        numSelected={selectedRows.length}
      >
        {/* <div className="num-items-selected">
          <div className="value center">{selectedRows.length}</div>

          <span>Selected</span>
        </div> */}
        <div className="actions-container">
          {props.children}
          {/* <div className="button-wrapper">
            <button onClick={onClick}>
              <Download />
              <span>Download ({selectedRows.length})</span>
            </button>
          </div> */}
        </div>
      </FixedBanner>
    </>
  );
};

export default FixedEditActionsToolbar;
// return (
//   <Modal
//     id="fixed-edit-actions-toolbar"
//     onCancel={() => setChangeCategoryIsActive(false)}
//     show={changeCategoryIsActive}
//   >
//     <div className={`popover-inner-wrapper ${showSuccess && "success"}`}>
//       <h3>Change Category</h3>
//       <div className="current-file-name">
//         <span>
//           {showSuccess
//             ? "File category successfully changed!"
//             : "Current Group:"}
//         </span>
//         {!showSuccess && (
//           <span className="current-name">
//             {/* {toCamelCase(props.file.docGroup)} */}
//           </span>
//         )}
//       </div>

//       {!showSuccess && (
//         <>
//           <section className="input-field">
//             <FormControl fullWidth size="small" variant="filled">
//               <InputLabel
//                 // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
//                 size="small"
//                 htmlFor={"doc-group"}
//               >
//                 New Document Group
//               </InputLabel>

//               <Select
//                 id="popover-select"
//                 labelId={"doc-group"}
//                 size="small"
//                 variant="filled"
//                 fullWidth
//                 value={value}
//                 label="New Category"
//                 onChange={(e) => setValue(e.target.value)}
//               >
//                 {docGroupTypes.map((i) => (
//                   <MenuItem value={i.name}>{i.label}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <div className="button-wrapper">
//               <button
//                 onClick={() => handleBulkDocGroupChange(value)}
//                 className="btn-blue "
//               >
//                 Update Groups
//               </button>
//             </div>
//           </section>
//         </>
//       )}
//     </div>
//   </Modal>
