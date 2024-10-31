import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { isMobile } from "react-device-detect";

function Contact() {
  const [state, handleSubmit] = useForm("mzzbpnzd");
  if (state.succeeded) {
    return <p className="text-white">Thanks for joining!</p>;
  }

  return (
    <div className="text-white">
      <h1
        className={`${isMobile ? "text-4xl" : "text-8xl"} text-left font-bold`}
      >
        LET'S WORK <br />
        <span className="text-left text-secondaryHeadingText">TOGETHER</span>
      </h1>

      <form onSubmit={handleSubmit} className="mt-5">
        {/* Horizontal Layout for Name and Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-1 text-left">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full ${
                isMobile && "h-12"
              } p-2 rounded bg-secondaryHeadingText text-white`}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex-1">
            <label htmlFor="email" className="block mb-1 text-left">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              className={`w-full ${
                isMobile && "h-12"
              } p-2 rounded bg-secondaryHeadingText text-white`}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        {/* Vertical Layout for Platform and Message */}
        <div className="mt-4">
          <label htmlFor="platform" className="block mb-1 text-left">
            Platform
          </label>
          <select
            name="platform"
            id="platform"
            required
            className={`p-2 ${
              isMobile ? "h-12" : "h-10" // Increase height for mobile
            } w-full bg-secondaryHeadingText text-white rounded`}
          >
            <option value="" disabled selected>
              Select a Platform
            </option>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
          </select>

          <label htmlFor="message" className="block mb-1 text-left mt-4">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-2 rounded bg-secondaryHeadingText text-white"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-4 p-2 w-full bg-orange-600 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
