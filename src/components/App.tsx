import React, { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(inter);
  }, [counter]);

  return <div>React App {counter}</div>;
};

export default App;
