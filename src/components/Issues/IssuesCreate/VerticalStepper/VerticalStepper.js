import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getStepContent(stepIndex,name) {
  switch (stepIndex) {
    case 0:
      return `Select ${name} settings...` ;
    case 1:
      return `What is an ${name} group anyways?`;
    case 2:
      return `This is the bit I really care about!`;
    default:
      return 'Unknown stepIndex';
  }
}
export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={props.activeStep} orientation="vertical">
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {props.activeStep === props.steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(props.activeStep,props.name)}</Typography>
            <div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
