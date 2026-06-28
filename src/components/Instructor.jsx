import styles from "./Instructor.module.css";
import { motion } from "framer-motion";

import one from "../assets/one.webp";
import two from "../assets/two.webp";
import three from "../assets/three.webp";
import four from "../assets/four.webp";
import five from "../assets/five.webp";
import six from "../assets/six.webp";
import seven from "../assets/seven.webp";
import eight from "../assets/eight.webp";
import nine from "../assets/nine.webp";
import ten from "../assets/ten.webp";
import eleven from "../assets/eleven.webp";
import twelve from "../assets/twelve.webp";

import {
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaGavel,
} from "react-icons/fa";

const instructors = [
  {
    image: one,

    designation: "Shashank Sardesai",

    description:
      "Shashank Sardesai graduated from the University of Pune in 2018 and is currently working as an Independent Litigator and Company Secretary. He has co-founded EverTrust Legal, a full service law firm after having previously worked with esteemed law firms such as Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates.He also holds a Diploma in International Business Laws from Symbiosis Law School, Pune (2014) and Diploma in Cyber Laws from GLC, Mumbai (2017).",

    points: [
      "Practical contract drafting approach",
      "Commercial agreement expertise",
      "Career-focused legal learning",
    ],

    linkedin: "#",
  },

  {
    image: two,

    designation: "Akanksha Mishra",

    description:
      "Akanksha Mishra is an independent litigator with diverse experience in commercial and real estate litigation. She is practicing at the Bombay High Court, Nagpur Bench.Akanksha has also been the corporate counsel for many start-ups, media companies, software developer companies, and PSUs like BHEL, MyCaptain, Mastersoft ERP Solutions, etc., where she drafted and reviewed multiple contracts.Akanksha graduated from SLS, Pune, in 2018 and completed her LLM in Constitutional Law from Nagpur University in 2021, where she was awarded a gold medal.",

    points: [
      "Live practical sessions",
      "Drafting guidance",
      "Professional mentoring",
    ],

    linkedin: "#",
  },
  {
    image: three,

    designation: "Pranjal Doshi ",

    description:
      "Shashank Sardesai graduated from the University of Pune in 2018 and is currently working as an Independent Litigator and Company Secretary. He has co-founded EverTrust Legal, a full service law firm after having previously worked with esteemed law firms such as Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates.He also holds a Diploma in International Business Laws from Symbiosis Law School, Pune (2014) and Diploma in Cyber Laws from GLC, Mumbai (2017).",

    points: [
      "Practical contract drafting approach",
      "Commercial agreement expertise",
      "Career-focused legal learning",
    ],

    linkedin: "#",
  },

  {
    image: four,

    designation: "Arunima Jha",

    description:
      "Akanksha Mishra is an independent litigator with diverse experience in commercial and real estate litigation. She is practicing at the Bombay High Court, Nagpur Bench.Akanksha has also been the corporate counsel for many start-ups, media companies, software developer companies, and PSUs like BHEL, MyCaptain, Mastersoft ERP Solutions, etc., where she drafted and reviewed multiple contracts.Akanksha graduated from SLS, Pune, in 2018 and completed her LLM in Constitutional Law from Nagpur University in 2021, where she was awarded a gold medal.",

    points: [
      "Live practical sessions",
      "Drafting guidance",
      "Professional mentoring",
    ],

    linkedin: "#",
  },
];

function Instructor() {
  return (
    <section className={styles.instructor} id="instructor">
      <div className="container">
        <motion.div
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>Meet Your Instructors</span>

          <h2>Learn From Experienced Legal Professionals</h2>

          <p>
            Gain practical knowledge from professionals who understand contract
            drafting, negotiations and legal freelancing.
          </p>
        </motion.div>

        <div className="row g-5">
          {instructors.map((person, index) => (
            <div className="col-lg-6" key={index}>
              <motion.div
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,

                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className={styles.imageBox}>
                  <img src={person.image} alt={person.name} />

                  <div className={styles.badge}>
                    <FaGraduationCap />
                    Expert
                  </div>
                </div>

                <div className={styles.content}>
                  <span className={styles.role}>{person.role}</span>

                  <h3>{person.name}</h3>

                  <h4>{person.designation}</h4>

                  <p>{person.description}</p>

                  <ul>
                    {person.points.map((item, i) => (
                      <li key={i}>
                        <FaGavel />

                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.experience}>
                    <span>
                      <FaBriefcase />
                      Legal Expertise
                    </span>
                  </div>

                  <a
                    href={person.linkedin}
                    className={styles.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                    View LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;
