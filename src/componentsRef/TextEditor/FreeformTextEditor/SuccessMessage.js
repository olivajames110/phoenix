import React, { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

const DEBOUNCE_SAVE_DELAY_MS = 1000;

export default function SuccessMessage({
  data,
  onSave,
  hasUnsavedContent,
  autosaveIsActive,
}) {
  // This is the side effect we want to run on users' changes.
  // In this example, we persist the changes in the localStorage.
  const saveExperimentData = useCallback((data) => {
    // window.localStorage.setItem(LOCAL_STORAGE_KEY, newExperimentData.name);
    console.log("Saved successfully!", data);
    onSave();
  }, []);

  const debouncedSave = useCallback(
    debounce(async (data) => {
      saveExperimentData(data);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  // The magic useEffect hook. This runs only when `experimentData.name` changes.
  // We could add more properties, should we want to listen for their changes.
  useEffect(() => {
    if (data && hasUnsavedContent && autosaveIsActive) {
      debouncedSave(data);
    }
  }, [data, debouncedSave, hasUnsavedContent, autosaveIsActive]);

  // Do not display anything on the screen.
  return null;
}
