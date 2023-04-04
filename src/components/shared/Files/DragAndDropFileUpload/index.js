import { FileUploadRounded } from "@mui/icons-material";
import React from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuidv4 } from "uuid";

import { Snackbar } from "@mui/material";
import { useState } from "react";
import AnimatedCheckmark from "../../AnimatedCheckmark/AnimatedCheckMark";

/**
 * Desc: File upload box that on upload will return array of files .
 * Flow: Upload Files > Return Array
 * Inputs: Deal object | onUpload | docGroup (optional) | docType (optional)
 * Outputs: Returns array of objects via props.onUpload
 */

export const DragAndDropFileUpload = ({
  onUpload,
  isSuccess,
  isLoading,
  maxFiles, //optional
  message, //optional
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: maxFiles ? false : true,
    maxFiles: maxFiles || 0,
    onDrop: (acceptedFiles) => {
      let newFileIds = [];
      const mappedFiles = acceptedFiles.map((file, i) => {
        console.log("DragAndDropFileUpload acceptedFiles", acceptedFiles);
        let uid = uuidv4();
        let newObject = {
          file: Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
          id: uid,
        };
        console.log("newObject", newObject);
        newFileIds = [...newFileIds, newObject.id];
        console.log("newFileIds", newFileIds);

        return newObject;
      });
      console.log("mappedFiles", mappedFiles);
      onUpload(mappedFiles);
    },
  });

  const [show, setShow] = useState(false);

  return (
    <div id="file-upload">
      <div className="file-upload-inner-content">
        <div
          style={{ height: "100px" }}
          {...getRootProps({ className: "file-upload-box" })}
        >
          {isSuccess ? (
            <Snackbar
              open={show}
              onClose={() => setShow(false)}
              autoHideDuration={2400}
              sx={{
                position: "absolute",
                top: "0px !important",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <div>
                <AnimatedCheckmark
                  style={{ height: "unset" }}
                  svgStyle={{
                    fill: "transparent",
                    width: "28px",
                    height: "28px",
                    marginBottom: "5px",
                  }}
                />
                <span style={{ fontSize: ".7rem" }}>
                  File Uploaded Successfully
                </span>
              </div>
            </Snackbar>
          ) : null}
          <input {...getInputProps()} />
          <FileUploadRounded />
          {message === false ? null : (
            <span className="file-upload__title">
              {message ? message : "Drag & Drop or Click"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
  // return (
  //   <div id="file-upload">
  //     <div className="file-upload-inner-content">
  //       <div
  //         style={{ height: props.height ? props.height : "100px" }}
  //         {...getRootProps({ className: "file-upload-box" })}
  //       >
  //         {isLoading ? (
  //           <Loader block size={"32px"} />
  //         ) : result?.show ? (
  //           <Snackbar
  //             open={result?.show}
  //             onClose={() =>
  //               props.setResult({
  //                 show: false,
  //                 success: false,
  //               })
  //             }
  //             autoHideDuration={2400}
  //             sx={{
  //               position: "absolute",
  //               top: "0px !important",
  //               width: "100%",
  //               height: "100%",
  //               display: "flex",
  //               flexDirection: "column",
  //             }}
  //             anchorOrigin={{
  //               vertical: "bottom",
  //               horizontal: "center",
  //             }}
  //           >
  //             <div>
  //               <AnimatedCheckmark
  //                 fail={!result.success}
  //                 style={{ height: "unset" }}
  //                 svgStyle={{
  //                   fill: "transparent",
  //                   width: "28px",
  //                   height: "28px",
  //                   marginBottom: "5px",
  //                 }}
  //               />
  //               <span style={{ fontSize: ".7rem" }}>
  //                 {result.success
  //                   ? "File Uploaded Successfully"
  //                   : "Could not upload files"}
  //               </span>
  //             </div>
  //           </Snackbar>
  //         ) : (
  //           <>
  //             <input {...getInputProps()} />
  //             <FileUploadRounded />
  //             {props.message === false ? null : (
  //               <span className="file-upload__title">
  //                 {props.message ? props.message : "Drag & Drop or Click"}
  //               </span>
  //             )}
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};
