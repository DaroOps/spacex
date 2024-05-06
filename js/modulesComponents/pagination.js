import {
  getAllRockets,
  getAllRocketsId,
  getMissionByRocket,
} from "../modules/rockets.js";
import { nameRockets } from "./title.js";
import {
  informationRockets,
  informationLaunchCostRocket,
  informationFirstFlightRocket,
  informationWebRocket,
} from "./information.js";
import { imageRockets } from "./card.js";
import {
  progressRocketWeight,
  progressPayloadWeights,
  progressHeightRocket,
  progressDiameterRocket,
  progressSecondStageDiameterRocket,
  progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";

const getRocketsId = async (e) => {
  e.preventDefault();
  let a = e.target.parentElement.children;
  for (let val of a) {
    val.classList.remove("activo");
  }
  e.target.classList.add("activo");

  let information__2 = document.querySelector("#information__2");
  information__2.innerHTML = "";
  let description__item = document.querySelector("#description__item");
  description__item.innerHTML = "";
  let section__image = document.querySelector("#section__image");
  section__image.innerHTML = "";

  let Rocket = await getAllRocketsId(e.target.id);
  console.log(Rocket);
  await informationRockets(Rocket.country, Rocket.description);

  await nameRockets(Rocket.name);
  await informationLaunchCostRocket(Rocket.cost_per_launch);
  await informationFirstFlightRocket(Rocket.first_flight);
  await informationWebRocket(Rocket.wikipedia);
  await imageRockets(Rocket.flickr_images);

  await progressRocketWeight(Rocket);
  await progressPayloadWeights(Rocket);
  await progressHeightRocket(Rocket);
  await progressDiameterRocket(Rocket);
  await progressSecondStageDiameterRocket(Rocket);
  await progressSecondStageHeightRocket(Rocket);
};
export const paginationRockets = async () => {
  let rockets = await getAllRockets();
  let div = document.createElement("div");
  div.classList.add("buttom__paginacion");

  try {
    for (const [id, val] of rockets.entries()) {
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.id = val.id;
      
        let img = document.createElement("img");
        img.classList.add("pagImgage");
      
        try {
          const { docs } = await getMissionByRocket(val.id);
          const patchUrl = docs[0]?.links.patch.small;
      
          if (patchUrl) {
            img.setAttribute("src", patchUrl);
            a.append(img);
          } else {
            a.textContent = id + 1;
            console.log("No se encontró un patch para el rocket con ID:", val.id);
          }
        } catch (error) {
          console.error("Error al obtener el patch para el rocket con ID:", val.id, error);
          a.textContent = id + 1;
        }
      
        a.addEventListener("click", getRocketsId);
        div.appendChild(a);
      }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  let [a1, a2, a3, a4] = div.children;
  a3.click();
  // <div class="buttom__paginacion">
  //     <a href="#">&laquo;</a>
  //     <a href="#" class="activo">1</a>
  //     <a href="#">2</a>
  //     <a href="#">3</a>
  //     <a href="#">4</a>
  //     <a href="#">&raquo;</a>
  // </div>
  return div;
};
