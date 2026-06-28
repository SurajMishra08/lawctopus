import styles from "./Pricing.module.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaCertificate,
  FaInfinity,
  FaLaptop,
} from "react-icons/fa";

const features = [
  "Structured contract drafting curriculum",
  "Practical drafting assignments",
  "Real-world legal document examples",
  "Downloadable study resources",
  "Live doubt-solving sessions",
  "Certificate of Completion",
  "Access from any device",
  "Lifetime access to course updates",
];

function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Course Pricing</span>

          <h2>Start Learning Today</h2>

          <p>
            Invest in practical legal drafting skills that can support your
            academic, professional, and freelance career.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ribbon}>Best Value</div>

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className={styles.left}>
                <span className={styles.plan}>Professional Course</span>

                <h3>Master Contract Drafting</h3>

                <div className={styles.priceBox}>
                  <span className={styles.old}>₹9,999</span>

                  <h1>₹2,999</h1>

                  <small>One-time payment</small>
                </div>

                <a href="#cta" className={styles.button}>
                  Enroll Now
                  <FaArrowRight />
                </a>

                <div className={styles.badges}>
                  <div>
                    <FaShieldAlt />
                    Secure Payment
                  </div>

                  <div>
                    <FaCertificate />
                    Certificate
                  </div>

                  <div>
                    <FaInfinity />
                    Lifetime Access
                  </div>

                  <div>
                    <FaLaptop />
                    Learn Anywhere
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className={styles.right}>
                <h4>What's Included</h4>

                <div className="row">
                  {features.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className={styles.feature}>
                        <FaCheckCircle />

                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
