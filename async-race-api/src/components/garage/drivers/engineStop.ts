import SetStateStartStopBtn from './setStateStartStopBtn';

export default async function EngineStop(id: number, keepStateBtn = false) {
  const url = `http://127.0.0.1:3000/engine/?${new URLSearchParams({
    id: String(id),
    status: 'stopped',
  })}`;
  await fetch(url, {
    method: 'PATCH',
  });
  if (!keepStateBtn) {
    SetStateStartStopBtn(id, true);
  }
}
