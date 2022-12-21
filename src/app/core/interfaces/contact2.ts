
import { IDispositivo } from "./dispositivos";

export interface IContact {
    name: string,
    id?: number,
    dispositivos: IDispositivo[],
    userId?: number,
  }