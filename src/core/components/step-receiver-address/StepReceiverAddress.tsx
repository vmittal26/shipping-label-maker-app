import React from "react";
import { Grid, StylesProvider, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import PaperStyled from "../../utils/PaperStyledJss";
import FormControlStyled from "../../utils/FormControlStyledJss";

const StepReceiverAddress: React.FC = (props: any) => {
  return (
    <StylesProvider injectFirst>
      <PaperStyled>
        <Typography variant="h4">Enter The Receiver's Address</Typography>
        <Grid container>
          <Grid item sm={5}>
            <FormControlStyled>
              <Field
                name="receiverName"
                label="Name"
                type="text"
                component={TextField}
              />
            </FormControlStyled>
          </Grid>
          <Grid container>
            <Grid item sm={12}>
              <FormControlStyled>
                <Field
                  name="receiverCity"
                  label="Street"
                  type="text"
                  component={TextField}
                />
              </FormControlStyled>
            </Grid>
            <Grid container spacing={3}>
              <Grid item sm={4}>
                <FormControlStyled>
                  <Field
                    name="receiverState"
                    label="State"
                    type="text"
                    component={TextField}
                  />
                </FormControlStyled>
              </Grid>
              <Grid item sm={4}>
                <FormControlStyled>
                  <Field
                    name="receiverCity"
                    label="City"
                    type="text"
                    component={TextField}
                  />
                </FormControlStyled>
              </Grid>
              <Grid item sm={4}>
                <FormControlStyled>
                  <Field
                    name="receiverZip"
                    label="Zip"
                    type="text"
                    component={TextField}
                  />
                </FormControlStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PaperStyled>

    </StylesProvider>
  );
};

export default StepReceiverAddress;
