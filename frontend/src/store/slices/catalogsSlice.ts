import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Catalog {
  id: string;
  name: string;
  supplierId: string;
  productCount: number;
  importDate: string;
  status: string;
}

interface CatalogsState {
  items: Catalog[];
  loading: boolean;
  error: string | null;
}

const initialState: CatalogsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCatalogs = createAsyncThunk(
  'catalogs/fetchCatalogs',
  async () => {
    // TODO: Implement API call
    return [] as Catalog[];
  }
);

const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCatalogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch catalogs';
      });
  },
});

export default catalogsSlice.reducer;
