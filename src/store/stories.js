
const FIND_TOP_STORIES = 'stories/findTopStories'

const findTopStories = (stories) => {
  return {
    type: FIND_TOP_STORIES,
    stories
  }
}

let storiesObj = {}
const topStorySearch = async (storyId) => {
  await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
  .then((res) => res.json())
  .then((data) => {
    storiesObj[storyId] = data
  })
  return 
}

export const topStoriesSearch = () => async (dispatch) => {
  await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
  .then((res) => res.json())
  .then(async(data) => {
    for (let i = 0; i <= 29; i++){
      await topStorySearch(data[i])
    }
  })
  dispatch(findTopStories(storiesObj));
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
    default:
      return state;
  }
}

export default storiesReducer;