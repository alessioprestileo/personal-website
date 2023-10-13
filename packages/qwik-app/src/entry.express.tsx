/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the express server when building for production.
 *
 * Learn more about the cloudflare integration here:
 * - https://qwik.builder.io/deployments/node/
 *
 */
import {
  createQwikCity,
  type PlatformNode,
} from '@builder.io/qwik-city/middleware/node';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';
import render from './entry.ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import compression from 'compression';
import axios, { AxiosError } from 'axios';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

dotenv.config();
// Allow for dynamic port
const PORT = process.env.PORT ?? 3000;

// Create the Qwik City express middleware
const { router, notFound } = createQwikCity({ render, qwikCityPlan, manifest });

// Create the express server
// https://expressjs.com/
const app = express();

// Enable gzip compression
app.use(compression());

app.use(cookieParser());

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), '..', '..', 'dist');
const buildDir = join(distDir, 'build');
const reactDistDir = join(
  fileURLToPath(import.meta.url),
  '..',
  '..',
  'public/react-dist'
);
const resumeDir = join(
  fileURLToPath(import.meta.url),
  '..',
  '..',
  'public/resume'
);

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: '1y' }));
app.use(express.static(distDir, { redirect: false }));
app.get('/react', (_req, res) => {
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, max-age=0'
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(join(reactDistDir, 'index.html'));
});
app.get('/react/*', (_req, res) => {
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, max-age=0'
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(join(reactDistDir, 'index.html'));
});
app.get('/resume', (_req, res) => {
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, max-age=0'
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(join(resumeDir, 'index.html'));
});
app.get(
  '/resume/Alessio_Prestileo-Senior_Frontend_Engineer_Resume.pdf',
  (_req, res) => {
    res.setHeader(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0'
    );
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(
      join(resumeDir, 'Alessio_Prestileo-Senior_Frontend_Engineer_Resume.pdf')
    );
  }
);
app.get(
  '/resume/Alessio_Prestileo_Resume.jpg',
  (_req, res) => {
    res.setHeader(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0'
    );
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(
      join(resumeDir, 'Alessio_Prestileo_Resume.jpg')
    );
  }
);
app.get(
  '/resume/scrollScript.js',
  (_req, res) => {
    res.setHeader(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0'
    );
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile(
      join(resumeDir, 'scrollScript.js')
    );
  }
);

// API routes
const {GITHUB_SEARCH_CLIENT_ID, GITHUB_SEARCH_CLIENT_SECRET} = process.env;
app.get('/api/github-search/callback', async (req, res) => {
  const sessionCode = req.query.code;

  try {
    const result = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: GITHUB_SEARCH_CLIENT_ID,
        client_secret: GITHUB_SEARCH_CLIENT_SECRET,
        code: sessionCode,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const accessToken = result.data.access_token;
    res.cookie('github_search_access_token', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.redirect('/projects/github-search?auth_status=login_successful');
  } catch (caught: unknown) {
    const error = caught as AxiosError;
    console.error(
      'Error fetching access token:',
      JSON.stringify(error.response?.data),
    );
    res.status(500).send('Failed to fetch access token from GitHub.');
  }
});
app.get('/api/github-search/search', async (req, res) => {
  const accessToken = req.cookies.github_search_access_token;

  if (!accessToken) {
    return res.redirect(`/projects/github-search/logout?auth_status=access_token_not_found`);
  }
});

app.get('/api', (_req, res) => {
  res.send({data: '🎉 Hello from api! 🎉'});
});

// Use Qwik City's page and endpoint request handler
app.use(router);

// Use Qwik City's 404 handler
app.use(notFound);

// Start the express server
app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server listening: http://localhost:${PORT}/`);
});
