// Lab/Lab#1/src/Modules/Minecraft/checkMinecraft.ts
import { Installer } from '@xmcl/installer';
import { config } from '../../Config';
import { loadState } from '../State';
import { installMinecraft } from './installMinecraft';

export async function checkMinecraftVersion(): Promise<
  Installer.VersionMeta | undefined
> {
  const [list, state] = await Promise.all([
    Installer.updateVersionMeta(),
    loadState(),
  ]);
  if (!list) throw new Error('INVALID MC Metadata');
  if (!state) throw new Error('INVALID STATE');

  const latestVersion = list.versions.find(({ id }) =>
    id.includes(config.mcVersion),
  );
  if (!latestVersion) throw new Error('INVALID MC VERSION');

  if (
    latestVersion.id > (state.installed.minecraft || '') ||
    config.mcVersion !== state.minecraftVersion
  )
    return latestVersion;
}

export async function checkMinecraft(): Promise<void> {
  const latestMC = await checkMinecraftVersion();
  if (latestMC) await installMinecraft(latestMC);
}
