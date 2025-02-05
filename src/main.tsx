import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';
import { callback } from './utils/Callback';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Profiler id="APP" onRender={callback}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Profiler> */}
  </StrictMode>
);
