import { GenericClassDecorator } from './generic-class-decorator';
import { Type } from './type';
import { Injector } from './injector';

export const Injectable = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        Injector.set(target);
    };
};
