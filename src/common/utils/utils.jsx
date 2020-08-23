import * as _ from "lodash";

export default class Utils {
  static getCorrectData = (arr, key) => {
    return this.sortObject(this.getUnique(arr, key), key);
  };

  static getUnique = (arr, index) => {
    const unique = arr
      .map((e) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  };

  static sortObject = (arr, key) => {
    return _.sortBy(arr, key);
  };

  static getInnerObject = (obj, val) => {
    return _.get(obj, val);
  };

  static pickInnerObject = (obj, val) => {
    return _.pick(obj, val);
  };

  static findInnerObject = (obj, val) => {
    return _.find(obj, val);
  };
}
