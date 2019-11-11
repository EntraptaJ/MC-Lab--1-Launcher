// Lab/Lab#1/src/Modules/Auth/index.ts
import { Auth } from '@xmcl/auth';
import { checkAndLoadSession } from './Session';
import { config } from '../../Config';
import { saveSession } from './Session/saveSession';

export async function login(): Promise<Auth> {
  console.log('Loading Session or Logging in');

  let session = await checkAndLoadSession();
  if (!session) session = await Auth.Yggdrasil.login(config.mcAuth);

  const valid = await Auth.Yggdrasil.validate(session);
  if (!valid) session = await Auth.Yggdrasil.refresh(session);

  await saveSession(session);

  return session;
}
