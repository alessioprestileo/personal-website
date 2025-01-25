import { component$ } from '@builder.io/qwik';

import styles from './PageHeader.module.css';

export const PageHeader = component$(() => (
  <header id="header" class={styles.header}>
    <a id="home" class={styles.home} href="/">
      <i class="fas fa-chevron-left"></i> HOME
    </a>
  </header>
));
