import { combineReducers } from 'redux';

const initialState = [
  { id: 1, agility: '', bonus: '', speedster: false },
  { id: 2, agility: '', bonus: '', speedster: false },
  { id: 3, agility: '', bonus: '', speedster: false },
  { id: 4, agility: '', bonus: '', speedster: false }
];

const demons = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AGILITY':
      return state.map(
        demon =>
          demon.id === action.id ? { ...demon, agility: action.value } : demon
      );

    case 'UPDATE_BONUS':
      return state.map(
        demon =>
          demon.id === action.id ? { ...demon, bonus: action.value } : demon
      );

    case 'TOGGLE_SPEEDSTER':
      return state.map(
        demon =>
          demon.id === action.id
            ? { ...demon, speedster: !demon.speedster }
            : demon
      );

    default:
      return state;
  }
};


export default combineReducers({ demons });
