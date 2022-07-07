import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Field, reduxForm } from "redux-form";
import { postUserAction } from "../redux/actions";

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

const SignUp = (props) => {
   console.log(props);
   const { handleSubmit, postUserAction, reset, state } = props;

   const navigate = useNavigate();

   const formOnSubmit = (obj) => {
      state.reducers.users.map((user) => {
         if (obj.Username !== user.Username) {
            postUserAction(obj);
            reset();
            navigate(-1);
         }
         if (obj.Username === user.Username) {
            alert("bunday Username mavjud");
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

            <button className="ui submit button">Sign Up</button>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = { postUserAction };

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(reduxForm({ form: "SignUp" })(SignUp));
