import { IDispositivo } from "./dispositivos";

export interface Contact{
  name?: string;
  userID?: number,
  id: number,
  dispositivos: IDispositivo[]
  
}