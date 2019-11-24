import {compose} from "recompose";

const adaptProp = (item, oldName, newName) => {
  if (item.hasOwnProperty(oldName)) {
    item[newName] = item[oldName];
    delete item[oldName];
  }
  return item;
};

const adapt = (arr) => {
  if (arr.length) {
    arr.forEach((item) => {
      compose(
          adaptProp(item, `background_color`, `backgroundColor`),
          adaptProp(item, `background_image`, `backgroundImage`),
          adaptProp(item, `is_favorite`, `isFavorite`),
          adaptProp(item, `poster_image`, `posterImage`),
          adaptProp(item, `preview_image`, `previewImage`),
          adaptProp(item, `preview_video_link`, `previewVideoLink`),
          adaptProp(item, `run_time`, `runTime`),
          adaptProp(item, `scores_count`, `scoresCount`),
          adaptProp(item, `video_link`, `videoLink`)
      );
    });
  }
  return arr;
};

export default adapt;
