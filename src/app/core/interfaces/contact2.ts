
import { IDispositivo } from "./dispositivos";

export interface IContact {
    name: string,
    dispositivos: IDispositivo[],
    userId?: number,
  }