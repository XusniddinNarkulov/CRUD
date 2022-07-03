import React from "react";
import { connect } from "react-redux";

export const Title = (props) => {
   return (
      <div className="header_title">
         <span className="input_title">Your to do list</span>
         <button type="button" className="edit_title_button">
            <i className="fa fa-pencil" aria-hidden="true"></i>
         </button>
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Title);
