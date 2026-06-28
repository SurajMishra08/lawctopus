import styles from "./Highlights.module.css";
import { motion } from "framer-motion";

import {
  FaCalendarAlt,
  FaVideo,
  FaFileContract,
  FaTasks,
  FaUserTie,
  FaBriefcase,
  FaBookOpen,
  FaInfinity,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCalendarAlt />,
    title: "6-Month Learning Journey",
    desc: "Master contract drafting through a structured learning roadmap covering drafting fundamentals, negotiations, commercial agreements and freelancing.",
  },
  {
    icon: <FaVideo />,
    title: "54 Live Interactive Sessions",
    desc: "Attend live classes led by experienced professionals with regular doubt-solving, networking and mentoring sessions.",
  },
  {
    icon: <FaFileContract />,
    title: "24+ High-Demand Agreements",
    desc: "Draft essential agreements including NDAs, Shareholders Agreements, Power of Attorney, Website Policies, IP and Commercial Contracts.",
  },
  {
    icon: <FaTasks />,
    title: "17 Practical Assignments",
    desc: "Complete drafting, CV-building and freelancing assignments with personalized feedback to build confidence and a professional portfolio.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Faculty & Mentoring",
    desc: "Learn from industry experts through practical drafting exercises, live demonstrations and personalized guidance.",
  },
  {
    icon: <FaBriefcase />,
    title: "Freelancing Accelerator",
    desc: "Learn Upwork, LinkedIn, Fiverr, networking, client acquisition and proposal writing to start earning through contract drafting.",
  },
  {
    icon: <FaBookOpen />,
    title: "800+ Pages of Resources",
    desc: "Access comprehensive reading material, drafting templates, practical resources and reference documents throughout the course.",
  },
  {
    icon: <FaInfinity />,
    title: "Lifetime Access",
    desc: "Revisit recorded lectures, study material, drafting resources and course updates anytime after enrolment.",
  },
];

function CourseHighlights() {
  return (
    <section className={styles.highlights} id="highlights">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>Course Highlights</span>

          <h2>
            Everything You Need to Become an Expert Contract Drafting
            Professional
          </h2>

          <p>
            Learn practical contract drafting through live training, real-world
            assignments, expert mentoring, freelancing guidance and
            comprehensive learning resources designed for long-term career
            growth.
          </p>

          <div className={styles.quickInfo}>
            <span>6 Months</span>
            <span>54 Live Sessions</span>
            <span>24+ Agreements</span>
            <span>17 Assignments</span>
            <span>800+ Pages</span>
          </div>
        </motion.div>

        <div className="row g-4">
          {highlights.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
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

export default CourseHighlights;
