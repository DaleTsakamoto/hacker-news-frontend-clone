const FIND_TOP_STORIES = 'stories/findTopStories'

const findTopStories = (stories) => {
  return {
    type: FIND_TOP_STORIES,
    stories
  }
}

let storiesArr = []
const topStorySearch = async (storyId) => {
  await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
  .then((res) => res.json())
  .then((data) => {
    storiesArr.push(data)
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
  console.log(storiesArr)
  dispatch(findTopStories(storiesArr));
  return
}

const initialState = { top: null, new: null }

const storiesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FIND_TOP_STORIES:
      newState = Object.assign({}, state)
      newState.top = action.stories;
      return newState;
    default:
      return state;
  }
}

export default storiesReducer;