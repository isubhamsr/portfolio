import React, { useEffect, useState } from "react";
import CustomAlert from "../../../components/CustomAlert";
import CircularProgress from "@material-ui/core/CircularProgress";
import HttpClientDjango from "../../../utility/HttpClientDjango";

export default function NLPTextBox({
  route,
  name,
  description,
  githubLink,
  link,
  zero,
  one,
  zeroMessage,
  oneMessage,
  right,
  wrong,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async () => {
    setIsSubmit(true);
    try {
      const data = {
        text: message,
      };

      const response = await HttpClientDjango.post(`${route}/`, data);

      if (response.error === "true") {
        setError(true);
        setSuccess(false);
        setIsSubmit(false);
        setResponseMessage(response.message);
      } else {
        setError(false);
        setSuccess(true);
        setIsSubmit(false);
        setResponseMessage(response.message);
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
      setIsSubmit(false);
      setResponseMessage(error.message);
    }
  };

  return (
    <React.Fragment>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {name}
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              {description}
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Code{" "}
              <a className="text-indigo-500" href={githubLink}>
                GitHub
              </a>{" "}
              and{" "}
              <a className="text-indigo-500" href={link}>
                Read in Details about this project
              </a>
            </p>
            <h4 class="lg:w-2/3 mx-auto mt-4 font-medium title-font text-gray-900">
              Test your model with new text.
            </h4>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2"></div>
              {error ? <CustomAlert message={responseMessage} /> : null}
              {success ? (
                <CustomAlert type="success" message={responseMessage} />
              ) : null}

              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  {isSubmit ? <CircularProgress color="secondary" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
          <p class="lg:w-2/3 mx-auto mt-8 leading-relaxed text-base">
            For Example, <b>{zero}</b>: {zeroMessage} <b>{right}</b>
          </p>
          <p class="lg:w-2/3 mx-auto mt-4 leading-relaxed text-base">
            <b>{one}</b>: {oneMessage} <b>{wrong}</b>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
