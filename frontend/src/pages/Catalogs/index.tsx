import React from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Catalogs: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Catalogs</Typography>
        <Button variant="contained" startIcon={<CloudUploadIcon />}>
          Import Catalog
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Supplier</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Import Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Catalog rows will be mapped here */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Catalogs;
