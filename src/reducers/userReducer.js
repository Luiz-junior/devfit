
const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2019-12-13', '2019-12,12']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name}
    default:
      return state;   
  }
};
