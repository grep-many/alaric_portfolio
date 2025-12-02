import React from "react";
import emailjs from "@emailjs/browser";
import { name as recieverName, email as recieverEmail } from "~/config";
import { publicId, serviceId, templateId } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = React.useRef({
    name: "",
    email: "",
    message: "",
    typingTimeoutRef: null,
  });
  const formTag = React.useRef(null);
  const foxRef = React.useRef(null);
  const submitRef = React.useRef(null);

  const handleBlur = () => foxRef?.current.setAnimation("idle");

  const handleFocus = () => foxRef?.current.setAnimation("walk");

  const handleChange = ({ target: { name, value } }) => {
    if (
      formRef.current[name] !== value &&
      foxRef.current.animation !== "walk.left"
    )
      foxRef.current.setAnimation("walk.left");
    formRef.current[name] = value;
    if (formRef.current.typingTimeoutRef)
      clearTimeout(formRef.current.typingTimeoutRef);
    formRef.current.typingTimeoutRef = setTimeout(() => {
      foxRef.current.setAnimation("walk");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formTag?.current ||
      !formRef?.current?.name ||
      !formRef?.current?.email ||
      !formRef?.current?.message ||
      !submitRef?.current
    )
      return;

    submitRef.current.disabled = true;
    foxRef.current.setAnimation("hit");
    const { name, email, message } = formRef.current;

    let dots = 0;
    const dotInterval = setInterval(
      () => (submitRef.current.innerText = "sending" + ".".repeat(++dots % 4)),
      400,
    );

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          to_name: recieverName,
          from_email: email,
          to_email: recieverEmail,
          message,
        },
        publicId,
      )
      .then(() => {
        submitRef.current.style.background =
          "linear-gradient(to right, #00ff99, #009933)";
        submitRef.current.innerText = "Sent!";
        formTag.current.reset();
        Object.assign(formRef.current, { name: "", email: "", message: "" });
      })
      .catch(() => {
        submitRef.current.style.background =
          "linear-gradient(to right, #ff5f6d, #ff0000)";
        submitRef.current.innerText = "Failed!";
      })
      .finally(() => {
        clearInterval(dotInterval);
        setTimeout(() => {
          foxRef.current.setAnimation("idle");
          submitRef.current.style.background = "";
          submitRef.current.disabled = false;
          submitRef.current.innerText = "Send Message";
        }, 2000);
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col-reverse max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formTag}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              placeholder="John Doe"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="jhon@gmail.com"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              id="message"
              className="input resize-none"
              placeholder="Let me know how can i help you!"
              required
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </label>
          <button
            ref={submitRef}
            type="submit"
            className="btn disabled:opacity-60 disabled:cursor-wait"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <React.Suspense fallback={<Loader />}>
            <Fox
              ref={foxRef}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </React.Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
