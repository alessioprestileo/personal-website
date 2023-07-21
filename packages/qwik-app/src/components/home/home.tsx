import { component$ } from '@builder.io/qwik';

import styles from './home.module.css';

export default component$(() => (
  <div class={styles.page}>
    <div class={styles.top}>
      <div class={styles.preTitle}>
        <img
          class={styles.profilePicture}
          src="/resume/Alessio_Prestileo_Resume.jpg"
          alt="profile-picture"
        />
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
        <a href="https://github.com/alessioprestileo">
          <img
            class={styles.findMePicture}
            src="/github-mark.svg"
            alt="profile-picture"
          />
        </a>
        <a href="https://stackoverflow.com/users/5846191/alessio-prestileo">
          <img
            class={styles.findMePicture}
            src="/240px-Stack_Overflow_icon.png"
            alt="profile-picture"
          />
        </a>
        <a href="https://www.linkedin.com/in/alessioprestileoalep/">
          <img
            class={styles.findMePicture}
            src="/In-Blue-96.png"
            alt="profile-picture"
          />
        </a>
      </div>
    </div>
  </div>
));
