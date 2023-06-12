import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>HELLO by Alessio</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Alessio Prestileo',
  meta: [
    {
      name: 'description',
      content: "Alessio Prestileo's personal website",
    },
  ],
};
