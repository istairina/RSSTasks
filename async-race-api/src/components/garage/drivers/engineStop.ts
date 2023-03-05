import SetStateStartStopBtn from './setStateStartStopBtn';

export default async function EngineStop(id: number, keepStateBtn = false) {
  const url = `https://race-api-7yt1.onrender.com/engine/?${new URLSearchParams({
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
