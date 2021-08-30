import React, { Component } from "react";
import "../styles/App.css";

import "materialize-css/dist/css/materialize.min.css";
import AuthService from "../services/AuthService";

import Axios from "axios";

import ErrorToast from "../services/ErrorToastService";
import * as actionCreators from "../actions/user-actions";

import { connect } from "react-redux";


import UserCard from "../components/cards/UserCardForLoginPage";

import ModalMatchAnim from "../components/modals/ModalMatchAnim";
import ModalUserListFilter from "../components/modals/ModalUserListFilter";

import HeartBroken from "../assets/heart-broken.gif";
import HeartLoading from "../assets/heart-loading.gif";

class Highlighted extends Component
{
    constructor(props) {
        super(props);
        this.state = {
        //   login: "",
         // pwd: "",
          loginError: "",
          pwdError: "",
          loginValid: false,
          pwdValid: false,
          responseToPost: "",
          userID: "",
          defaultTab: [],
          userTab: [],
          defaultSorted: [],
          isLoading: false,
          tags: [],
          filterData: [],
          searchData: [],
          sortValue: "0",
          page: 12
        };
        this.Auth = new AuthService();
        this._isMounted = false;
      }
      // Redirect user if already logged in
  
      render() {

        return (
<div className="row">
<div className="Highlighted">
  <h2>Highlighted <span>Profiles</span></h2>


  {/* <div> */}

  {console.log(this.state.userTab)}

  {this.state.isLoading ? (

    <this.userList
      value={this.state.userTab.slice(0, this.state.page)}
    />
  ) : (
    <div className="userlist-loading">
      <img
        className="userlist-loading-img"
        src={HeartLoading}
        alt="Loading anim"
      />
      <div className="userlist-loading-text">Loading...</div>
    </div>
  )}



  <ModalUserListFilter filterDataToParent={this.handleFilterData} />
  <ModalMatchAnim />
  {/* </div> */}
</div>
</div>

)
  }
  componentDidMount = async () => {
    await Axios.post("/main/allProfiles", {

    })
      .then(res => {


        console.log(res);

        this.setState({
          userTab: res.data.list,
          defaultTab: res.data.list,
          defaultSorted: res.data.list,
          isLoading: false
        });
        this.setState({ isLoading: true });
      })
      .catch(err => {
        console.log(err);
      });

    this._isMounted = true;

    if (this.Auth.loggedIn()) {
      ErrorToast.auth.userAlreadyLogged();
      this.props.history.replace("/");
    }
  }
  userList = props => { //test
    console.log(props);
    const value = props.value;
    if (props.value.length !== 0) {
      const users = value.map((e, index) => (

        <UserCard
          intel={e}
          uid={this.state.userID}
          func={this.sendNotif}
          key={index}
          pictures={
            false
          }
        />
      ));
      return <ul>{users}</ul>;
    } else {
      return (
        <div className="userlist-no-result">
          <img
            className="userlist-no-result-img"
            src={HeartBroken}
            alt="No result anim"
          />
          <div className="userlist-no-result-text">No result</div>
        </div>
      );
    }
  };
}


const mapStateToProps = state => {
    return {
      userConnectedData: state.user.data,
      userConnectedStatus: state.user.status
    };
  };
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(Highlighted);
  