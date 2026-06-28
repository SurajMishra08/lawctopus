import styles from "./Trust.module.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  FaChalkboardTeacher,
  FaFileContract,
  FaCertificate,
} from "react-icons/fa";

import { MdVerified } from "react-icons/md";

function Trust() {
  const stats = [
    {
      icon: <FaChalkboardTeacher />,
      number: 54,
      suffix: "+",
      title: "Live Sessions",
    },
    {
      icon: <FaFileContract />,
      number: 24,
      suffix: "+",
      title: "Practical Contracts",
    },
    {
      icon: <FaCertificate />,
      number: 6,
      suffix: "",
      title: "Months of Learning",
    },
    {
      icon: <MdVerified />,
      number: 100,
      suffix: "%",
      title: "Money Back Guarantee",
    },
  ];

  return (
    <section className={styles.trustSection}>
      <div className="container">
        <motion.div
          className="row g-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <motion.div
                className={styles.card}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.icon}>{item.icon}</div>

                <h2>
                  {item.number}
                  {item.suffix}
                </h2>

                <p>{item.title}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Trust;
