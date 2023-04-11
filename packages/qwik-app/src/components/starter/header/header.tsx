import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.home}>
        <a href="/" title="home">
          <img src="/Alessio_Prestileo_Resume.jpg" alt="profile-picture" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/projects" target="_blank">
            Projects
          </a>
        </li>
        <li>
          <a href="/resume" target="_blank">
            Resume
          </a>
        </li>
        <li>
          <a href="/contacts" target="_blank">
            Contacts
          </a>
        </li>
      </ul>
    </header>
  );
});
