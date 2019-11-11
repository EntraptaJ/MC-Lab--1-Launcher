// Lab/Lab#1/src/Modules/Forge/installForge.ts
import { ForgeInstaller, ForgeWebPage } from '@xmcl/forge-installer';
import { minecraftFolder } from '../Minecraft';
import { loadState } from '../State';
import { saveState } from '../State/saveState';
import { javaFolder } from '../Java/JavaFolder';
import { JavaExecutor } from '@xmcl/util';
import { resolve } from 'path';
import { getJavaBinary } from '../Java/getBinary';

export async function installForge(
  forgeVersion: ForgeWebPage.Version,
): Promise<void> {
  const state = await loadState();

  const forgeInstall = await ForgeInstaller.install(
    forgeVersion,
    minecraftFolder,
    {
      java: JavaExecutor.createSimple(resolve(await getJavaBinary())),
    },
  );
  state.installed.forge = forgeVersion.version;
  state.installed.forgeProfile = forgeInstall;

  return saveState(state);
}
