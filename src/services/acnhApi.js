// require('dotenv').config();
// import mungeVillagers, { mungeNewVillagers } from './mungeUtils';

// const URL = process.env.HEROKU_URL;

export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  //   const res = await fetch('http://localhost:7890/api/v1/villagers');
  const results = await res.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    species: villager.species,
    image: villager.image,
    favSong: villager.song.name,
    birthday: villager.birthday,
    quote: villager.quote,
    personality: villager.personality,
    style: villager.style,
  }));
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
