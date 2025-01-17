import React, { useState } from "react";
import MainBreadCrumb from "../components/MainBreadCrumb";
import { MdLocationPin } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { MdWatchLater } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import HighQuality from "../components/HighQuality";


const Contact = () => {


  const handleSubmit = (values) => {
    console.log(values);

    document.getElementById("contact-form").reset();
    alert("Form submitted successfully!");
  }

  return (
    <div className="">
      <MainBreadCrumb path={"Contact"} />
      <section className="text-center my-3  ">
        <p className="text-3xl font-semibold">Get In Touch With Us</p>
        <p className="my-3 text-sm text-gray-400">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. <br /> Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </section>
      <section className="container-md">
        <div className="grid md:grid-cols-3 gap-4 my-10 ">
          <div className="col-span-1 p-5">
            <div className="flex  text-start my-3">
              <MdLocationPin size={40} />
              <div className="px-2 ">
                <p>Address</p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex  text-start my-3">
              <ImPhone size={25} />
              <div className="px-2 ">
                <p>Phone</p>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex  text-start my-3">
              <MdWatchLater size={25} />
              <div className="px-2 ">
                <p>Working Time</p>
                <p>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: ""
              }}
              onSubmit={(values) => {
                handleSubmit(values);

              }}
            >

              <Form className="grid gap-4 text-left" id="contact-form" >
                <label htmlFor="name">Your name</label>
                < Field
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="p-2 border border-gray-300 rounded-md text-gray-500 outline-none"
                />
                <label htmlFor="email">Email address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="p-2 border border-gray-300 rounded-md text-gray-500 outline-none"
                />
                <label htmlFor="subject">Subject</label>
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="p-2 border border-gray-300 rounded-md text-gray-500 outline-none"
                />
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="p-2 border border-gray-300 rounded-md text-gray-500 outline-none"
                />
                <button type="submit" className="bg-dark-furniro p-2 text-white">
                  Submit
                </button>
              </Form>

            </Formik>


          </div>
        </div>
      </section >
      <HighQuality />
    </div >
  );
};

export default Contact;
