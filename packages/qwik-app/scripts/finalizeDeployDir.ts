import {
  copyFileSync,
  readFileSync,
  writeFileSync,
  cpSync,
  mkdirSync,
  rmSync,
} from 'fs';
import { resolve } from 'path';

const DEPLOY_COMMAND = 'gcloud app deploy --project alessiopweb';

const generatePackageJson = (): void => {
  const topPackageRawdata = readFileSync('../../package.json');
  const qwikAppPackageRawdata = readFileSync('package.json');
  const newPackage = JSON.parse(qwikAppPackageRawdata as unknown as string);
  const topPackage = JSON.parse(topPackageRawdata as unknown as string);

  const serveCommand = newPackage.scripts.serve;
  delete newPackage.scripts;
  delete newPackage.dependencies;
  delete newPackage.devDependencies;

  newPackage.scripts = {
    deploy: DEPLOY_COMMAND,
    start: serveCommand,
  };
  newPackage.dependencies = topPackage.dependencies;

  rmSync(resolve('deploy'), { recursive: true });
  mkdirSync(resolve('deploy'));
  writeFileSync(resolve('deploy/package.json'), JSON.stringify(newPackage), {});
};

console.log('Started generating deploy directory');
generatePackageJson();
copyFileSync('../../package-lock.json', 'deploy/package-lock.json');
copyFileSync('app.yaml', 'deploy/app.yaml');

console.log('  Started copying subdirs');
cpSync(resolve('dist'), resolve('deploy/dist'), {
  recursive: true,
});
cpSync(resolve('server'), resolve('deploy/server'), {
  recursive: true,
});
cpSync(resolve('public'), resolve('deploy/public'), {
  recursive: true,
});
console.log('  Finished copying subdirs');

console.log('Finished generating deploy directory');
