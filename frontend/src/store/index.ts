import { configureStore } from '@reduxjs/toolkit';
import suppliersReducer from './slices/suppliersSlice';
import catalogsReducer from './slices/catalogsSlice';
import mappingsReducer from './slices/mappingsSlice';

export const store = configureStore({
  reducer: {
    suppliers: suppliersReducer,
    catalogs: catalogsReducer,
    mappings: mappingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
