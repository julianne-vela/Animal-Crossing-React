export default function mungeVillagers(rawData) {
  return rawData.map((item) => ({
    id: item._id,
    name: item.name,
    japaneseName: item.japaneseName,
    species: item.species,
    image: item.image,
    favSong: item.song.name,
    birthday: item.birthday,
    quote: item.quote,
    personality: item.personality,
    style: item.style,
  }));
}
