// require('dotenv').config();
// import mungeVillagers, { mungeNewVillagers } from './mungeUtils';

// const URL = process.env.HEROKU_URL;
//   const res = await fetch('http://localhost:7890/api/v1/villagers');

export const findVillagers = async (id = null) => {
  let requestURL;

  if (id) {
    requestURL = `https://ac-vill.herokuapp.com/villagers/${id}`;
  } else {
    requestURL = `https://ac-vill.herokuapp.com/villagers/`;
  }

  const res = await fetch(requestURL);
  const results = await res.json();
  if (results.length > 1) {
    const villagers = results.map((villager) => ({
      id: villager._id,
      name: villager.name,
      species: villager.species,
      image: villager.image,
      favSong: villager.song.name,
      birthday: villager.birthday,
      quote: villager.quote,
      personality: villager.personality,
      style: villager.style,
      skill: villager.skill,
    }));

    return villagers;
  } else {
    return results;
  }
};

export const searchBySpecies = async (species, villagers) => {
  const results = villagers.filter(
    (villager) => villager.species === `${species}`
  );
  // await fetch(
  // `http://localhost:7890/api/v1/villagers/?species=${species}`
  // `https://mighty-refuge-29732.herokuapp.com/api/v1/villagers/?species=${species}`
  //   );
  //   const rawData = await res.json();
  //   console.log(mungeNewVillagers(rawData));

  return results;
};
