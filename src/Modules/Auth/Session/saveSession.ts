// Lab/Lab#1/src/Modules/Auth/Session/saveSession.ts
import Auth from '@xmcl/auth';
import { loadState } from '../../State';
import { saveState } from '../../State/saveState';

export async function saveSession(session: Auth): Promise<void> {
  const state = await loadState();

  state.session = session;
  return saveState(state);
}
