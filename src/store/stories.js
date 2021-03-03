const FIND_TOP_STORIES = 'stories/findTopStories'
const FIND_NEW_STORIES = 'stories/findNewStories'

const findTopStories = (stories) => {
  return {
    type: FIND_TOP_STORIES,
    stories
  }
}

const findNewStories = (stories) => {
  return {
    type: FIND_NEW_STORIES,
    stories
  }
}

let storiesObj;
const storySearch = async (storyId, i) => {
  await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
  .then((res) => res.json())
  .then((data) => {
    storiesObj[i] = data
  })
  return 
}

export const storiesSearch = (type, cycle) => async (dispatch) => {
  storiesObj = {};
  await fetch(`https://hacker-news.firebaseio.com/v0/${type === 'new' ? 'newstories' : 'topstories'}.json?print=pretty`)
  .then((res) => res.json())
  .then(async(data) => {
    for (let i = (cycle * 30); i <= (cycle * 30 + 29); i++){
        await storySearch(data[i], i)
    }
  })
  type === 'new' ? dispatch(findNewStories(storiesObj)) : dispatch(findTopStories(storiesObj))
  return storiesObj;
}

const initialState = { top: null, new: null }

const storiesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FIND_TOP_STORIES:
      newState = { ...state }
      newState.top = action.stories;
      return newState;
    case FIND_NEW_STORIES:
      newState = { ...state }
      newState.new = action.stories;
      return newState;
    default:
      return state;
  }
}

export default storiesReducer;