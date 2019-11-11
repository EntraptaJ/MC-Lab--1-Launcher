// Lab/Lab#1/src/Modules/Minecraft/launchGame.ts
import { Launcher } from '@xmcl/launch';
import { resolve } from 'path';
import { loadState } from '../State';
import { minecraftFolder } from './Locations';

export async function launchGame(javaPath: string): Promise<void> {
  const state = await loadState();
  if (!state.installed.minecraft || !state.session)
    throw new Error('INSTALL ERROR');

  await Launcher.launch({
    auth: state.session,
    version: state.installed.minecraft,
    gamePath: minecraftFolder.getPath(),
    javaPath: resolve(javaPath),
  });
}
