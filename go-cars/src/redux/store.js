import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './Car/carSlice';
import { cartReducer } from './Cart/cartSlice';

// const persistConfig = {
//     key: 'root',
//     storage: storage,
// };

const carPersistedConfig = {
    key: 'cars',
    storage: storage,
    whitelist: ['cars'],
}

const cartPersistedConfig = {
    key: 'cart',
    storage: storage,
}

const rootReducer = combineReducers({
    cars: persistReducer(carPersistedConfig, carsReducer),
    cart: persistReducer(cartPersistedConfig, cartReducer)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
});

export const persistor = persistStore(store);