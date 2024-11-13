// src/App.tsx
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@src/Routes';

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;