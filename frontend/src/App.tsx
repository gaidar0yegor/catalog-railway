import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import Catalogs from './pages/Catalogs';
import FieldMapping from './pages/FieldMapping';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/catalogs" element={<Catalogs />} />
          <Route path="/field-mapping" element={<FieldMapping />} />
        </Routes>
      </Layout>
    </Box>
  );
};

export default App;
