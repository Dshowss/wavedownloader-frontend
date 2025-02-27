import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import instagramReducer from './instagram/instagram.reducer';
import youtubeReducer from './youtube/youtube.reducer';
import twitterReducer from './twitter/twitter.reducer';
import facebookReducer from './facebook/facebook.reducer';
import soundcloudReducer from './soundcloud/soundcloud.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  instagram: instagramReducer,
  youtube: youtubeReducer,
  twitter: twitterReducer,
  facebook: facebookReducer,
  soundcloud: soundcloudReducer,
});

export default persistReducer(persistConfig, rootReducer);
