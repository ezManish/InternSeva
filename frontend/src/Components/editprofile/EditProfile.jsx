import React, { useState, useEffect } from "react";
import "./editProfile.css";

const InputField = ({ label, type = "text", value, onChange, placeholder, autoComplete }) => (
  <div className="edit-input-group">
    <label className="edit-label">{label}</label>
    <input
      className="edit-input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
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

export default function EditProfile({ setShowProfile }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    gender: "",
    current_state: "",
    preferred_states: [],
    interests: [],
    work_mode: "In-office",
  });

  useEffect(() => {
    // Load profile data when component mounts
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      if (data.success && data.profile) {
        setFormData(prev => ({
          ...prev,
          ...data.profile
        }));
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const saveProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        alert('Profile saved successfully!');
        if (typeof setShowProfile === 'function') {
          setShowProfile(false);
        }
      } else {
        alert('Error saving profile: ' + data.message);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile');
    }
  };

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

        {step === 1 && (
          <>
            <h2 className="edit-heading">Confirm your details</h2>
            <InputField
              label="First Name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              autoComplete="given-name"
              placeholder="Enter your first name"
            />
            <InputField
              label="Last Name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              autoComplete="family-name"
              placeholder="Enter your last name"
            />
            <InputField
              label="Contact Number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              autoComplete="tel"
              placeholder="Enter your phone number"
            />
            <InputField
              label="Current State"
              value={formData.current_state}
              onChange={(e) =>
                setFormData({ ...formData, current_state: e.target.value })
              }
              autoComplete="address-level1"
              placeholder="Enter your current state"
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
                  selected={formData.preferred_states.includes(state)}
                  onClick={() => toggleChip("preferred_states", state)}
                />
              ))}
            </div>

            <p className="edit-subtitle">Work mode:</p>
            <div className="edit-chip-group">
              {["In-office", "Work from home"].map((mode) => (
                <Chip
                  key={mode}
                  label={mode}
                  selected={formData.work_mode === mode}
                  onClick={() => setFormData({ ...formData, work_mode: mode })}
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
                onClick={saveProfile}
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

EditProfile.defaultProps = {
  setShowProfile: () => console.warn('setShowProfile function not provided')
};