import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Home from '../components/home/home';

export default component$(() => <Home />);

export const head: DocumentHead = {
  title: 'Alessio Prestileo - Home',
  meta: [
    {
      name: 'description',
      content: "Alessio Prestileo's personal website",
    },
  ],
};
