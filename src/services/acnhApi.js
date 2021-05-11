export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');

  const { results } = await res.json();

  return results.map((villager) => ({
    id: villager._id,
    name: villager.name,
    japaneseName: villager.japaneseName,
    species: villager.species,
    photo: villager.image,
    favSong: villager.song.name,
    birthday: villager.birthday,
    quote: villager.quote,
    personality: villager.personality,
    style: villager.style,
  }));
};
