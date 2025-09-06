import React, { useState, useEffect } from "react";
import "./ProfileSection.css";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [profileData, setProfileData] = useState({
    personal: {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 9876543210",
      location: "Mumbai, India",
      bio: "Computer Science student passionate about web development and AI. Currently looking for internship opportunities in frontend development.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedin: "rahul-sharma-linked",
      github: "rahulsharma-git"
    },
    education: {
      university: "Indian Institute of Technology",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      graduationYear: "2024",
      gpa: "3.8"
    },
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 70 }
    ],
    experience: [
      {
        id: 1,
        company: "Tech Solutions Inc.",
        role: "Frontend Developer Intern",
        duration: "May 2023 - July 2023",
        description: "Developed responsive web applications using React and Redux. Collaborated with UX designers to implement user-friendly interfaces."
      },
      {
        id: 2,
        company: "Startup Innovations",
        role: "Web Development Intern",
        duration: "June 2022 - August 2022",
        description: "Created RESTful APIs and implemented user authentication systems. Worked on database design and optimization."
      }
    ],
    preferences: {
      jobTypes: ["Internship", "Part-time"],
      locations: ["Mumbai", "Bangalore", "Remote"],
      categories: ["Software Development", "Web Development", "AI/ML"]
    }
  });

  const [editData, setEditData] = useState({...profileData});

  useEffect(() => {
    // In a real app, you would fetch profile data from an API
    console.log("Profile data loaded");
  }, []);

  const handleSave = () => {
    setProfileData({...editData});
    setIsEditing(false);
    // In a real app, you would save data to an API here
  };

  const handleCancel = () => {
    setEditData({...profileData});
    setIsEditing(false);
  };

  const handleInputChange = (section, field, value) => {
    setEditData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...editData.skills];
    newSkills[index] = {
      ...newSkills[index],
      [field]: field === 'level' ? parseInt(value) : value
    };
    
    setEditData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addNewSkill = () => {
    setEditData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: "", level: 50 }]
    }));
  };

  const removeSkill = (index) => {
    const newSkills = [...editData.skills];
    newSkills.splice(index, 1);
    
    setEditData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addNewExperience = () => {
    setEditData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Math.max(...prev.experience.map(e => e.id), 0) + 1,
          company: "",
          role: "",
          duration: "",
          description: ""
        }
      ]
    }));
  };

  const removeExperience = (index) => {
    const newExp = [...editData.experience];
    newExp.splice(index, 1);
    
    setEditData(prev => ({
      ...prev,
      experience: newExp
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const newExp = [...editData.experience];
    newExp[index] = {
      ...newExp[index],
      [field]: value
    };
    
    setEditData(prev => ({
      ...prev,
      experience: newExp
    }));
  };

  return (
    <div className="enhanced-profile">
      <div className="profile-header">
        <div className="header-content">
          <h1>My Profile</h1>
          <p>Manage your professional information and preferences</p>
        </div>
        <div className="header-actions">
          {isEditing ? (
            <>
              <button className="btn btn-outline" onClick={handleCancel}>
                <i className="fas fa-times"></i> Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                <i className="fas fa-check"></i> Save Changes
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              <i className="fas fa-edit"></i> Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="profile-avatar">
                <img src={profileData.personal.avatar} alt="Profile" />
                {isEditing && (
                  <button className="avatar-edit-btn">
                    <i className="fas fa-camera"></i>
                  </button>
                )}
              </div>
              <div className="online-status"></div>
            </div>
            <h2>{profileData.personal.name}</h2>
            <p className="profile-title">Computer Science Student</p>
            <p className="profile-location">
              <i className="fas fa-map-marker-alt"></i> {profileData.personal.location}
            </p>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
            <div className="profile-stats">
              <div className="stat">
                <div className="stat-value">12</div>
                <div className="stat-label">Applications</div>
              </div>
              <div className="stat">
                <div className="stat-value">3</div>
                <div className="stat-label">Interviews</div>
              </div>
              <div className="stat">
                <div className="stat-value">2</div>
                <div className="stat-label">Offers</div>
              </div>
            </div>
          </div>

          <div className="profile-menu">
            <button 
              className={`menu-item ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              <i className="fas fa-user"></i>
              <span>Personal Info</span>
            </button>
            <button 
              className={`menu-item ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Education</span>
            </button>
            <button 
              className={`menu-item ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              <i className="fas fa-code"></i>
              <span>Skills</span>
            </button>
            <button 
              className={`menu-item ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <i className="fas fa-briefcase"></i>
              <span>Experience</span>
            </button>
            <button 
              className={`menu-item ${activeTab === "preferences" ? "active" : ""}`}
              onClick={() => setActiveTab("preferences")}
            >
              <i className="fas fa-cog"></i>
              <span>Preferences</span>
            </button>
          </div>
        </div>

        <div className="profile-main">
          <div className="main-content">
            {activeTab === "personal" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Personal Information</h2>
                  <p>Update your personal details and contact information</p>
                </div>
                {isEditing ? (
                  <div className="edit-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          value={editData.personal.name}
                          onChange={(e) => handleInputChange("personal", "name", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input 
                          type="email" 
                          value={editData.personal.email}
                          onChange={(e) => handleInputChange("personal", "email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone</label>
                        <input 
                          type="text" 
                          value={editData.personal.phone}
                          onChange={(e) => handleInputChange("personal", "phone", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Location</label>
                        <input 
                          type="text" 
                          value={editData.personal.location}
                          onChange={(e) => handleInputChange("personal", "location", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea 
                        value={editData.personal.bio}
                        onChange={(e) => handleInputChange("personal", "bio", e.target.value)}
                        rows="4"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>LinkedIn</label>
                        <input 
                          type="text" 
                          value={editData.personal.linkedin}
                          onChange={(e) => handleInputChange("personal", "linkedin", e.target.value)}
                          placeholder="username"
                        />
                      </div>
                      <div className="form-group">
                        <label>GitHub</label>
                        <input 
                          type="text" 
                          value={editData.personal.github}
                          onChange={(e) => handleInputChange("personal", "github", e.target.value)}
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="view-mode">
                    <div className="info-grid">
                      <div className="info-item">
                        <label>Name</label>
                        <p>{profileData.personal.name}</p>
                      </div>
                      <div className="info-item">
                        <label>Email</label>
                        <p>{profileData.personal.email}</p>
                      </div>
                      <div className="info-item">
                        <label>Phone</label>
                        <p>{profileData.personal.phone}</p>
                      </div>
                      <div className="info-item">
                        <label>Location</label>
                        <p>{profileData.personal.location}</p>
                      </div>
                      <div className="info-item full-width">
                        <label>Bio</label>
                        <p>{profileData.personal.bio}</p>
                      </div>
                      <div className="info-item">
                        <label>LinkedIn</label>
                        <p>linkedin.com/in/{profileData.personal.linkedin}</p>
                      </div>
                      <div className="info-item">
                        <label>GitHub</label>
                        <p>github.com/{profileData.personal.github}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "education" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Education</h2>
                  <p>Your academic background and qualifications</p>
                </div>
                {isEditing ? (
                  <div className="edit-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>University</label>
                        <input 
                          type="text" 
                          value={editData.education.university}
                          onChange={(e) => handleInputChange("education", "university", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Degree</label>
                        <input 
                          type="text" 
                          value={editData.education.degree}
                          onChange={(e) => handleInputChange("education", "degree", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Field of Study</label>
                        <input 
                          type="text" 
                          value={editData.education.field}
                          onChange={(e) => handleInputChange("education", "field", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Graduation Year</label>
                        <input 
                          type="text" 
                          value={editData.education.graduationYear}
                          onChange={(e) => handleInputChange("education", "graduationYear", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>GPA</label>
                      <input 
                        type="text" 
                        value={editData.education.gpa}
                        onChange={(e) => handleInputChange("education", "gpa", e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="view-mode">
                    <div className="education-card">
                      <div className="edu-icon">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div className="edu-details">
                        <h3>{profileData.education.university}</h3>
                        <p className="edu-degree">{profileData.education.degree} in {profileData.education.field}</p>
                        <p className="edu-year">Graduating {profileData.education.graduationYear} • GPA: {profileData.education.gpa}/4.0</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Skills</h2>
                  <p>Showcase your technical and professional skills</p>
                </div>
                {isEditing ? (
                  <div className="edit-form">
                    {editData.skills.map((skill, index) => (
                      <div key={index} className="skill-edit-item">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Skill Name</label>
                            <input 
                              type="text" 
                              value={skill.name}
                              onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label>Proficiency ({skill.level}%)</label>
                            <input 
                              type="range" 
                              min="0" 
                              max="100" 
                              value={skill.level}
                              onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                            />
                          </div>
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeSkill(index)}
                        >
                          <i className="fas fa-trash"></i> Remove
                        </button>
                      </div>
                    ))}
                    <button 
                      className="btn btn-outline"
                      onClick={addNewSkill}
                    >
                      <i className="fas fa-plus"></i> Add Skill
                    </button>
                  </div>
                ) : (
                  <div className="view-mode">
                    <div className="skills-container">
                      {profileData.skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percent">{skill.level}%</span>
                          </div>
                          <div className="skill-progress">
                            <div 
                              className="skill-progress-bar" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "experience" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Work Experience</h2>
                  <p>Your professional experience and internships</p>
                </div>
                {isEditing ? (
                  <div className="edit-form">
                    {editData.experience.map((exp, index) => (
                      <div key={exp.id} className="experience-edit-item">
                        <div className="form-row">
                          <div className="form-group">
                            <label>Company</label>
                            <input 
                              type="text" 
                              value={exp.company}
                              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label>Role</label>
                            <input 
                              type="text" 
                              value={exp.role}
                              onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Duration</label>
                          <input 
                            type="text" 
                            value={exp.duration}
                            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                            placeholder="e.g. May 2023 - July 2023"
                          />
                        </div>
                        <div className="form-group">
                          <label>Description</label>
                          <textarea 
                            value={exp.description}
                            onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                            rows="3"
                          />
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeExperience(index)}
                        >
                          <i className="fas fa-trash"></i> Remove Experience
                        </button>
                      </div>
                    ))}
                    <button 
                      className="btn btn-outline"
                      onClick={addNewExperience}
                    >
                      <i className="fas fa-plus"></i> Add Experience
                    </button>
                  </div>
                ) : (
                  <div className="view-mode">
                    <div className="experience-container">
                      {profileData.experience.map(exp => (
                        <div key={exp.id} className="experience-item">
                          <div className="exp-icon">
                            <i className="fas fa-briefcase"></i>
                          </div>
                          <div className="exp-details">
                            <h3>{exp.role}</h3>
                            <h4>{exp.company} • {exp.duration}</h4>
                            <p>{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="tab-content">
                <div className="tab-header">
                  <h2>Job Preferences</h2>
                  <p>Set your preferences for internship opportunities</p>
                </div>
                {isEditing ? (
                  <div className="edit-form">
                    <div className="form-group">
                      <label>Job Types</label>
                      <div className="checkbox-group">
                        {["Internship", "Part-time", "Full-time", "Contract"].map(type => (
                          <label key={type} className="checkbox-label">
                            <input 
                              type="checkbox" 
                              checked={editData.preferences.jobTypes.includes(type)}
                              onChange={(e) => {
                                const newJobTypes = e.target.checked
                                  ? [...editData.preferences.jobTypes, type]
                                  : editData.preferences.jobTypes.filter(t => t !== type);
                                setEditData(prev => ({
                                  ...prev,
                                  preferences: {
                                    ...prev.preferences,
                                    jobTypes: newJobTypes
                                  }
                                }));
                              }}
                            />
                            <span className="checkmark"></span>
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Preferred Locations</label>
                      <div className="checkbox-group">
                        {["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai", "Pune", "Remote"].map(location => (
                          <label key={location} className="checkbox-label">
                            <input 
                              type="checkbox" 
                              checked={editData.preferences.locations.includes(location)}
                              onChange={(e) => {
                                const newLocations = e.target.checked
                                  ? [...editData.preferences.locations, location]
                                  : editData.preferences.locations.filter(l => l !== location);
                                setEditData(prev => ({
                                  ...prev,
                                  preferences: {
                                    ...prev.preferences,
                                    locations: newLocations
                                  }
                                }));
                              }}
                            />
                            <span className="checkmark"></span>
                            {location}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Job Categories</label>
                      <div className="checkbox-group">
                        {["Software Development", "Web Development", "AI/ML", "Data Science", "UX/UI Design", "Marketing", "Finance"].map(category => (
                          <label key={category} className="checkbox-label">
                            <input 
                              type="checkbox" 
                              checked={editData.preferences.categories.includes(category)}
                              onChange={(e) => {
                                const newCategories = e.target.checked
                                  ? [...editData.preferences.categories, category]
                                  : editData.preferences.categories.filter(c => c !== category);
                                setEditData(prev => ({
                                  ...prev,
                                  preferences: {
                                    ...prev.preferences,
                                    categories: newCategories
                                  }
                                }));
                              }}
                            />
                            <span className="checkmark"></span>
                            {category}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="view-mode">
                    <div className="preferences-grid">
                      <div className="preference-category">
                        <h3>Job Types</h3>
                        <div className="preferences-list">
                          {profileData.preferences.jobTypes.map(type => (
                            <span key={type} className="preference-tag">{type}</span>
                          ))}
                        </div>
                      </div>
                      <div className="preference-category">
                        <h3>Preferred Locations</h3>
                        <div className="preferences-list">
                          {profileData.preferences.locations.map(location => (
                            <span key={location} className="preference-tag">{location}</span>
                          ))}
                        </div>
                      </div>
                      <div className="preference-category">
                        <h3>Job Categories</h3>
                        <div className="preferences-list">
                          {profileData.preferences.categories.map(category => (
                            <span key={category} className="preference-tag">{category}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;