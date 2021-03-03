const FIND_STORIES = 'stories/findStories'

const findStories = (stories) => {
  return {
    type: FIND_STORIES,
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
  await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`)
  .then((res) => res.json())
  .then(async(data) => {
    for (let i = (cycle * 30); i <= (cycle * 30 + 29); i++){
        await storySearch(data[i], i)
    }
  })
  dispatch(findStories(storiesObj))
  return storiesObj;
}

const initialState = { stories: null }

const storiesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FIND_STORIES:
      newState = { ...state }
      newState.stories = action.stories;
      return newState;
    default:
      return state;
  }
}

export default storiesReducer;