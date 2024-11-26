import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button } from '@mui/material';

const FieldMapping: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Field Mapping
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Source Fields
            </Typography>
            <Box sx={{ mt: 2 }}>
              {/* Source fields will be mapped here */}
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Target Schema
            </Typography>
            <Box sx={{ mt: 2 }}>
              {/* Target fields will be mapped here */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary">
          Save Mapping
        </Button>
      </Box>
    </Box>
  );
};

export default FieldMapping;
