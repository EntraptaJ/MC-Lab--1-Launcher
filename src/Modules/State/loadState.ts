// Lab/Lab#1/src/Modules/State/loadState.ts
import { pathExists, readJson } from 'fs-extra';
import { State, STATE_PATH, defaultState } from './State';

/**
 * Returns a promise resolving to wether or not a state file exists
 */
export async function existingStateExists(): Promise<boolean> {
  return pathExists(STATE_PATH);
}

/**
 * Loads the Lab #1 Launcher App state file or defaults if file does not exist
 */
export async function loadState(): Promise<State> {
  const stateExists = await existingStateExists();
  if (!stateExists) return defaultState;

  return readJson(STATE_PATH);
}
