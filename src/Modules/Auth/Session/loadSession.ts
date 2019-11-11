// Lab/Lab#1/src/Modules/Auth/Session/loadSession.ts
import { pathExists, readJson } from 'fs-extra';
import { config } from '../../../Config';
import Auth from '@xmcl/auth';
import { loadState, State } from '../../State';

/**
 *
 * @param state Lab #1 State
 */
export async function existingSessionExists(state: State): Promise<boolean> {
  return !!state.session;
}

export async function checkAndLoadSession(): Promise<Auth | undefined> {
  const state = await loadState();

  const sessionExists = await existingSessionExists(state);
  if (!sessionExists) return;

  return state.session;
}
