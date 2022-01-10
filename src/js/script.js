import { getDog ,getCat} from "./api.js";

const dogBtn = document.querySelector("#dogBtn")
const catBtn = document.querySelector("#catBtn")


dogBtn.addEventListener("click",getDog)
catBtn.addEventListener("click",getCat)