'use client';
import { createContext, useState, useEffect, useContext } from 'react';
import _ from 'underscore';

export const DataContext = createContext<any | null>(null);

export default function Context({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);
  const [chart, setChart] = useState(true);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      setIsMobile(window.innerWidth < window.innerHeight || window.innerWidth < 800);
    }, 500);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleChart = () => {
    setChart(!chart);
  };

  return (
    <DataContext.Provider value={{
      isMobile, setIsMobile,
      chart, setChart,
      handleToggleChart
      }}>
      {children}
    </DataContext.Provider>
  );
}