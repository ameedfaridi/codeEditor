import { Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/theme/material.css";
import React from "react";
import { Controlled } from "react-codemirror2";

export default function Editor({
  displayName,
  value,
  onChange,
  language,
  ...props
}) {
  const theme = useTheme();

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <React.Fragment>
      <Grid
        container
        component={Paper}
        sx={{ backgroundColor: theme.palette.secondary.main }}
        elevation={3}
      >
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="button" color="primary">
            {displayName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controlled
            onBeforeChange={handleChange}
            value={value}
            options={{
              lineWrapping: true,
              lint: true,
              mode: language,
              lineNumbers: true,
              theme: "material",
            }}
            {...props}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
