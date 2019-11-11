// Lab/Lab#1/src/index.ts
import { login } from './Modules/Auth';
import { checkForge } from './Modules/Forge';
import { config } from './Config';
import { checkMinecraft, launchGame } from './Modules/Minecraft';
import { getJava } from './Modules/Java';

async function startLab1(): Promise<void> {
  console.log('Starting Lab #1');

  console.log('Logging to minecraft');

  await login();

  console.log('Downloading Java');
  const javaPath = await getJava();

  console.log('Installing Minecraft');
  await checkMinecraft();

  console.log('Maybe installing forge');
  if (config.settings.forge) await checkForge();

  console.log(javaPath);

  await launchGame(javaPath);
}

startLab1();
