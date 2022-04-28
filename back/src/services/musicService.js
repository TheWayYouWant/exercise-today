import { Exercise, Music } from "../db";
import {
  titleMergeSort,
  yearMergeSort,
  randomize,
  calculateProperFactor,
} from "../utils/music";

class musicService {
  static async getMusics() {
    const musics = await Music.findAll();

    if (!musics) {
      const errorMessage = "노래가 비어있습니다.";
      return { errorMessage };
    }
    return { musics };
  }

  static async getMusicsBy({ filter, orderby, limit }) {
    const filteredMusics = await Music.findByFilter({ filter });

    const limitedMusics = filteredMusics.slice(0, limit);
    let orderbyMusics;
    if (orderby === "title") {
      orderbyMusics = titleMergeSort(limitedMusics);
    } else if (orderby === "-title") {
      orderbyMusics = titleMergeSort(limitedMusics).reverse();
    } else if (orderby === "year") {
      orderbyMusics = yearMergeSort(limitedMusics);
    } else if (orderby === "-year") {
      orderbyMusics = yearMergeSort(limitedMusics).reverse();
    } else {
      orderbyMusics = randomize(filteredMusics).slice(0, limit);
    }
    return { musics: orderbyMusics };
  }
  static async getMusicsRecommendation({ exercise }) {
    const exerciseInfo = await Exercise.findByName({
      name: exercise,
    });
    const { CaloriesPerLb } = exerciseInfo;
    console.log(CaloriesPerLb);
    const properFactor = calculateProperFactor(CaloriesPerLb);
    console.log(properFactor);
  }
}
export { musicService };
