// import use-state hook from react
import { useState } from "react";

// import styles
import './App.css'

// import created component
import { ItemListComponent } from "./components/items/ItemList.component";
import { ItemInterface } from "./models/items/Item.interface";

// import all anime

import AnimeList from "./components/items/AnimeList.component";
import { AnimeInterface } from "./models/items/Anime.interface";

// we use useState hook in following way:
// - declare mock date (items)
// - declare update function (setItems)

function App() {
  // add use-state declaration
  const [items, setItems] = useState<ItemInterface[]>([
    { id: 1, name: "Jonathan", selected: false },
    { id: 2, name: "Jozeph", selected: false },
    { id: 3, name: "Jotaro", selected: false },
    { id: 4, name: "Josuke", selected: false },
    { id: 5, name: "Giorno", selected: false },
    { id: 6, name: "Jolin", selected: false },
  ]);

  function onItemSelect(item: ItemInterface) {
    let updateItems = [...items];
    // casting type
    const foundItem = updateItems.find(
      (el) => el.id === item.id
    ) as ItemInterface;
    foundItem.selected = !item.selected;
    // call function to update state of our data
    setItems(updateItems);
  }

  // use useState for anime component

  const [animes, setAnimes] = useState<AnimeInterface[]>([
    { title: "Bungo Stray Dog's", seasons: 3, episodes:24, genre:"fantasy", status:true},
    { title: "Jujutsu Kaisen", seasons: 2, episodes:24, genre:"horror", status:true},
    { title: "Naruto", seasons: 2, episodes:450, genre:"fantasy", status:false},
    { title: "Tomo is a girls", seasons: 1, episodes:12, genre:"romantic comedy", status:false},
    { title: "Kamisama", seasons: 2, episodes:24, genre:"fantasy", status:false},
  ]);

  // set function for changing state
  const onAnimeStatus = (anime: AnimeInterface)=>{
    let animeForUpdate = [...animes]
    let foundAnime = animeForUpdate.find(el => el.title === anime.title) as AnimeInterface;
    foundAnime.episodes ++;
    setAnimes(animeForUpdate);

  }
  return (
    <div>
      <ItemListComponent items={items} onItemSelect={onItemSelect} />
      <AnimeList animeList={animes} onAnimeStatus={onAnimeStatus} />
    </div>
  );
}

export default App;
