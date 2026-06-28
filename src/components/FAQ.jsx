import styles from "./FAQ.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "Who is this course designed for?",
    answer:
      "This course is suitable for law students, fresh graduates, legal professionals, freelancers, and anyone who wants to improve practical contract drafting skills.",
  },
  {
    question: "Do I need prior drafting experience?",
    answer:
      "No. The course starts with the fundamentals and gradually moves towards advanced drafting techniques using practical examples.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes. A Certificate of Completion is provided after successfully completing the course requirements.",
  },
  {
    question: "How long will I have access to the course?",
    answer:
      "You will receive lifetime access to the course content along with future updates whenever new learning material is added.",
  },
  {
    question: "Can I access the course on mobile devices?",
    answer:
      "Yes. The course is fully accessible on desktop, laptop, tablet, and mobile devices.",
  },
  {
    question: "Will there be practical assignments?",
    answer:
      "Yes. The program includes drafting exercises, sample contracts, and practical assignments to strengthen your understanding.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Frequently Asked Questions</span>

          <h2>Have Questions? We've Got Answers.</h2>

          <p>Everything you need to know before joining the course.</p>
        </motion.div>

        <div className={styles.wrapper}>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <button className={styles.question} onClick={() => toggle(index)}>
                {item.question}

                <FaChevronDown
                  className={`${styles.icon} ${
                    active === index ? styles.rotate : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <p>{item.answer}</p>
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

export default FAQ;
