
import { IDispositivos } from "./dispositivos";

export interface IContact {
    name: string,
    dispositivos: IDispositivos,
    userId?: number,
  }