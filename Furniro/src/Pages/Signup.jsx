import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

const Signup = () => {
  let [user, setUser] = useState(false);

  const isLogin = localStorage.getItem("isLogin") === "true";
  const navigate = useNavigate();

  // ================= use for not to go signup without login

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin]);


  console.log("users", user);
  return (
    <div className="flex py-10 md:flex-row flex-col-reverse">
      <div className="sm:w-2/3 mx-auto  overflow-hidden md:block hidden">
        <img src="assets/images/HeroSectBackImg.png" alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-1/2 md:w-4/5 mx-auto">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            fname: "",
            lname: "",
            address: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            user = JSON.stringify(values);
            localStorage.setItem("user1", user);
            setUser(user)
            window.location.href = "/login";

          }}
        >
          <Form>
            <div className="w-96 mx-auto ">
              <p className="text-4xl font-semibold my-3">Create an account</p>
              <p className="text font-medium my-3">Enter your details below</p>
              <div className="grid gap-4 mt-10">

                <div className="columns">
                  <Field
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                  <ErrorMessage name="fname" />
                </div>{" "}
                <div className="columns">
                  <Field
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                  <ErrorMessage name="lname" />
                </div>{" "}
                <div className="columns">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email or Phone Number"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                  <ErrorMessage name="email" />
                </div>{" "}
                <div className="columns">
                  <Field
                    name="address"
                    as="textarea" placeholder="address"
                    rows="1"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                  <ErrorMessage name="address" />
                </div>{" "}
                <div className="columns">
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                  <ErrorMessage name="password" />
                </div>{" "}
              </div>
              <button className="font-bold text-center mt-5 w-full mx-auto bg-red-500 text-white p-3 rounded " type="submit">
                Create Account
              </button>
              <div className="text-center my-3">
                <span>Already have an account?</span>
                <Link to="/login" className="text-blue-500 hover:underline">
                  {" "}
                  login
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>

  );
};

export default Signup;
