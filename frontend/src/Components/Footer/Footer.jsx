import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Punchline */}
        <div className="footer-column">
          <div className="footer-brand">
            <h2 className="footer-punchline">InternSeva - Connecting Talent with Opportunity</h2>
            <p className="footer-description">
              We bridge the gap between talented students and companies looking for the next generation of professionals.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Internships by places */}
        <div className="footer-column">
          <h3>Internships by places</h3>
          <ul>
            <li><a href="#">Internship in India</a></li>
            <li><a href="#">Internship in Delhi</a></li>
            <li><a href="#">Internship in Bangalore</a></li>
            <li><a href="#">Internship in Hyderabad</a></li>
            <li><a href="#">Internship in Mumbai</a></li>
            <li><a href="#">Internship in Chennai</a></li>
            <li><a href="#">Internship in Gurgaon</a></li>
            <li><a href="#">Internship in Kolkata</a></li>
            <li><a href="#">Virtual internship</a></li>
            <li><a href="#" className="view-all">View all internships →</a></li>
          </ul>
        </div>

        {/* Internship by Stream */}
        <div className="footer-column">
          <h3>Internship by Stream</h3>
          <ul>
            <li><a href="#">Computer Science Internship</a></li>
            <li><a href="#">Electronics Internship</a></li>
            <li><a href="#">Mechanical Internship</a></li>
            <li><a href="#">Civil Internship</a></li>
            <li><a href="#">Marketing Internship</a></li>
            <li><a href="#">Chemical Internship</a></li>
            <li><a href="#">Finance Internship</a></li>
            <li><a href="#">Summer Research Fellowship</a></li>
            <li><a href="#">Campus Ambassador Program</a></li>
            <li><a href="#" className="view-all">View all internships →</a></li>
          </ul>
        </div>

        {/* Placement Guarantee Courses */}
        <div className="footer-column">
          <h3>Internship by Interest</h3>
          <ul>
            <li><a href="#">Full Stack Development Course</a></li>
            <li><a href="#">Data Science Course</a></li>
            <li><a href="#">UI/UX Design Course</a></li>
            <li><a href="#">Software Testing Course</a></li>
            <li><a href="#">Product Management Course</a></li>
            <li><a href="#">Human Resource Management Course</a></li>
            <li><a href="#">Digital Marketing Course</a></li>
            <li><a href="#">Financial Modelling Course</a></li>
            <li><a href="#">Supply Chain Logistics Course</a></li>
            <li><a href="#">Banking Sales Course</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <h3>Stay Updated with Internship Opportunities</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">About us</a>
          <a href="#">We're hiring</a>
          <a href="#">Hire interns</a>
          <a href="#">Post a Job</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
        </div>
        <p>© 2025 InternSeva (Scholiverse Educare Private Limited). All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;