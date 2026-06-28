import styles from "./Testimonial.module.css";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
  FaUserGraduate,
  FaBriefcase,
  FaBalanceScale,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Final Year Law Student",
    icon: <FaUserGraduate />,
    review:
      "This course completely changed the way I approach legal drafting. The practical exercises and examples made complex concepts much easier to understand.",
  },
  {
    name: "Priya Verma",
    role: "Independent Legal Freelancer",
    icon: <FaBriefcase />,
    review:
      "The drafting techniques and contract analysis sessions gave me the confidence to take freelance legal projects. The learning experience was practical and well structured.",
  },
  {
    name: "Rahul Mehta",
    role: "Junior Associate",
    icon: <FaBalanceScale />,
    review:
      "A highly practical course with real-world examples. I now prepare contracts more confidently and understand the importance of every clause.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Testimonials</span>

          <h2>What Our Learners Say</h2>

          <p>
            Professionals and students have strengthened their drafting skills
            through practical learning and real legal examples.
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
              >
                <FaQuoteLeft className={styles.quote} />

                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className={styles.review}>"{item.review}"</p>

                <div className={styles.profile}>
                  <div className={styles.avatar}>{item.icon}</div>

                  <div>
                    <h4>{item.name}</h4>

                    <span>{item.role}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="row text-center">
            <div className="col-md-3 col-6">
              <div className={styles.statCard}>
                <h3>500+</h3>
                <p>Students Trained</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className={styles.statCard}>
                <h3>4.9★</h3>
                <p>Average Rating</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className={styles.statCard}>
                <h3>50+</h3>
                <p>Practice Exercises</p>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className={styles.statCard}>
                <h3>100%</h3>
                <p>Online Access</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
