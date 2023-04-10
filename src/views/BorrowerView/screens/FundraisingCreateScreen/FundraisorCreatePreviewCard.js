import React, { useEffect, useMemo, useState } from "react";
import { arrayProtector } from "../../../../helpers/arrayProtector";
import { isArray, isNil } from "lodash";
import { useFormState } from "react-final-form";
import DrilldownCard from "../../../../components/Drilldown/DrilldownCard";
import TabSwitcher from "../../../../components/shared/TabSwitcher";
import { Box, Stack, Typography } from "@mui/material";
import MuiGrid from "../../../../components/shared/MuiGrid";
import GridItem from "../../../../components/shared/MuiGrid/GridItem";
import DraftJsTextEditor from "../../../../components/shared/DraftJsTextEditor";
import { db } from "../../../../database/db";
import TabPanel from "../../../../components/shared/TabSwitcher/TabPanel";
import WebsiteFundraiserScreen from "../../../../external/WebsiteFundraiserScreen";

const FundraisorCreatePreviewCard = (props) => {
  const { values } = useFormState();
  const [value, setValue] = useState(0);
  const [selectedPet, setSelectedPet] = useState({});

  useEffect(() => {
    if (isNil(values.selectedPet)) {
      setSelectedPet({});
      return;
    }

    const filteredCat = db.cats.filter((c) => c.name === values.selectedPet);
    console.log("filteredCat[0]", filteredCat[0]);
    setSelectedPet(filteredCat[0]);
  }, [values]);

  const additionalPetImages = useMemo(
    () =>
      arrayProtector(selectedPet.images).length < 1 ? [] : selectedPet.images,
    [selectedPet]
  );

  return (
    <DrilldownCard sx={{ overflowY: "auto" }}>
      <Stack>
        <TabSwitcher
          value={value}
          setValue={setValue}
          tabs={[
            "Web Preview",
            "Email Preview",
            "Facebook Preview",
            "Instagram Preview",
          ]}
        />
        <TabPanel index={0} value={value}>
          <WebsiteFundraiserScreen isPreview />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Box
            id="card-body"
            sx={{
              padding: "25px",
              width: "100%",
              ".public-DraftEditor-content": {
                padding: "3px !important",
              },
            }}
          >
            <Box
              id="row-wrapper"
              display={"flex"}
              gap="60px"
              direction={"row"}
              flexGrow={1}
              // flexWrap="nowrap"
            >
              <MuiGrid spacing={10}>
                <GridItem size={8}>
                  <Stack justifyContent={"center"}>
                    <PreviewElementTitle />
                    <PreviewElementDescription />
                  </Stack>
                </GridItem>
                <GridItem size={4}>
                  <PreviewElementPrimaryImage selectedPet={selectedPet} />
                </GridItem>
              </MuiGrid>
            </Box>

            {/* <Section id="secondary-images">
            <ImageList
              sx={{ width: "100%", height: "auto", overflowY: "unset" }}
              cols={3}
              rowHeight={164}
            >
              {additionalPetImages.map((item, i) => (
                <ImageListItem key={item}>
                  <img
                    key={i}
                    style={{ height: "160px" }}
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    // loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Section> */}
          </Box>
        </TabPanel>
      </Stack>
    </DrilldownCard>
  );
};

const PreviewElementTitle = (props) => {
  const { values } = useFormState();
  const isEmpty = isNil(values.campaignTitle);
  const previewContentValue = isEmpty ? "Example Title" : values.campaignTitle;

  const previewContentElement = (
    <Box sx={{ marginTop: "20px", display: "flex", flexGrow: 0 }}>
      <Typography fontWeight={700} fontSize="2rem" variant="h1">
        {previewContentValue}
      </Typography>
    </Box>
  );

  if (isEmpty) {
    return (
      <PreviewItem title="Example Campagin Name" name="campaignTitle">
        {previewContentElement}
      </PreviewItem>
    );
  }

  return previewContentElement;
};

const PreviewElementDescription = (props) => {
  const { values } = useFormState();
  // console.log("values.campaignDescription", values.campaignDescription);
  const isEmpty = isNil(values.campaignDescription);
  const previewContentValue = isEmpty
    ? "Example Description"
    : values.campaignDescription;

  const previewContentElement = (
    <Box sx={{ marginTop: "20px", display: "flex", flexGrow: 1 }}>
      {/* <Typography fontSize={".7rem"} fontWeight="500" variant="body1">
        {previewContentValue}
      </Typography> */}
      <DraftJsTextEditor
        name="campaignDescriptionReadOnly"
        readOnly
        data={values.campaignDescription}
      />
    </Box>
  );

  if (isEmpty) {
    return (
      <PreviewItem
        sx={{ marginTop: "14px", height: "300px" }}
        title="Example Campagin Name"
        name="campaignTitle"
      >
        Example Description
      </PreviewItem>
    );
  }

  return previewContentElement;
};

const PreviewElementPrimaryImage = ({ selectedPet }) => {
  const { values } = useFormState();
  const isEmpty = isNil(selectedPet) ? true : false;
  const previewContentValue = isEmpty
    ? "Example Image"
    : values.campaignDescription;

  if (!isArray(selectedPet.images)) {
    return (
      <PreviewItem
        sx={{ height: "340px" }}
        title="Example Campagin Name"
        name="campaignTitle"
      >
        Primary Image
      </PreviewItem>
    );
  }
  const previewContentElement = (
    <Box
      sx={{
        flexBasis: "450px",
        flexShrink: 0,
        flexGrow: 0,
      }}
      id="image-preview"
    >
      <img
        style={{ width: "100%", height: "auto" }}
        alt=""
        src={selectedPet.images[0]}
      />
    </Box>
  );

  if (isEmpty) {
    return (
      <PreviewItem title="Example Campagin Name" name="campaignTitle">
        {previewContentElement}
      </PreviewItem>
    );
  }

  return previewContentElement;
};

const PreviewItem = ({ children, sx }) => {
  return (
    <Box sx={{ padding: "10px", background: "#3a3a3a2f", ...sx }}>
      {children}
    </Box>
  );
};
export default FundraisorCreatePreviewCard;
