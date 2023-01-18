import SetStateStartStopBtn from './setStateStartStopBtn';

export default async function EngineStart(id: number) {
  const url = `http://127.0.0.1:3000/engine/?${new URLSearchParams({
    id: String(id),
    status: 'started',
  })}`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  if (response.ok) {
    const content = await response.json();
    SetStateStartStopBtn(id, content);
  }
}
