export const updateAgility = (id, value) => ({
  type: 'UPDATE_AGILITY',
  value,
  id
});

export const updateBonus = (id, value) => ({
  type: 'UPDATE_BONUS',
  value,
  id
});

export const toggleSpeedster = id => ({
  type: 'TOGGLE_SPEEDSTER',
  id
});
