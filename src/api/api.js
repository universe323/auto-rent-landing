import axios from "axios";
const _apiBase = "ССЫЛКА НА КАТАЛОГ В ФОРМАТЕ json"

const getCatalogAPI = async () => {
  return await axios.get(`${_apiBase}/catalog.json`);
}

export {
  getCatalogAPI,
}
