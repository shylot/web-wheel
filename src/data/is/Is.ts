import {IDataType} from "@/data/IData.ts";

/*****************************************************************
 * 数据类型判断
 */
const getType = (val: unknown) => {
    const type: string = Object.prototype.toString.call(val).replace(/^(\[object\s)(.*)(\])$/g, '$2');
    return type
}

const isType = (val: unknown, type: string) => {
    // return Object.prototype.toString.call(val) === `[object ${type}]`;
    return getType(val) === type;
}

const isObjType = (val: unknown, ObjFunc: Function) => {
    if (typeof val === 'object') {
        return val instanceof ObjFunc;
    }
    return false;
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
    return isType(val, 'Object');
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
    // return val instanceof Set;
    return isType(val, IDataType.SET);
}
const isMap = (val: unknown) => {
    // return val instanceof Map;
    return isType(val, IDataType.MAP);
}
/*****************************************************************
 * 数据值判空
 */
const isDef = (val: unknown) => {
    return val !== undefined;
}

const isUnDef = (val: unknown) => {
    return !isDef(val);
}

const isNull = (val: unknown) => {
    return val === null;
}


const isEmpty = (val: any) => {
    if (isUnDef(val) || isNull(val) || isNumberNaN(val)) {
        return true;
    }
    if (isArray(val) || isString(val)) {
        return val.length === 0;
    }
    if (isMap(val) || isSet(val)) {
        return val.size === 0;
    }
    if (isObject(val)) {
        return Object.keys(val).length === 0;
    }
    return false;
}

export default {
    isType,
    isObjType,
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

    isDef,
    isUnDef,
    isEmpty,
}
