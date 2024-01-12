import React from "react";

import { AnimeInterface } from "../../models/items/Anime.interface";

type Props = {
  animeList: AnimeInterface[];
  onAnimeStatus: (anime: AnimeInterface) => void;
};

// create class for component
export default class AnimeList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  // handle click
  handleClick(anime: AnimeInterface) {
    this.props.onAnimeStatus(anime);
  }

  // render

  render(): React.ReactNode {
      return <div>
        <ul>
            {this.props.animeList.map((el, index)=> <li key={index} onClick={()=>this.handleClick(el)}>
                <h3>{el.title}</h3>
                <p>{el.seasons} season{el.seasons > 1 ?"s":""}</p>
                <p>Episodes: {el.episodes}</p>
                <p>Status: {el.status ? "on going": "ended"}</p>
            </li>)}
        </ul>
      </div>
  }
}
