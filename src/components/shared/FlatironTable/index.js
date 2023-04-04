import React from "react";
import BorderCard from "../BorderCard";
import "./FlatironTable.css";

const FlatironTable = ({ style, id, noBorder, children }) => {
  if (noBorder) {
    return (
      <div id={id} className="flatiron-table">
        {children}
      </div>
    );
  }
  return (
    <BorderCard style={style} id={id} className="flatiron-table">
      {children}
    </BorderCard>
  );
};

export default FlatironTable;

// import { Box } from "@mui/system";
// import React from "react";
// import FlatironTable from "./FlatironTable";

// export const FlatironTitleCard = (props) => {
//   // Use the state and functions returned from useTable to build your UI

//   // Render the UI for your table
//   return (
//     <>
//       <FlatironTable>
//         {props.title && (
//           <div
//             style={{ borderBottom: "1px solid #e2e2e2 " }}
//             className="doc-group-table-card__header"
//           >
//             <h2 style={props.titleStyle}>{props.title}</h2>
//             <div className="header-buttons-container">
//               {props.headerContent ? props.headerContent : null}
//             </div>
//           </div>
//         )}

//         <Box>{props.children}</Box>
//       </FlatironTable>
//     </>
//   );
// };

// export default FlatironTitleCard;
