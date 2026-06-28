import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlayCircle,
  FaCalendarAlt,
  FaLaptop,
  FaFileContract,
  FaUserTie,
  FaCertificate,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center">
          {/* ================= LEFT ================= */}

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}

              <div className={styles.badge}>
                <MdOutlineWorkspacePremium />
                Expert Level Program
              </div>

              {/* Heading */}

              <h1 className={styles.heading}>
                Master <span>Contract Drafting</span>
                <br />
                & Build a Successful
                <br />
                Freelancing Career
              </h1>

              {/* Description */}

              <p className={styles.description}>
                Learn to draft commercial agreements, work on 24+ practical
                contracts, receive personalised expert feedback, build your
                freelancing profile, and confidently start earning through
                practical, industry-focused legal training.
              </p>

              {/* Meta Cards */}

              <div className={styles.metaGrid}>
                <div className={styles.metaCard}>
                  <FaCalendarAlt />
                  <div>
                    <small>Live Batch</small>
                    <h6>1 July – 31 December</h6>
                  </div>
                </div>

                <div className={styles.metaCard}>
                  <BsClockHistory />
                  <div>
                    <small>Duration</small>
                    <h6>6 Months</h6>
                  </div>
                </div>

                <div className={styles.metaCard}>
                  <FaLaptop />
                  <div>
                    <small>Mode</small>
                    <h6>Live Online</h6>
                  </div>
                </div>
              </div>

              {/* Buttons */}

              <div className={styles.buttons}>
                <a href="#pricing" className={styles.primaryBtn}>
                  Enroll Now
                  <FaArrowRight />
                </a>

                <a href="#curriculum" className={styles.secondaryBtn}>
                  <FaPlayCircle />
                  View Curriculum
                </a>
              </div>

              {/* Trust */}

              <div className={styles.trust}>
                <div>
                  <FaUsers />
                  <span>500+ Students</span>
                </div>

                <div>
                  <FaStar />
                  <span>4.9 Rating</span>
                </div>

                <div>
                  <FaShieldAlt />
                  <span>100% Money Back</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="col-lg-6">
            <motion.div
              className={styles.right}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* What You'll Master */}

              <div className={styles.masterCard}>
                <h3>What You'll Master</h3>

                <div className={styles.featureGrid}>
                  <div className={styles.feature}>
                    <FaFileContract />
                    <div>
                      <h6>Commercial Contracts</h6>
                      <p>Draft & review agreements.</p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <FaFileContract />
                    <div>
                      <h6>24+ Practical Contracts</h6>
                      <p>Real drafting assignments.</p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <FaUserTie />
                    <div>
                      <h6>Expert Feedback</h6>
                      <p>Personalized mentorship.</p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <FaCertificate />
                    <div>
                      <h6>Certificate</h6>
                      <p>Industry recognised.</p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <FaShieldAlt />
                    <div>
                      <h6>Money Back</h6>
                      <p>100% satisfaction guarantee.</p>
                    </div>
                  </div>

                  <div className={styles.feature}>
                    <FaCheckCircle />
                    <div>
                      <h6>Freelancing Ready</h6>
                      <p>Build your legal career.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}

              <div className={styles.bottomCards}>
                <div className={styles.priceCard}>
                  <small>Course Fee</small>

                  <h2>₹24,999</h2>

                  <del>₹60,000</del>

                  <span>58% OFF</span>
                </div>

                <div className={styles.guaranteeCard}>
                  <FaShieldAlt />

                  <h5>Money Back Guarantee</h5>

                  <p>
                    Complete the course sincerely. If it doesn't add value to
                    your career, claim a full refund.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
