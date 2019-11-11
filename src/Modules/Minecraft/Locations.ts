// Lab/Lab#1/src/Modules/Minecraft/Locations.ts
import { MinecraftFolder } from '@xmcl/util';
import { config } from '../../Config';

export const minecraftFolder = new MinecraftFolder(
  `${config.dataPath}/minecraft`,
);
