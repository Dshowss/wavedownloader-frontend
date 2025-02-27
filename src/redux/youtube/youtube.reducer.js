import YoutubeActionTypes from './youtube.types';

const INITIAL_STATE = {
  videoData: null,
  downloadData: null,
  isFetching: false,
  isSlide: false,
  errorMessage: null,
};

const youtubeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case YoutubeActionTypes.CLEAR_YOUTUBE_DATA:
      return {
        ...state,
        videoData: null,
        downloadData: null,
        isFetching: false,
        isSlide: false,
        errorMessage: null,
      };
    case YoutubeActionTypes.YOUTUBE_VIDEO_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        videoData: null,
      };
    case YoutubeActionTypes.YOUTUBE_VIDEO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        videoData: null,
      };
    case YoutubeActionTypes.YOUTUBE_VIDEO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        videoData: action.payload.data.data,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default youtubeReducer;
