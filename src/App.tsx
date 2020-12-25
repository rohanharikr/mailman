import React from 'react';
import { Sidebar, ActionView, EmailView } from './components';

function App() {
  return (
    <div className="flex">
      <Sidebar/>
      <ActionView/>
      <EmailView/>
    </div>
  );
}

export default App;
