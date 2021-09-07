import React, { useState,useEffects,Component } from "react";
import SelectGender from "../profileEdit/SelectGender";
import SelectSexOrientation from "../profileEdit/SelectSexOrientation";
import InputTwoNames from "../profileEdit/InputTwoNames";
import InputBio from "../profileEdit/InputBio";
import BirthdatePicker from "../profileEdit/BirthdatePicker";
import InterestTags from "../profileEdit/InterestTags";
import SelectLocation from "../profileEdit/SelectLocation";
import moment from "moment";
import { Modal, Button } from "react-materialize";
import * as actionCreators from "../../actions/user-actions";
import { connect } from "react-redux";
import Axios from "axios";

export default function ModalUserEditProfileInfo(props) {
   console.log(props);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [education, setEducation] = useState("")
  const [gender, setGender] = useState("")
  const [bio, setBio] = useState("")
  const [dob, setDob] = useState("")
  const [interest, setInterest] = useState([])
  const [address, setAddress] = useState("")
  const [username, setUsername] = useState("")
  const [height, setHeight] = useState("")
  const [relegion, setReligion] = useState("")
  const [caste, setCast] = useState("")
  const [physicalStatus, setPhysicalStatus] = useState("")
  const [job, setJob] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  // const [state, setstate] = useState("")
  const handleSubmit =()=>
  {
    Axios.post(`/update/${props.user_id}/profile_details`).then((res)=>
    {
        console.log("rws",res);
     
    })
  }

  return (
   <div>
      <Modal
          id="edit-profile-modal"
          className="modals"
          header="Edit your profile info"
          fixedFooter
          trigger={false}
        >
       <div className="centerDiv">
         
         <label htmlFor="firstName">First Name</label>
         <br />
         <input
           className="input"
           type="text"
           id="firstName"
           name="Name"
           defaultValue="John" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}
         />
         <br />
         <label htmlFor="lastName">Last Name</label>
         <br />
         <input
           className="input"
           type="text"
           id="LastName"
           name="lastName"
           defaultValue="John" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}
         />
         <br />
         <label htmlFor="education">Education Qualification</label>
         <br />
         <input
           className="input"
           type="text"
           id="firstName"
           name="education"
           defaultValue="John" value={education} onChange={(e)=>{setEducation(e.target.value)}}
         />
         <br />
         <label htmlFor="gender">Gender</label>
         <br />
         <input
           className="input"
           type="text"
           id="gender"
           name="gender"
           defaultValue="John" value={gender} onChange={(e)=>{setGender(e.target.value)}}
         />
         <br />
         <label htmlFor="bio">About Myself</label>
         <br />
         <input
           className="input"
           type="text"
           id="bio"
           name="bio"
           defaultValue="John" value={bio} onChange={(e)=>{setBio(e.target.value)}}
         />
         <br />
         <label htmlFor="dob">Date Of Birth</label>
         <br />
         <input
           className="input"
           type="text"
           id="dob"
           name="dob"
           defaultValue="John" value={dob} onChange={(e)=>{setDob(e.target.value)}}
         />
         <br />
         <label htmlFor="interest">Interest</label>
         <br />
         <input
           className="input"
           type="text"
           id="interest"
           name="interest"
           defaultValue="John" value={interest} onChange={(e)=>{setInterest(e.target.value)}}
         />
         <br />
         <label htmlFor="address">address</label>
         <br />
         <input
           className="input"
           type="text"
           id="address"
           name="address"
           defaultValue="John" value={address} onChange={(e)=>{setAddress(e.target.value)}}
         />
         <br />
         <label htmlFor="username">Username</label>
         <br />
         <input
           className="input"
           type="text"
           id="username"
           name="username"
           defaultValue="John" value={username} onChange={(e)=>{setUsername(e.target.value)}}
         />
         <br />
         <label htmlFor="height">Height</label>
         <br />
         <input
           className="input"
           type="text"
           id="height"
           name="height"
           defaultValue="John" value={height} onChange={(e)=>{setHeight(e.target.value)}}
         />
         <br />
         <label htmlFor="relegion">Relegion</label>
         <br />
         <input
           className="input"
           type="text"
           id="relegion"
           name="relegion"
           defaultValue="John" value={relegion} onChange={(e)=>{setReligion(e.target.value)}}
         />
         <br />
         <br />
         <label htmlFor="caste">caste</label>
         <br />
         <input
           className="input"
           type="text"
           id="caste"
           name="caste"
           defaultValue="John" value={caste} onChange={(e)=>{setCast(e.target.value)}}
         />
         <br />
         <br />
         <label htmlFor="physicalStatus">Physical Status</label>
         <br />
         <input
           className="input"
           type="text"
           id="physicalStatus"
           name="physicalStatus"
           defaultValue="John" value={physicalStatus} onChange={(e)=>{setPhysicalStatus(e.target.value)}}
         />
         <br />
         <br />
         <label htmlFor="job">Job</label>
         <br />
         <input
           className="input"
           type="text"
           id="job"
           name="job"
           defaultValue="John" value={job} onChange={(e)=>{setJob(e.target.value)}}
         />
         <br />
         </div>
         <button onClick={handleSubmit}>Save </button>

        </Modal>
   </div>
  )
}

// class ModalUserEditProfileInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gender: "",
//       sexOrientation: "",
//       firstname: null,
//       lastname: null,
//       bio: "",
//       birthdate: null,
//       interests: [],
//       geo_lat: null,
//       geo_long: null,
//       username: "",
//       isTwoNamesInputValid: true,
//       isBioInputValid: true
//     };
//     this.handleFirstnameData = this.handleFirstnameData.bind(this);
//     this.handleLastnameData = this.handleLastnameData.bind(this);
//     this.handleBioData = this.handleBioData.bind(this);
//     this.handleBirthdateData = this.handleBirthdateData.bind(this);
//     this.isTwoNamesInputValid = this.isTwoNamesInputValid.bind(this);
//     this.isBioInputValid = this.isBioInputValid.bind(this);
//     this.resetMyDetails = this.resetMyDetails.bind(this);
//     this._isMounted = false;
//   }

//   componentDidMount() {
//     this._isMounted = true;
//     this._isMounted &&
//       this.setState({
//         gender: this.props.userConnectedData.gender,
//         sexOrientation: this.props.userConnectedData.sexual_orientation,
//         firstname: this.props.userConnectedData.firstname,
//         lastname: this.props.userConnectedData.lastname,
//         bio:
//           this.props.userConnectedData.bio === null
//             ? ""
//             : this.props.userConnectedData.bio,
//         birthdate:
//           this.props.userConnectedData.birthdate !== null
//             ? moment(new Date(this.props.userConnectedData.birthdate)).format(
//                 "MMM DD, YYYY"
//               )
//             : null,
//         geo_lat: this.props.userConnectedData.geo_lat,
//         geo_long: this.props.userConnectedData.geo_long,
//         username: this.props.userConnectedData.username
//       });
//   }

//   handleFirstnameData(data) {
//     this._isMounted &&
//       this.setState({
//         firstname: data
//       });
//   }

//   handleLastnameData(data) {
//     this._isMounted &&
//       this.setState({
//         lastname: data
//       });
//   }

//   handleBioData(data) {
//     this._isMounted &&
//       this.setState({
//         bio: data
//       });
//   }

//   handleBirthdateData(data) {
//     this._isMounted &&
//       this.setState({
//         birthdate: data
//       });
//   }

//   isTwoNamesInputValid(data) {
//     this._isMounted &&
//       this.setState({
//         isTwoNamesInputValid: data
//       });
//   }

//   isBioInputValid(data) {
//     this._isMounted &&
//       this.setState({
//         isBioInputValid: data
//       });
//   }

//   resetMyDetails() {
//     this._isMounted &&
//       this.setState({
//         firstname: this.props.userConnectedData.firstname,
//         lastname: this.props.userConnectedData.lastname,
//         bio: this.props.userConnectedData.bio,
//         birthdate:
//           this.props.userConnectedData.birthdate === null
//             ? null
//             : moment(new Date(this.props.userConnectedData.birthdate)).format(
//                 "MMM DD, YYYY"
//               )
//       });
//   }

//   handleSubmitMyDetails = async e => {
//     e.preventDefault();
//     this.props.updateUserData(
//       this.props.userConnectedData.id,
//       this.props.userConnectedData.username,
//       {
//         firstname: this.state.firstname,
//         lastname: this.state.lastname,
//         bio: this.state.bio === "" ? null : this.state.bio,
//         birthdate:
//           this.state.birthdate === null ||
//           this.state.birthdate === "" ||
//           !moment(new Date(this.state.birthdate)).isValid()
//             ? null
//             : moment(new Date(this.state.birthdate))
//                 .format()
//                 .substr(0, 10)
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Modal
//           id="edit-profile-modal"
//           className="modals"
//           header="Edit your profile info"
//           fixedFooter
//           trigger={false}
//         >
//           <p className="modal-intro">
//             You can edit and save the information that will be visibile on your
//             profile
//           </p>
//           <span className="profile-fields-labels">Gender</span>
//           {this.state.gender !== "" && <SelectGender />}
//           <span className="profile-fields-labels">Sexual Orientation</span>
//           {this.state.sexOrientation !== "" && <SelectSexOrientation />}
//           <span className="profile-fields-labels">My details</span>
//           <div className="modal-input">
//             {this.state.firstname !== null && this.state.lastname !== null && (
//               <InputTwoNames
//                 firstnameToParent={this.handleFirstnameData}
//                 lastnameToParent={this.handleLastnameData}
//                 firstname={this.state.firstname}
//                 lastname={this.state.lastname}
//                 validInput={this.isTwoNamesInputValid}
//               />
//             )}
//             <InputBio
//               bioToParent={this.handleBioData}
//               bio={this.state.bio}
//               validInput={this.isBioInputValid}
//             />
//             <BirthdatePicker
//               birthdateToParent={this.handleBirthdateData}
//               birthdate={this.state.birthdate}
//             />
//             {(this.state.firstname !== this.props.userConnectedData.firstname ||
//               this.state.lastname !== this.props.userConnectedData.lastname ||
//               (this.state.bio !== this.props.userConnectedData.bio &&
//                 this.state.bio !== "") ||
//               (moment(new Date(this.state.birthdate)).format() !==
//                 moment(
//                   new Date(this.props.userConnectedData.birthdate)
//                 ).format() &&
//                 this.state.birthdate !== "")) && (
//               <div className="modal-input-btns">
//                 <Button
//                   className="btn waves-effect waves-light multiple-btns"
//                   onClick={e => this.resetMyDetails()}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   className="btn waves-effect waves-light multiple-btns"
//                   onClick={this.handleSubmitMyDetails}
//                   disabled={
//                     !this.state.isTwoNamesInputValid ||
//                     !this.state.isBioInputValid ||
//                     (this.state.birthdate instanceof Date &&
//                       !isNaN(this.state.birthdate))
//                   }
//                 >
//                   Save
//                 </Button>
//               </div>
//             )}
//           </div>
//           <span className="profile-fields-labels">City</span>
//           <SelectLocation />
//           <span className="profile-fields-labels">Interested in</span>
//           <InterestTags />
//         </Modal>
//       </div>
//     );
//   }

//   componentWillUnmount() {
//     this._isMounted = false;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userConnectedData: state.user.data,
//     userConnectedStatus: state.user.status
//   };
// };

// export default connect(
//   mapStateToProps,
//   actionCreators
// )(ModalUserEditProfileInfo);



