import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postUserAction } from "../redux/actions";

const renderField = (props) => {
   // console.log(props);
   const { input, meta, type } = props;
   return (
      <div className="field">
         <label>{input.name}</label>
         <input {...input} placeholder={input.name} type={type} required />
      </div>
   );
};

const SignUp = (props) => {
   console.log(props);
   const { handleSubmit, postUserAction, reset } = props;

   const formOnSubmit = (obj) => {
      postUserAction(obj);
      reset();
   };

   return (
      <div className="ui inverted segment container" style={{ width: "30%" }}>
         <form
            className="ui inverted form"
            onSubmit={handleSubmit(formOnSubmit)}
         >
            <Field name="Username" type="text" component={renderField} />

            <Field name="Password" type="password" component={renderField} />

            <button className="ui submit button">Sign Up</button>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { postUserAction };

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(reduxForm({ form: "SignUp" })(SignUp));
