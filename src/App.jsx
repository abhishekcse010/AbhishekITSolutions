import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import HomePage from './pages/HomePage';
import './index.css';

// Ant Design theme customization
const antdTheme = {
  token: {
    colorPrimary: '#0073ff',
    colorSuccess: '#10b981',
    colorWarning: '#ff9100',
    colorError: '#ef4444',
    borderRadius: 8,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      controlHeight: 44,
      fontWeight: 500,
    },
    Input: {
      controlHeight: 44,
    },
    Select: {
      controlHeight: 44,
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
