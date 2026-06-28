import styles from "./CTA.module.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCertificate,
  FaInfinity,
  FaLaptop,
} from "react-icons/fa";

function CTA() {
  return (
    <section className={styles.cta} id="cta">
      <div className="container">
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.tag}>Limited Time Enrollment</span>

          <h2>Become Confident in Practical Contract Drafting</h2>

          <p>
            Build practical legal drafting skills through structured lessons,
            real-world examples, downloadable resources, and guided exercises.
            Start learning today and strengthen your professional profile.
          </p>

          <div className={styles.buttons}>
            <a href="#pricing" className={styles.primaryBtn}>
              Enroll Now
              <FaArrowRight />
            </a>

            <a href="#curriculum" className={styles.secondaryBtn}>
              View Curriculum
            </a>
          </div>

          <div className={styles.features}>
            <div>
              <FaCheckCircle />
              Practical Learning
            </div>

            <div>
              <FaCertificate />
              Completion Certificate
            </div>

            <div>
              <FaInfinity />
              Lifetime Access
            </div>

            <div>
              <FaLaptop />
              Learn Anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
