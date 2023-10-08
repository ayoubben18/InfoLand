import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to our website! We are a group of computer science students
            from ENSA Fes, Morocco! We are a passionate and driven community of
            individuals with a shared love for all things technology and
            computer science.
            <br />
            <br /> Our mission is to foster a collaborative environment that
            encourages learning, innovation, and growth in the field of computer
            science.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Our vision is to empower individuals and businesses by leveraging
            the power of technology. We aim to foster a culture of innovation
            and growth within our community, inspiring others to explore the
            vast possibilities that computer science offers.
            <br />
            <br />
            -Creative illustrations
            <br />
            <br />
            -Dynamic websites
            <br />
            <br />
            -Fast and handy mobile apps
          </p>
          <Button className={styles.button} url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
