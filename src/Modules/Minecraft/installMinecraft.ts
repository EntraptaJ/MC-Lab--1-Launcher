// Lab/Lab#1/src/Modules/Minecraft/installMinecraft.ts
import { Installer } from '@xmcl/installer';
import { minecraftFolder } from './Locations';
import { loadState } from '../State';
import { saveState } from '../State/saveState';
import { config } from '../../Config';

export async function installMinecraft(
  mcVersion: Installer.VersionMeta,
): Promise<void> {
  const state = await loadState();

  const newVersion = await Installer.install(
    'client',
    mcVersion,
    minecraftFolder,
  );

  state.minecraftVersion = config.mcVersion;
  state.installed.minecraft = newVersion.id;
  return saveState(state);
}
