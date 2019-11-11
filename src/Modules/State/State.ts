// Lab/Lab#1/src/Modules/State/State.ts
import { Auth } from '@xmcl/auth';
import { config } from '../../Config';

/**
 * Path of the state.json file
 * @default `${config.dataPath}/state.json`
 */
export const STATE_PATH = `${config.dataPath}/state.json`;

/**
 * Installed items & their versions
 */
export interface InstalledState {
  /**
   * Downloaded version of Forge
   */
  forge: string | undefined;

  /**
   * Forge Profile. Name of forge profile
   */
  forgeProfile: string | undefined;

  /**
   * Downloaded version of Java
   */
  java: string | undefined;

  /**
   * Downloaded version of Minecraft
   */
  minecraft: string | undefined;
}

/**
 * Lab #1 Launcher State
 */
export interface State {
  /**
   * Lab #1 Launcher current session
   */
  session: Auth | undefined;

  /**
   * Config version of Minecraft when installed
   */
  minecraftVersion: string | undefined;

  /**
   * Installed Items & their versions
   */
  installed: InstalledState;
}

/**
 * Default state to set when nothing exists already
 */
export const defaultState: State = {
  session: undefined,
  minecraftVersion: undefined,
  installed: {
    forge: undefined,
    forgeProfile: undefined,
    java: undefined,
    minecraft: undefined,
  },
};
