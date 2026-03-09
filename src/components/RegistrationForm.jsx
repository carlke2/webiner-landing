import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAttendee } from "../services/registrationApi";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  role: "",
};

export default function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await registerAttendee(formData);

      navigate("/thank-you", {
        state: { attendee: formData },
      });
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="card formCard">
      <div className="cardInner">
        <div className="cardTitle">Reserve Your Spot</div>

        <form onSubmit={handleSubmit}>
          <div className="grid">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              name="organisation"
              type="text"
              placeholder="Organisation"
              value={formData.organisation}
              onChange={handleChange}
              required
            />

            <input
              name="role"
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit" disabled={submitting}>
            {submitting ? "Registering..." : "Register"}
          </button>

          <div className="fine">
            After registering, you’ll receive a confirmation email with event details and Teams
            access.
          </div>

          {error ? <div className="formError">{error}</div> : null}
        </form>
      </div>
    </div>
  );
}