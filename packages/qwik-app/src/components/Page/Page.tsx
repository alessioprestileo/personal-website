import { Slot, component$ } from '@builder.io/qwik';

import { PageHeader } from './PageHeader/PageHeader';
import styles from './page.module.css';

export const Page = component$(() => (
  <div class={styles.page}>
    <PageHeader />
    <Slot />
  </div>
));
