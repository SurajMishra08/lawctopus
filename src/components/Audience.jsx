import styles from "./Audience.module.css";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBalanceScale,
  FaLaptopCode,
  FaBriefcase,
  FaFileSignature,
  FaArrowRight,
} from "react-icons/fa";

const audience = [
  {
    icon: <FaUserGraduate />,
    title: "Law Students",
    description:
      "Build practical drafting skills early and strengthen your legal foundation before entering the profession.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Young Lawyers",
    description:
      "Improve your ability to draft professional legal documents and work confidently with real clients.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Freelancers",
    description:
      "Learn how to offer contract drafting services online and expand your professional opportunities.",
  },
  {
    icon: <FaBriefcase />,
    title: "Working Professionals",
    description:
      "Gain practical contract knowledge that supports business negotiations and commercial transactions.",
  },
];

function Audience() {
  return (
    <section className={styles.audience} id="audience">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Who Should Join?</span>

          <h2>Designed For Every Legal Professional</h2>

          <p>
            Whether you are beginning your legal journey or already working in
            the industry, this program focuses on practical drafting skills that
            can be applied immediately.
          </p>
        </motion.div>

        <div className="row g-4">
          {audience.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className={styles.icon}>{item.icon}</div>

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button>
                    Learn More
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.bottomCard}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <FaFileSignature className={styles.largeIcon} />
          </div>

          <div>
            <h3>Learn Practical Contract Drafting</h3>

            <p>
              Master modern drafting techniques, understand important clauses,
              reduce legal risks, and confidently prepare professional legal
              agreements for clients and businesses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Audience;
