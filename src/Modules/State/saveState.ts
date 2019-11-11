// Lab/Lab#1/src/Modules/State/saveState.ts
import { outputJSON } from 'fs-extra';
import { State, STATE_PATH } from './State';

/**
 * Saves the JavaScript object of the Lab #1 Launcher state to the state
 * @param state Lab #1 Launcher State
 */
export async function saveState(state: State): Promise<void> {
  return outputJSON(STATE_PATH, state);
}
