import React, { useEffect, useState } from "react";
import CustomAlert from "../../../components/CustomAlert";
import CircularProgress from "@material-ui/core/CircularProgress";
import HttpClientDjango from "../../../utility/HttpClientDjango";

export default function SmsSpamClassification() {
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
      const response = await HttpClientDjango.post("spanclassifier/", data);

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
              SMS Spam Classifier
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              SMS Spam Classifier using NLP. Machine Learning Algorithm used
              Naive Bayes, Random Forest, SVM
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Code{" "}
              <a
                className="text-indigo-500"
                href="https://github.com/isubhamsr/NLP/tree/master/Projects/SMS%20Spam%20classifier"
              >
                GitHub
              </a>{" "}
              and{" "}
              <a
                className="text-indigo-500"
                href="https://www.codeingschool.com/2021/06/sms-spam-classifier-with-nlp-with-deployment-code.html"
              >
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
            For Example, Ham Message: Go until jurong point, crazy.. Available
            only in bugis n great world la e buffet... Cine there got amore
            wat...
          </p>
          <p class="lg:w-2/3 mx-auto mt-4 leading-relaxed text-base">
            Spam Message: Free entry in 2 a weekly comp to win FA Cup final
            21st May 2005. Text FA to 87121 to receive entry question(std txt
            rate)T&C's apply 08452810075over18's
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
