import { lazy, Suspense } from 'react';
import './App.css';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: 'demo_host',
  remotes: [
    {
      name: 'demo_remote',
      entry: 'http://127.0.0.1:3003/mf-manifest.json',
    },
  ],
  shared: {
    react: {
      scope: 'default',
      shareConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '18.3.1',
      },
      version: '18.3.1',
    },
    'react-dom': {
      scope: 'default',
      version: '18.3.1',
      shareConfig: {
        singleton: true,
        strictVersion: true,
        requiredVersion: '18.3.1',
      },
    },
  },
});

// @ts-expect-error import not resolving with a component type
const RemoteComponent = lazy(() => loadRemote('demo_remote/Button'));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteComponent />
      </Suspense>
    </>
  );
}

export default App;
