import React from 'react';
import { Sidebar, ActionView, EmailView } from './components';

function App() {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar/>
      <ActionView/>
      <EmailView/>
    </div>
  );
}

export default App;
