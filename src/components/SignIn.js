import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Field, reduxForm } from "redux-form";
import { postUserAction } from "../redux/actions";
import { Navigate } from "react-router-dom";

const renderField = (props) => {
   // console.log(props);
   const { input, meta, type, minLength } = props;
   return (
      <div className="field">
         <label>{input.name}</label>
         <input
            {...input}
            placeholder={input.name}
            type={type}
            required
            minLength={minLength}
         />
      </div>
   );
};

const SignIn = (props) => {
   // console.log(props);
   const { handleSubmit, reset, state } = props;

   const navigate = useNavigate();

   const formOnSubmit = (obj) => {
      state.reducers.users.every((user) => {
         if (user.Username === obj.Username && user.Password === obj.Password) {
            state.reducers.currentUser = user;
            // navigate(-1);
            // <Navigate to="/" />;
         }
         if (user.Username !== obj.Username) {
            alert("bunday username mavjud emas");
         }
      });
   };

   return (
      <div className="ui inverted segment container" style={{ width: "30%" }}>
         <form
            className="ui inverted form"
            onSubmit={handleSubmit(formOnSubmit)}
         >
            <Field name="Username" type="text" component={renderField} />

            <Field
               name="Password"
               type="password"
               minLength={8}
               component={renderField}
            />

            <button className="ui submit button">Sign In</button>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default reduxForm({ form: "Sign In" })(
   connect(mapStateToProps, mapDispatchToProps)(SignIn)
);
