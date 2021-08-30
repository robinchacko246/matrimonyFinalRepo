import React from 'react';

import "../styles/App.css";
import NavBar from "../components/NavBar";
import AccordianFn from '../components/AccordianFn';
import Footer from "./footer";





export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <NavBar />

      <div className="row">

     
        <div className="Highlighted">
          <h2> <span>Frequently Asked Questions</span> </h2>

          <p className="text-center" style={{ transform: "translate3d(0px, 0px, 0px)", opacity: 1 }}  >If you can’t find your answers, please feel free to contact us.
</p>
        </div>
        {/* <div className="col s12">This div is 12-columns wide on all screen sizes</div> */}
        <div className="col s6">

           <AccordianFn heading={"Registration"} subHeading={["How can I register my profile on TestFill?"]} dis={["Login to TestFill then Click on New User Signup link and you will have to enter on a couple of pages the details of the person intending to get married. After you submit your information, your profile will be automatically created and you shall be given a 'Matrimony ID / Registration No.' generated for future references and login purposes,For assistance feel free to call our customer care executive :8138813237"]} />
           <AccordianFn heading={"Membership"} subHeading={["What are the features and benefits of Free Membership?","What is profile validation?"]} dis={["A free membership helps a user to understand what nestmatrimony.com is. The free membership is valid for 6 months.","All the profiles are validated before inclusion in the database. Validation of profiles is done manually, which takes 24 hours. Our support team meticulously validates each and every profile carefully on specific criterion before it is added to our database.SMS/ E-mail will be sent to you once the profile is validated and added."]} />
           <AccordianFn heading={"Sign In"} subHeading={["How do a user login to their profile?","Why invalid User ID/Password is being displayed when the user try to login?","What should the user do if the user forgot their User ID/Password?"]} dis={["Click on login/ sign up and enter your “User ID” and “Password” in respective fields and click on the “Sign in” button to login to your account.","The user might have entered incorrect User ID/ Password","If the user forgot their User ID or password, click on the “Forgot?” link in the right side of the login window, provide your registered mobile number to the field and click submit/Login. The user will receive a Email For creating nw password"]} />
           <AccordianFn heading={"Search options"}  subHeading={["What are the different types of Searches?"]} dis={["This search feature enables the user to view matching profiles according to gender, religion, marital status, height and age the user has chosen."]} />
           <AccordianFn heading={"Method to Contact/Contacting members"}  subHeading={["How many ways are there to contact a suitable match if a user is a nestmatrimony.com member?"]} dis={["By contacting members through our customer care executives."]} />
           <AccordianFn heading={"Profile Updations"}  subHeading={["How do a user add a photo to their profile?"]} dis={["Click on link where the user name is displayed on the top right side of the window. Click on the edit profile section. Then click the “Add photo” link"]} />
          

          
        </div>
        <div className="col s6">

          <img src="https://nestmatrimony.com/resources/images/nest-love.png" alt="Love" class="m-auto"></img>

        </div>

      </div>
      <Footer />

    </div>

  );
}