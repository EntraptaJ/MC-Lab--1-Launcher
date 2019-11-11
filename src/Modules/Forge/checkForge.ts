// Lab/Lab#1/src/Modules/Forge/checkForge.ts
import { ForgeWebPage } from '@xmcl/forge-installer';
import { loadState } from '../State';
import { config } from '../../Config';
import { installForge } from './installForge';

export async function checkForgeVersions(): Promise<
  ForgeWebPage.Version | undefined
> {
  const state = await loadState();

  console.log(`Checking forge versions for ${config.mcVersion}`);
  const page = await ForgeWebPage.getWebPage({
    mcversion: state.installed.minecraft,
  });
  if (!page) throw new Error('FORGE WEB ERROR');

  const latestVersion = page.versions[0];
  if (latestVersion.version > (state.installed.forge || ''))
    return latestVersion;
}

export async function checkForge(): Promise<void> {
  const newVersion = await checkForgeVersions();
  if (newVersion) await installForge(newVersion);
}
