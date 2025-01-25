import { component$ } from '@builder.io/qwik';

import { Page } from '../Page/Page';
import styles from './ComingSoon.module.css';

export const ComingSoon = component$(() => (
  <Page>
    <div class={styles.content}>COMING SOON...</div>
  </Page>
));
