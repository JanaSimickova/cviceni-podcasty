import { Episode } from "../Episode";

export const Podcasts = ({ episodeList }) => 
  episodeList.map((episode) => {
    return (
      <Episode key={episode.num} num={episode.num} title={episode.title} guest={episode.guest}/>
    )
  })
