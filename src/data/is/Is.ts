import {IDataType} from "@/data/IData.ts";

const getType = (val: unknown) => {
    const type: string = Object.prototype.toString.call(val).replace(/^(\[object\s)(.*)(\])$/g, '$2');
    return type
}

const is = (val: unknown, type: string) => {
    // return Object.prototype.toString.call(val) === `[object ${type}]`;
    return getType(val) === type;
}

const isNumber = (val: unknown) => {
    return typeof val === IDataType.NUMBER;
}

const isNumberNaN = (val: unknown) => {
    return Number.isNaN(val)
}

const isBoolean = (val: unknown) => {
    return typeof val === IDataType.BOOLEAN;
}

const isString = (val: unknown) => {
    return typeof val === IDataType.STRING;
}

const isObject = (val: unknown) => {
    return typeof val === IDataType.OBJECT;
}

// 纯粹的对象 - 非数组
const isPureObject = (val: unknown) => {
    return is(val, 'Object');
}

const isArray = (val: unknown) => {
    return Array.isArray(val);
}

const isSymbol = (val: unknown) => {
    return typeof val === IDataType.SYMBOL;
}
const isFunction = (val: unknown) => {
    return typeof val === IDataType.FUNCTION;
}

const isSet = (val: unknown) => {
    return is(val, IDataType.SET);
}
const isMap = (val: unknown) => {
    return is(val, IDataType.MAP);
}
export default {
    is,
    isNumber,
    isNumberNaN,
    isBoolean,
    isString,
    isObject,
    isPureObject,
    isArray,
    isSymbol,
    isFunction,
    isSet,
    isMap,
}
