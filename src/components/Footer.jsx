import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-5">
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.logo}>
              LegalDraft<span>Pro</span>
            </h2>

            <p className={styles.about}>
              Practical legal education designed to help students,
              professionals, and freelancers build strong contract drafting
              skills with confidence.
            </p>

            <div className={styles.social}>
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-2 col-md-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>

            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>

              <li>
                <a href="#curriculum">Curriculum</a>
              </li>

              <li>
                <a href="#pricing">Pricing</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Course Includes</h4>

            <ul>
              <li>Practical Drafting</li>

              <li>Assignments</li>

              <li>Certificate</li>

              <li>Lifetime Access</li>
            </ul>
          </motion.div>

          <motion.div
            className="col-lg-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Contact</h4>

            <div className={styles.contact}>
              <p>
                <FaEnvelope />
                support@example.com
              </p>

              <p>
                <FaPhoneAlt />
                +91 98765 43210
              </p>

              <p>
                <FaMapMarkerAlt />
                New Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        <hr />

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} LegalDraftPro. All Rights Reserved.
          </p>

          <div>
            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
