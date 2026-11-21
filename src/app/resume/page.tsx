import Layout from "../../components/layout";
import styles from "../../../styles/resume.module.css";

export const metadata = {
  title: "Resume",
};

function Entry({ title, dates, org, children }: any) {
  return (
    <>
      <h3 className={styles.entry}>
        {title} {dates && <span className={styles.dates}>({dates})</span>}
      </h3>
      <p className={styles.org}>{org}</p>
      <ul>{children}</ul>
    </>
  );
}

export default function Resume() {
  return (
    <Layout>
      <h1 className="visually-hidden">Resume</h1>
      <p>
        <a href="/LandonCreel_Resume_Web.pdf">Download as PDF</a>
      </p>

      <h2 className={styles.section}>Education</h2>
      <p className={styles.plain}>
        <b>Texas A&amp;M University</b> (May 2021)
      </p>
      <p className={styles.plain}>
        B.S. in Computer Science, Minor in Earth Sciences
      </p>
      <p className={styles.plain}>GPR: 3.686</p>

      <h2 className={styles.section}>Skills</h2>
      <p className={styles.plain}>
        Programming Languages: Java, JavaScript/TypeScript, C/C++, Python, C#,
        SQL
      </p>
      <p className={styles.plain}>
        Other Skills: Spring Boot, Angular, GraphQL, React, Git, Communication
      </p>

      <h2 className={styles.section}>Experience</h2>
      <Entry
        title="Software Engineer II"
        dates="August 2021 – October 2025"
        org="Dell Technologies"
      >
        <li>
          Worked as part of an Agile team to build and maintain scalable API
          microservices handling 930 million requests per week using Java,
          Spring Boot, and Oracle
        </li>
        <li>
          Reduced microservice aggregation response time by a factor of 10
          through the creation of a GraphQL client application
        </li>
        <li>
          Built and maintained accessible and user-friendly web portals using
          TypeScript/Angular and Java/Spring Boot to facilitate onboarding to
          RESTful API microservices
        </li>
        <li>
          Reduced major and critical security vulnerabilities from over 50 to 0
          by upgrading an Angular 12 application to Angular 15
        </li>
      </Entry>
      <Entry
        title="Java Full-Stack Developer Certification"
        dates="January 2022 – October 2022"
        org="Simplilearn Industry Bootcamp"
      >
        <li>
          Participated in a 6-month bootcamp of instructor-led courses, guided
          and solo practice, and independent readings to further develop
          competencies with full-stack development tech
        </li>
        <li>
          Used React.js, Spring Boot, and MySQL to develop a full-stack
          e-commerce application as part of a solo capstone project
        </li>
      </Entry>
      <Entry
        title="Software Engineering Intern"
        dates="June 2020 – August 2020"
        org="BP p.l.c."
      >
        <li>
          Worked in a team of six to develop a full-stack online recruitment
          platform using Flask, MongoDB, and Microsoft Azure for virtualization
        </li>
        <li>
          Wrote Python scripts to parse uploaded resumes, managed Azure virtual
          machine deployments and security, created MongoDB schemas for backend
        </li>
      </Entry>
      <Entry
        title="Computer Science Teaching Assistant"
        dates="January 2021 – May 2021"
        org="Texas A&M Computer Science Department"
      >
        <li>
          Taught C++ in the context of computer systems (memory,
          synchronization, etc.)
        </li>
        <li>
          Held office hours to assist students with labs and assignments related
          to Computer Architecture, Computer Systems, and Programming Studio
        </li>
      </Entry>

      <h2 className={styles.section}>Projects</h2>
      <Entry
        title="ColorClimb"
        dates="Spring 2021"
        org="Computer Vision Indoor Climbing Assistant"
      >
        <li>
          Implemented Python code utilizing OpenCV libraries to identify
          handhold paths based on color to assist colorblind people with path
          selection in indoor rock climbing
        </li>
        <li>
          Collaborated with three other developers to develop an iOS app for
          usage
        </li>
      </Entry>
      <Entry
        title="TAMU Hack"
        dates="January 2019"
        org="Facial Recognition Classroom Attendance Solution"
      >
        <li>
          Implemented facial recognition using Azure Cognitive Services to
          identify students
        </li>
      </Entry>
      <Entry
        title="CodeRed Hackathon"
        dates="November 2018"
        org="Endless Side-Scrolling Platformer Game"
      >
        <li>
          Implemented procedural terrain generation to enable an endless
          side-scrolling game
        </li>
        <li>
          Implemented sprite tiling and created UI themes to create visually
          appealing graphics
        </li>
      </Entry>
    </Layout>
  );
}
