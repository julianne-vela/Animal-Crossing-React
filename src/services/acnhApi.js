export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const villagers = await res.json();

  return villagers.map((villager) => ({
    id: villager._id,
    name: villager.name,
    japaneseName: villager.japaneseName,
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
