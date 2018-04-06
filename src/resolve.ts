import { Type } from "./type";
import { Injector } from './injector';

export function Resolve(injectable: Type<any>): any {
    return (target: any, propertyKey: string): any => {
        target[propertyKey] = Injector.resolve(injectable);
    }
}