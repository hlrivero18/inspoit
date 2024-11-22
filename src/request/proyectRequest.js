import { request } from "./request";
export const GETALLPROYECT = request + "proyect/";
export const GETIDPROYECT = (id) => request + `proyect/${id}`;
export const GETNAMEPROYECTS = request + "proyect/search";
