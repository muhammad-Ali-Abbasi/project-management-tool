import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Papers from "../../../Paper"


export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState();

  const handleChange = (event) => {
    const value = event.target.value
    setSelectedValue(value);
    props.radiosatestate({radiostate: value})
  };
  const issuenatures = props.natures.map((nature)=>{
    return <Box style={{marginTop:"26px"}}>
                        
                        <Papers elevation={1} rounded >
                        <div style={{display:"flex", alignItems:"flex-start",marginBottom:"16px",padding:"16"}}>
                        <Radio
                         checked={selectedValue === nature.value}
                        onChange={handleChange}
                        value={nature.value}
                         name="radio-button-demo"
                           inputProps={{ 'aria-label': nature.value.toUpperCase() }}
                            />
                            <Box style={{marginLeft:"16px",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                            <Typography component="h5" variant="h5" color="textPrimary" gutterBottom>
                            {nature.name}
                            </Typography>
                            </Box>
                            </div>
                        </Papers>
                        
                    </Box>
  })
  return (
    <div>
      {issuenatures}
    </div>
  );
}
