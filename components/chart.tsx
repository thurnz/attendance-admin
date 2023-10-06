import { useContext } from 'react';
import { DataContext } from '@/contexts/context';

export default function Chart() {
  const { handleToggleChart, chart } = useContext(DataContext);

  return (
    <div className='text-xs absolute bottom-0 right-0'>
      <span className={chart ? 'underline cursor-pointer' : 'pointer-events-none'} onClick={handleToggleChart}>TABLE</span> | <span className={!chart ? 'underline cursor-pointer' : 'pointer-events-none'} onClick={handleToggleChart}>CHART</span>
    </div>
  );
}