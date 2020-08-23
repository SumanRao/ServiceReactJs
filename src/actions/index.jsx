import axios from "axios";
import Utils from "../common/utils/utils";
import ExtractProvider from "../common/extractProvider";

export function loadService() {
  return (dispatch) => {
    return axios
      .get(
        "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services"
      )
      .then((response) => {
        dispatch(correctSortedService(response.data.data));
      });
  };
}

export function correctSortedService(services) {
  let serviceResult = Utils.getCorrectData(services, "id");
  return {
    type: "LOAD_SERVICE",
    listServices: [
      { id: "", attributes: { name: "All Services" } },
      ...serviceResult,
    ],
  };
}

export function loadProvider() {
  return (dispatch) => {
    return axios
      .get(
        "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10"
      )
      .then((response) => {
        dispatch(correctSortedProvider(response.data.data));
      });
  };
}

export function correctSortedProvider(providers) {
  let providerResult = ExtractProvider.getExtractProviders(providers, "id");
  return {
    type: "LOAD_PROVIDER",
    listProviders: [...providerResult],
  };
}
