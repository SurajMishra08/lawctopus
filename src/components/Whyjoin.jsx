import styles from "./WhyJoin.module.css";
import { motion } from "framer-motion";

import {
  FaFileContract,
  FaUserTie,
  FaBriefcase,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

import { MdOutlineAllInclusive } from "react-icons/md";

const features = [
  {
    icon: <FaFileContract />,
    title: "Draft 24+ Practical Contracts",
    desc: "Learn to draft a wide range of commercial agreements through practical exercises and live demonstrations.",
  },
  {
    icon: <FaUserTie />,
    title: "Personalized Feedback",
    desc: "Receive detailed feedback on your drafting assignments from experienced legal professionals.",
  },
  {
    icon: <FaBriefcase />,
    title: "Freelancing Guidance",
    desc: "Understand how to build your profile, attract clients, and start earning through legal freelancing.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate of Completion",
    desc: "Receive a course completion certificate after successfully completing the program requirements.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Portfolio Building",
    desc: "Build a strong drafting portfolio using practical assignments and real-world contracts.",
  },
  {
    icon: <MdOutlineAllInclusive />,
    title: "Lifetime Access",
    desc: "Access recordings and learning resources anytime, even after the course is completed.",
  },
];

function WhyJoin() {
  return (
    <section className={styles.whyJoin}>
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Why Choose This Course</span>

          <h2>
            Learn Practical Skills That Help You Draft Better & Freelance
            Confidently
          </h2>

          <p>
            Designed to help law students, young lawyers, and professionals gain
            practical drafting expertise through live sessions, assignments,
            expert feedback, and freelancing guidance.
          </p>
        </motion.div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.icon}>{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
