import { get } from "../helpers/api";

const GALLERY_DATA_URL = "https://www.mobile.de/hiring-challenge.json";

export const getGalleryData = () => get(GALLERY_DATA_URL);