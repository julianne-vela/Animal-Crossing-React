import mungeVillagers from './mungeUtils';

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
