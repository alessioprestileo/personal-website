import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main class="main">
        <Slot />
    </main>
  );
});
