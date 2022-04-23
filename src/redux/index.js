import { combineReducers, createStore} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import deleteReducer from "./delete";
import favoriteReducer from "./favorite";
// import { configureStore } from "@reduxjs/toolkit";
const rootReducer= combineReducers({
    favorites: favoriteReducer,
    deleteUser: deleteReducer,
})

const persistConfig = {
    key:"root",
    storage,
}

// export const store = configureStore({
//     reducer: {
//         favorites: 
//     }
// })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)