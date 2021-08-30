import React from 'react'
import { FcNightPortrait, FcCheckmark, FcLock } from 'react-icons/fc';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function AccordianFn(props) {

    let {heading,subHeading,dis}=props;

    console.log(props);
    let i=-1;
    const classes = useStyles();
    return (

       
        <div className="Highlighted">
            {/*  */}
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          

          <Typography className={classes.heading}><h5 className="Highlighted1" ><FcNightPortrait /><span>{heading}</span> </h5></Typography>

           
        </AccordionSummary>
        {
            subHeading.map((sub)=>{
                i++;
                return (<Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}> <h6 >{sub}</h6> </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                  <Typography>
                   {dis[i]}
                  </Typography>
                </AccordionDetails>
              </Accordion>)
               
            })
        }
     
       
      </Accordion>
        </div>
    )
}

export default AccordianFn
