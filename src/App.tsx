import React from 'react';
import { Sidebar, ActionView } from './components';

function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <ActionView/>
      <main className="bg-black flex-1">
         asdfasdf
      </main>
    </div>
  );
}

export default App;
