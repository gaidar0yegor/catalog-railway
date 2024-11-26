import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface FieldMapping {
  id: string;
  sourceField: string;
  targetField: string;
  supplierId: string;
  transformation?: string;
}

interface MappingsState {
  items: FieldMapping[];
  loading: boolean;
  error: string | null;
}

const initialState: MappingsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchMappings = createAsyncThunk(
  'mappings/fetchMappings',
  async () => {
    // TODO: Implement API call
    return [] as FieldMapping[];
  }
);

const mappingsSlice = createSlice({
  name: 'mappings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMappings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMappings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMappings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch mappings';
      });
  },
});

export default mappingsSlice.reducer;
