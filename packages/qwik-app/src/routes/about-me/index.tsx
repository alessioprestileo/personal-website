import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { ComingSoon } from '../../components/ComingSoon/ComingSoon';

export default component$(() => <ComingSoon />);

export const head: DocumentHead = {
  title: 'Alessio Prestileo - About Me',
  meta: [
    {
      name: 'description',
      content: 'A brief introduction',
    },
  ],
};
