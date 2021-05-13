export default function mungeVillagers(rawData) {
  return rawData.map((item) => ({
    id: item._id,
    name: item.name,
    species: item.species,
    image: item.image,
    favSong: item.song.name,
    birthday: item.birthday,
    quote: item.quote,
    personality: item.personality,
    style: item.style,
  }));
}

export function mungeNewVillagers(rawData) {
  return rawData.map((item) => ({
    id: item.id,
    name: item.name,
    species: item.species,
    personality: item.personality,
    birthday: item.birthday,
    gender: item.gender,
    hobby: item.hobby,
    catchPhrase: item.catch_phrase,
    icon: item.icon_uri,
    image: item.image_uri,
    bubbleColor: item.bubble_color,
    textColor: item.text_color,
    saying: item.saying,
  }));
}
