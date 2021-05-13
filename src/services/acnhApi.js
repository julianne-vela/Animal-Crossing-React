import mungeVillagers, { mungeNewVillagers } from './mungeUtils';

export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const rawVillagers = await res.json();

  const villagers = mungeVillagers(rawVillagers);

  return villagers;
};

export const findVillagerById = async (id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);

  const villager = await res.json();
  return villager;
};

export const searchBySpecies = async (species) => {
  const res = await fetch(`http://localhost:7890/api/v1/villagers/${species}`);
  const rawData = await res.json();

  const newVillagers = mungeNewVillagers(rawData);
  return newVillagers;
};
