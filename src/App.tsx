import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import SupportAgents from './support-agent/SupportAgents';
import SupportAgentsCreate from './support-agent/SupportAgentsCreate';
import SupportTickets from './support-ticket/SupportTickets';
import SupportTicketsCreate from './support-ticket/SupportTicketsCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/support-tickets/'} />} />
          <Route path='/support-agents/' element={<SupportAgents />} />
          <Route path='/support-agents/create' element={<SupportAgentsCreate />} />
          <Route path='/support-tickets/' element={<SupportTickets />} />
          <Route path='/support-tickets/create' element={<SupportTicketsCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
