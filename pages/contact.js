import { useState } from "react";
import NextHead from "@/components/Head";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/.netlify/functions/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      alert("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong.");
    }
  };

  const inputStyles =
    "appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 rounded-lg leading-tight outline-gray-300 focus:outline focus:shadow-outline";

  return (
    <>
      <NextHead
        title="Contact"
        description="Contact Aastha Karki about Junkerri Art commissions and general information."
      />

      <div className="py-12 px-6">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className={inputStyles}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={inputStyles}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className={inputStyles}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-600 hover:bg-rose-500 text-white transition font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
