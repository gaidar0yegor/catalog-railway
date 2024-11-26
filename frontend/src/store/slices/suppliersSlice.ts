import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Supplier {
  id: string;
  name: string;
  type: string;
  status: string;
  lastUpdated: string;
}

interface SuppliersState {
  items: Supplier[];
  loading: boolean;
  error: string | null;
}

const initialState: SuppliersState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async () => {
    // TODO: Implement API call
    return [] as Supplier[];
  }
);

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch suppliers';
      });
  },
});

export default suppliersSlice.reducer;
