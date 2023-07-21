import { component$ } from '@builder.io/qwik';

import styles from './comingSoon.module.css';

export default component$(() => (
  <div class={styles.page}>
    <div id="home" class={styles.home}>
        <a href="/"><i class="fas fa-chevron-left"></i> HOME</a>
    </div>
    <div class={styles.content}>COMING SOON...</div>
  </div>
));
