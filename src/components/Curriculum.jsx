import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBookOpen, FaCheckCircle } from "react-icons/fa";
import styles from "./Curriculum.module.css";

const modules = [
  {
    id: 1,
    title: "Module 1",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 1-2",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
      "Paste Topic 5",
    ],
  },

  {
    id: 2,
    title: "Module 2",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 3-4",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
    ],
  },

  {
    id: 3,
    title: "Module 3",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 5-8",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
      "Paste Topic 5",
    ],
  },

  {
    id: 4,
    title: "Module 4",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 9-12",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
    ],
  },

  {
    id: 5,
    title: "Module 5",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 13-18",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
      "Paste Topic 5",
    ],
  },

  {
    id: 6,
    title: "Module 6",
    subtitle: "Paste Official Module Title Here",
    duration: "Week 19-24",
    topics: [
      "Paste Topic 1",
      "Paste Topic 2",
      "Paste Topic 3",
      "Paste Topic 4",
      "Paste Topic 5",
    ],
  },
];

function Curriculum() {
  const [active, setActive] = useState(0);

  const toggleAccordion = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className={styles.curriculum} id="curriculum">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Course Curriculum</span>

          <h2>
            A Structured Learning Journey Designed For Practical Contract
            Drafting
          </h2>

          <p>
            Build strong drafting skills through a carefully designed curriculum
            covering essential concepts, practical agreements, live learning,
            assignments, and career-focused guidance.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <button
                className={styles.header}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.left}>
                  <div className={styles.icon}>
                    <FaBookOpen />
                  </div>

                  <div>
                    <span className={styles.module}>{module.title}</span>

                    <h3>{module.subtitle}</h3>

                    <small>{module.duration}</small>
                  </div>
                </div>

                <FaChevronDown
                  className={`${styles.arrow} ${
                    active === index ? styles.rotate : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    className={styles.body}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ul className={styles.topicList}>
                      {module.topics.map((topic, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.05,
                          }}
                        >
                          <FaCheckCircle className={styles.checkIcon} />

                          <span>{topic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
