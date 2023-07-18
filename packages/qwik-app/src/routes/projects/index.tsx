import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'center',
        }}
      >
        <div>COMING SOON...</div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Alessio Prestileo - Projects',
  meta: [
    {
      name: 'description',
      content: "Links to some of my projects",
    },
  ],
};
