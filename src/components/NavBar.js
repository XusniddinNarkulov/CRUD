import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserAction } from "../redux/actions";

export const NavBar = (props) => {
   // console.log(props);
   const { currentUser } = props.state.reducers;

   const signOut = () => {
      props.deleteUserAction(currentUser.id);
   };

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
         {/* <div className="nav__right"> */}
         {currentUser ? (
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  width: "17%",
                  justifyContent: "space-between",
               }}
            >
               <div className="ui inverted purple basic button">
                  {currentUser.Username}
               </div>
               <div onClick={signOut} className="ui inverted red basic button">
                  Sign Out
               </div>
            </div>
         ) : (
            <>
               <Link to="/signin">
                  <div className="sign-in ui inverted olive basic button">
                     Sign In
                  </div>
               </Link>

               <Link to="/signup">
                  <div className="sign-up ui inverted violet basic button">
                     Sign Up
                  </div>
               </Link>
            </>
         )}
         {/* </div>   */}
      </div>
   );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = { deleteUserAction };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
