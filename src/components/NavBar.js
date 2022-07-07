import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
   return (
      <div
         className="nav"
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "1%",
            // marginRight: "3%",
         }}
      >
         <div
            className="nav__right"
            style={{
               display: "flex",
               alignItems: "center",
               width: "15%",
               justifyContent: "space-between",
            }}
         >
            <div className="sign-in ui inverted olive basic button">
               Sign In
            </div>

            <Link to="/signup">
               <div className="sign-up ui inverted violet basic button">
                  Sign Up
               </div>
            </Link>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
