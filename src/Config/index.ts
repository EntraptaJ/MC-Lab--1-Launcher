// Lab/Lab#1/src/Config/index.ts
import dotenv from 'dotenv';
dotenv.config();

/**
 * Lab #1 Launcher Configuration
 */
interface Config {
  /**
   * Path to persistent data volume
   */
  dataPath: string;

  /**
   * The minecraft version to download & launch
   */
  mcVersion: string;

  settings: {
    /**
     * wether or not to download & launch forge.
     */
    forge: boolean;
  };

  /**
   * Minecraft Authentication
   */
  mcAuth: {
    username: string;
    password: string;
  };

  /**
   * Unused currently but intend to store some data eventually
   */
  mcData: {};
}

export const config: Config = {
  dataPath: process.env.DATA_PATH || 'data',
  mcVersion: process.env.MC_VERSION || '1.12.2',
  settings: {
    forge: (process.env.FORGE || 'true') === 'true',
  },
  mcAuth: {
    username: process.env.MC_USERNAME!,
    password: process.env.MC_PASSWORD!,
  },
  mcData: {},
};
