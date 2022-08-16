import React, { useEffect, useState } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      console.log('Date changed');
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return <div>{date.toLocaleString()}</div>;
};

export default Clock;
