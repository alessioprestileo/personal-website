import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <a class={styles.home} href="/" title="home">
        <img src="/Alessio_Prestileo_Resume.jpg" alt="profile-picture" />
        <span>Alessio Prestileo</span>
      </a>
      <div class={styles.menu}>
        <span class="material-symbols-outlined">menu</span>
      </div>
      <ul>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </header>
  );
});
