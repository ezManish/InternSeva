import React, { useState } from "react";
import "./editProfile.css";   // ✅ keep styles here

const InputField = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="edit-input-group">
    <label className="edit-label">{label}</label>
    <input
      className="edit-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const FileUpload = ({ label, onChange }) => (
  <div className="edit-input-group">
    <label className="edit-label">{label}</label>
    <input
      className="edit-file-input"
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={onChange}
    />
    <small className="edit-input-hint">Accepted formats: PDF, DOC, DOCX</small>
  </div>
);

const Chip = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`edit-chip ${selected ? "edit-chip--selected" : ""}`}
  >
    {label}
  </button>
);

export default function EditProfile() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    currentState: "",
    preferredStates: [],
    interests: [],
    mode: "In-office",
    resume: null,
  });

  const toggleChip = (field, value) => {
    setFormData((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((i) => i !== value)
          : [...prev[field], value],
      };
    });
  };

  return (
    <div className="edit-container">
      <div className="edit-form-card">
        {/* Progress Bar */}
        <div className="edit-progress">
          <div
            className="edit-progress-bar"
            style={{ width: step === 1 ? "50%" : "100%" }}
          ></div>
        </div>
        <div className="edit-progress-labels">
          <span className={step === 1 ? "edit-active" : ""}>
            Step 1: Confirm
          </span>
          <span className={step === 2 ? "edit-active" : ""}>
            Step 2: Interests
          </span>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <>
            <h2 className="edit-heading">Confirm your details</h2>
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <InputField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InputField
              label="Contact Number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <InputField
              label="Current State"
              value={formData.currentState}
              onChange={(e) =>
                setFormData({ ...formData, currentState: e.target.value })
              }
            />

            <p className="edit-subtitle">Gender</p>
            <div className="edit-chip-group">
              {["Male", "Female", "Other"].map((g) => (
                <Chip
                  key={g}
                  label={g}
                  selected={formData.gender === g}
                  onClick={() => setFormData({ ...formData, gender: g })}
                />
              ))}
            </div>

            <FileUpload
              label="Upload Resume"
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.files[0] })
              }
            />

            <div className="edit-btn-row">
              <button
                className="edit-btn edit-btn--primary"
                onClick={() => setStep(2)}
              >
                Confirm & Continue →
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h2 className="edit-heading">Areas of Interest</h2>
            <p className="edit-subtitle">Select your interests:</p>
            <div className="edit-chip-group">
              {[
                "Marketing",
                "HR",
                "Finance",
                "Content Writing",
                "Horticulture",
                "Backend",
                "AI Research",
                "Web Development",
                "Agriculture",
                "Farm management",
                "Sustainable farming",
                "Mobile App Development",
                "Dairy technology",
                "UI/UX Design",
                "Food Processing",
              ].map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  selected={formData.interests.includes(interest)}
                  onClick={() => toggleChip("interests", interest)}
                />
              ))}
            </div>

            <p className="edit-subtitle">Preferred States:</p>
            <div className="edit-chip-group">
              {[
                "Bangalore",
                "Hyderabad",
                "Mumbai",
                "Uttar Pradesh",
                "Haryana",
                "Punjab",
                "Kolkata",
                "Gujarat",
                "Rajasthan",
                "Delhi",
              ].map((state) => (
                <Chip
                  key={state}
                  label={state}
                  selected={formData.preferredStates.includes(state)}
                  onClick={() => toggleChip("preferredStates", state)}
                />
              ))}
            </div>

            <p className="edit-subtitle">Work mode:</p>
            <div className="edit-chip-group">
              {["In-office", "Work from home"].map((mode) => (
                <Chip
                  key={mode}
                  label={mode}
                  selected={formData.mode === mode}
                  onClick={() => setFormData({ ...formData, mode })}
                />
              ))}
            </div>

            <div className="edit-btn-row">
              <button
                className="edit-btn edit-btn--secondary"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <button
                className="edit-btn edit-btn--success"
                onClick={() => alert("Form Submitted ✅")}
              >
                Save & Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
