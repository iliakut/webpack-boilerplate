import { FC, useEffect, useState } from 'react';
import { AppProps } from './App.types';
import Logo from '../images/webpack-logo.svg';

const App: FC<AppProps> = (props) => {
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
