import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import HttpClient from "../../utility/HttpClient";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await HttpClient.post("addcontact", data);

      console.log(response.message);

      if (response.error) {
        setError(true);
        setSuccess(false);
        setErrorMessage(response.message);
        setIsSubmit(false);

      } else {
          setMessage(response.message);
        setError(false);
        setSuccess(true);
        setName("")
        setEmail("")
        setMessage("")
        setIsSubmit(false);

      }
    } catch (error) {
      setError(true);
      setSuccess(false);
      setErrorMessage(error.message);
      setIsSubmit(false);

    }
  };

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <form class="flex flex-wrap -m-2" name="contact" data-netlify="true">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Let's Talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );

  // return (
  //   <section class="text-gray-600 body-font relative">
  //     <div class="container px-5 py-24 mx-auto">
  //       <div class="flex flex-col text-center w-full mb-12">
  //         <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
  //           Contact Us
  //         </h1>

  //         {error ? (
  //           <Alert
  //             className="lg:w-2/3 mx-auto leading-relaxed text-base"
  //             severity="error"
  //           >
  //             {errorMessage}
  //           </Alert>
  //         ) : null}
  //         {success ? (
  //           <Alert
  //             className="lg:w-2/3 mx-auto leading-relaxed text-base"
  //             severity="success"
  //           >
  //             Thank You for contact, We will reach soon
  //             {/* {message} */}
  //           </Alert>
  //         ) : null}
  //       </div>
  //       <div class="lg:w-1/2 md:w-2/3 mx-auto">
  //         <form class="flex flex-wrap -m-2">
  //           <div class="p-2 w-1/2">
  //             <div class="relative">
  //               <label for="name" class="leading-7 text-sm text-gray-600">
  //                 Name
  //               </label>
  //               <input
  //                 type="text"
  //                 id="name"
  //                 name="name"
  //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //                 required
  //                 value={name}
  //                 onChange={(e) => setName(e.target.value)}
  //               />
  //             </div>
  //           </div>
  //           <div class="p-2 w-1/2">
  //             <div class="relative">
  //               <label for="email" class="leading-7 text-sm text-gray-600">
  //                 Email
  //               </label>
  //               <input
  //                 type="email"
  //                 id="email"
  //                 name="email"
  //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  //                 required
  //                 value={email}
  //                 onChange={(e) => setEmail(e.target.value)}
  //               />
  //             </div>
  //           </div>
  //           <div class="p-2 w-full">
  //             <div class="relative">
  //               <label for="message" class="leading-7 text-sm text-gray-600">
  //                 Message
  //               </label>
  //               <textarea
  //                 id="message"
  //                 name="message"
  //                 class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-44 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
  //                 required
  //                 value={message}
  //                 onChange={(e) => setMessage(e.target.value)}
  //               ></textarea>
  //             </div>
  //           </div>
  //           <div class="p-2 w-full">
  //             <button
  //               onClick={onSubmit}
  //               class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  //             >
  //               {isSubmit ? (
  //                 <CircularProgress color="secondary" />
  //               ) : (
  //                 "Let's Talk"
  //               )}
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </section>
  // );
}
