import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import SmartLink from "./SmartLink.jsx";
import Icon from "./Icons.jsx";
import Ph from "./Ph.jsx";
import { contact } from "../data/portfolioData.js";
import { isFilled } from "../utils/helpers.js";

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Option A: a form service (Formspree etc.) is configured
    if (isFilled(contact.formEndpoint)) {
      setStatus({ type: "loading", text: "Sending your message..." });
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Request failed");
        setForm(EMPTY_FORM);
        setStatus({ type: "success", text: "Message sent. Thank you for reaching out." });
      } catch {
        setStatus({
          type: "error",
          text: "The message didn't send. Check your connection and try again, or email directly.",
        });
      }
      return;
    }

    // Option B: open the visitor's email app, pre-filled
    if (isFilled(contact.email)) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus({ type: "success", text: "Opening your email app to send the message." });
      return;
    }

    // Nothing configured yet
    setStatus({
      type: "error",
      text: "The form isn't set up yet. Add your email in src/data/portfolioData.js.",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          title="Contact"
          subtitle="Have a role, project or question in mind? Send me a message."
        />

        <div className="contact__grid">
          <div className="contact__info">
            <SmartLink
              href={isFilled(contact.email) ? `mailto:${contact.email}` : contact.email}
              external={false}
              className="contact-row contact-row--link"
            >
              <span className="icon-tile">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <small>Email</small>
                <strong>
                  <Ph>{contact.email}</Ph>
                </strong>
              </span>
            </SmartLink>

            <div className="contact-row">
              <span className="icon-tile">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <small>Location</small>
                <strong>
                  <Ph>{contact.location}</Ph>
                </strong>
              </span>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status.type === "loading"}
            >
              <Icon name="send" size={16} />
              Send message
            </button>

            <p
              className={`form__status form__status--${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
