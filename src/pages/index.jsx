import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Podcasts } from "../Podcasts";
import { episodes } from "../episodes";

// const podcast1 = {
//   num: "126",
//   title: "Robot, který snědl koblihu",
//   guest: "Radovan Siwek",
// };

document.querySelector("#root").innerHTML = render(
  <Podcasts episodeList={episodes}/>
);
