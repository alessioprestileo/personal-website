import { component$ } from '@builder.io/qwik';

import styles from './Home.module.css';

export const Home = component$(() => (
  <div class={styles.page}>
    <div class={styles.top}>
      <div class={styles.preTitle}>
        <div class={styles.profilePicture}>
          <img
            // eslint-disable-next-line qwik/jsx-img
            src="/resume/Alessio_Prestileo_Resume.jpg"
            alt="profile-picture"
            width="90"
            height="80"
          />
        </div>
        <div>Alessio Prestileo</div>
      </div>
      <div class={styles.title}>Software Engineer</div>
    </div>
    <div class={styles.middle}>
      <a class={styles.button} href="/resume">
        My resume
      </a>
      <a class={styles.button} href="/projects">
        Projects
      </a>
      <a class={styles.button} href="/about-me">
        About me
      </a>
    </div>
    <div class={styles.bottom}>
      <div class={styles.bottomText}>
        <div>Email me at </div>
        <a href="mailto:alessioprestileo@gmail.com">
          alessioprestileo@gmail.com
        </a>
        <div> or find me here:</div>
      </div>
      <div class={styles.findMe}>
        <a href="https://github.com/alessioprestileo" target="_blank">
          <img
            class={styles.findMePicture}
            // eslint-disable-next-line qwik/jsx-img
            src="/github-mark.svg"
            alt="profile-picture"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://stackoverflow.com/users/5846191/alessio-prestileo"
          target="_blank"
        >
          <img
            class={styles.findMePicture}
            // eslint-disable-next-line qwik/jsx-img
            src="/240px-Stack_Overflow_icon.png"
            alt="profile-picture"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alessioprestileoalep/"
          target="_blank"
        >
          <img
            class={styles.findMePicture}
            // eslint-disable-next-line qwik/jsx-img
            src="/In-Blue-96.png"
            alt="profile-picture"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  </div>
));
