import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";


import storage from "redux-persist/lib/storage";


import userReducer from "./user/user.reducer";
import musicsReducer from "./musics/musics.reducer";

const persistConfig = {
    key:"root",
    storage,
    whitelist:["user"]
}

const rootReducer = combineReducers({
    user:userReducer
})


// export default rootReducer;
export default persistReducer(persistConfig,rootReducer);