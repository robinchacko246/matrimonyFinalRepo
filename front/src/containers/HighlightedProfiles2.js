import React, { useEffect, useState } from 'react'
import "../styles/App.css";

import "materialize-css/dist/css/materialize.min.css";


import Axios from "axios";








function Highlighted() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.post("/main/allProfiles", {

    })
      .then(res => {
     
        setUsers(res.data.list)


      })
      .catch(err => {
        console.log(err);
      });

  }, [])

  const calcDob = (birthDate) => {
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(birthDate).getTime();
    let difference = (currentTime - birthDateTime)
    var ageInYears = difference / (1000 * 60 * 60 * 24 * 365)
    return parseInt(ageInYears)
  }
  return (
    <div className="row">
      <div className="Highlighted">
        <h2>Highlighted <span>Profiles</span></h2>
        <div className="row1">

          <div className="posters">

            {
              // test
              users.map((x) => {

                // 
                return <div >
                
                  <img className="smallPoster" src={x.profile_picture_url} alt="" />
                  <div className="card-action">
                    <div className="profile-link">
                     
                      {x.firstname+" "+x.lastname}
                    </div>
                  </div>
                  {/* <span className="tooltip-text textSmall">
                      {x.last_connexion
                        ? moment(x.last_connexion).fromNow()
                        : "never seen online"}
                    </span> */}
                  <div className="user-card-birthdate">
                    <i className="material-icons prefix pink-icon">cake</i>{" "}
                    <span className="profile-text-icon">
                      {x.birthdate !== null ? (
                        calcDob(x.birthdate) 
                      ) : (
                        <span className="grey-message">No birthdate yet</span>
                      )}
                    </span>

                  </div>
                  <div className="user-card-location">
                <i className="material-icons prefix pink-icon">place</i>{" "}
                <span className="profile-text-icon">
                  {x.city !== null ? (
                    x.city
                  ) : (
                    <span className="grey-message">No location yet</span>
                  )}
                </span>
              </div>

                </div>

              })
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlighted
