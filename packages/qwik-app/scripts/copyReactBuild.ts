import { cpSync } from 'fs';
import { resolve } from 'path';

cpSync(resolve('../react-app-frontend/build'), resolve('public/react-dist'), {
  recursive: true,
});
