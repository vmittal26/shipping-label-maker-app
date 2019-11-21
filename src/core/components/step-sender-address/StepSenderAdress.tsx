import React from "react";
import { Grid,Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field } from "formik";

import PaperStyled from "../../utils/PaperStyledJss";
import { StylesProvider } from "@material-ui/core/styles";
import FormControlStyled from "../../utils/FormControlStyledJss";

const StepSenderAdress: React.FC = (props: any) => {
  return (
    <StylesProvider injectFirst>
      <PaperStyled>
        <Typography variant="h4">Enter The Sender's Address</Typography>
        <Grid container>
          <Grid item sm={5}>
            <FormControlStyled>
              <Field
                name="senderName"
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
                  name="senderCity"
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
                    name="senderState"
                    label="State"
                    type="text"
                    component={TextField}
                  />
                </FormControlStyled>
              </Grid>
              <Grid item sm={4}>
                <FormControlStyled>
                  <Field
                    name="senderCity"
                    label="City"
                    type="text"
                    component={TextField}
                  />
                </FormControlStyled>
              </Grid>
              <Grid item sm={4}>
                <FormControlStyled>
                  <Field
                    name="senderZip"
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

export default StepSenderAdress;
