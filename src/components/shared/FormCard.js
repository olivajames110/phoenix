import { Box, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import FlatIronLogo from "./FlatIronLogo";

const FormCard = ({ title, description, children }) => {
  const old = (
    <>
      <Box component={"article"} id="user-auth-form-card">
        <div className="form-outer-wrapper">
          <header className="form__header">
            <FlatIronLogo />
            <div className="form-header-title-container">
              {title ? <h1>{title}</h1> : null}
              {description ? <p>{description}</p> : null}
            </div>
          </header>

          <div className="form__body">{children}</div>
        </div>
      </Box>
    </>
  );
  return (
    <>
      <Card
        sx={{
          padding: "30px",
          maxWidth: "480px",
          width: "100%",
          borderRadius: "8px",
        }}
      >
        <Stack alignItems={"center"}>
          <FlatIronLogo />

          <Typography
            variant="h1"
            sx={{
              fontFamily: " var(--jost)",
              color: "#3a3a3a",
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "2.5rem",
              textAlign: "center",
              marginTop: " 20px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#707070",
              fontSize: " .9rem",
              // lineHeight: " 24px",
            }}
          >
            {description}
          </Typography>
          <Box sx={{ width: "100%", paddingTop: "30px" }}>{children}</Box>
        </Stack>
      </Card>
      {/* {old} */}
    </>
  );
};

export default FormCard;
