import Utils from "../common/utils/utils";
import { isNull } from "lodash";

export default class ExtractProvider {
  static getExtractProviders = (providers, key) => {
    let extractedProviders = [];
    let noImageUrl = "https://via.placeholder.com/150";

    if (providers) {
      let providerList = Utils.getCorrectData(providers, key);

      if (providerList) {
        providerList.map((pro) => {
          let provider = Utils.pickInnerObject(pro, [
            "id",
            "attributes.card-image",
            "attributes.name",
            "attributes.subspecialties",
          ]);
          if (provider) {
            if (isNull(provider.attributes["card-image"])) {
              provider.attributes["card-image"] = noImageUrl;
            }
            extractedProviders.push(provider);
          }
        });
      }
    }

    return extractedProviders;
  };
}
