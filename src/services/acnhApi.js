// require('dotenv').config();
import mungeVillagers, { mungeNewVillagers } from './mungeUtils';

// const URL = process.env.HEROKU_URL;

export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  //   const res = await fetch('http://localhost:7890/api/v1/villagers');
  const rawData = await res.json();
  const villagers = mungeVillagers(rawData);
  return villagers;
};

export const findVillagerById = async (id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);

  const villager = await res.json();
  return villager;
};

export const searchBySpecies = async (species) => {
  const res = await fetch(
    `http://localhost:7890/api/v1/villagers/?species=${species}`
    // `https://mighty-refuge-29732.herokuapp.com/api/v1/villagers/?species=${species}`
  );
  //   const rawData = await res.json();
  //   console.log(mungeNewVillagers(rawData));

  return res.json();
};
