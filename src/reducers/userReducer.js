
const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [], // 0 a 5
  myWorkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2019-12-13', '2019-12,12']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name}
    case 'SET_WORKOUT_DAYS':
      return {...state, workoutDays: action.payload.workoutDays }
    default:
      return state;   
  }
};
