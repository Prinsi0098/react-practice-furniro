import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  let data = localStorage.getItem("user1");
  data = JSON.parse(data);

  let [isLogin, setIsLogin] = useState(() => {
    let isLogin = localStorage.getItem("isLogin") === "true";
    return isLogin;
  });
  localStorage.setItem("isLogin", isLogin);

  const getData = () => {
    setIsLogin(true);
    return data;
  };

  // ================= use for not to go login without login
  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <div className="flex py-10 md:flex-row flex-col-reverse">
      <div className="sm:w-2/3 mx-auto  overflow-hidden md:block hidden">
        <img src="assets/images/HeroSectBackImg.png" alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-1/2 md:w-4/5 mx-auto">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            if (
              values.email === data.email &&
              values.password === data.password
            ) {
              let data1 = getData();
              // console.log("data1", data1);
            } else {
              alert("invalid email or password");
            }
          }}
        >
          <Form>
            <div className="sm:w-96 mx-auto">
              <p className="text-4xl font-semibold my-3">Log in to Exclusive</p>
              <p className="text font-medium my-3">Enter your details below</p>

              <div className="grid gap-4 mt-10">
                <div className="columns">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email or Phone Number"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                </div>{" "}
                <div className="columns">
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className="border-b border-gray-300 p-2 rounded focus:outline-none w-full"
                  />
                </div>{" "}
                <div className="columns"></div>
              </div>
              <div className="flex">
                <button
                  className="font-bold text-center my-3 w-1/2 mx-auto bg-red-500 text-white p-3 rounded "
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="text-center my-4">
                <span>Don't have an account?</span>
                <Link to="/signup" className="text-blue-500 hover:underline">
                  {" "}
                  Sign up
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
