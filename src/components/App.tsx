import { FC, useEffect, useState } from 'react';
import { TAppProps } from './App.types';
import Logo from '../images/webpack-logo.svg';

const App: FC<TAppProps> = (props) => {
  console.log(props);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(inter);
  }, [counter]);

  return (
    <div>
      <Logo />
      React App {counter}
    </div>
  );
};

export default App;
