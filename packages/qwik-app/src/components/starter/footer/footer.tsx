import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '../../../routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class={styles.footer}>
      Made with ♡ by Alessio Prestileo
      <span class={styles.spacer}>|</span>
      <span class={styles.copyright}>©</span>
      <span>{serverTime.value.date}</span>
    </footer>
  );
});
