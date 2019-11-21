import React from "react";
import {Paper, Grid } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";

const StepReceiverAddress:React.FC = (props: any) => {
  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Field
            name="receiverName"
            label="Receiver Name"
            type="text"
            component={TextField}
          />
        </Grid>
        <Grid item xs={5}>
          <Field
            name="receiverAddress"
            label="Receiver Address"
            type="text"
            component={TextField}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StepReceiverAddress;
