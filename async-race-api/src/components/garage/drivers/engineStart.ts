import SetStateStartStopBtn from './setStateStartStopBtn';
import { startCars } from '../../common/interface';
import btnSetInactive from './btnSetInactive';

export default async function EngineStart(id: number) {
  btnSetInactive();
  const url = `https://race-api-7yt1.onrender.com/engine/?${new URLSearchParams({
    id: String(id),
    status: 'started',
  })}`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  let content: startCars = {
    velocity: 0,
    distance: 0,
  };
  if (response.ok) {
    content = await response.json();
    SetStateStartStopBtn(id);
  }
  return content;
}
