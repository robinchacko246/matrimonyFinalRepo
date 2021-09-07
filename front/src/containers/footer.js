import React from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter, NavLink } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TestFill
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function ItemFn(item) 
{
  if(item=="Login")
  {
    item="users/login"
  }
  if(item=="Registration")
  {
    item="users/register"
  }
  return item.replace(/ /g,'')
  
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));


const footers = [
  
  {
    title: 'Company',
    description: ['About Us',  'Contact us'],
  },
  {
    title: 'Quick Links',
    description: ['Login', 'Registration', 'About Us', 'Contact Us'],
  },

  {
    title: 'Help',
    description: ['FAQ','Privacy policy', 'Terms of use',"Feedback"],
  },
  {
    title: 'Other Service',
    description: ['Matrimony Blog','E-brochure', 'Photo Gallery'],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
   

     
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
          
                {footer.description.map((item) =>
                
                
                (
                  
                  

                  
                    
                  <li key={item}>
                    {/* <NavLink to="/contactUs">Contact Us</NavLink> */}
                    <NavLink to={"/"+ItemFn(item)} color="textSecondary">
                 
                  {
                    item
                  }
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
