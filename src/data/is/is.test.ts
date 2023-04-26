import IS from './Is'
const testData = {
    '1': 1,
    '-1': -1,
    '1.2': 1.2,
    '0': 0,
    '"0"': '0',
    'false': false,
    'true': true,
    '"false"': 'false',
    '"true"': 'true',
    '"a"': 'a',
    '"-"': '-',
    '空字符串': '',
    'null': null,
    'undefined': undefined,
    '"null"': 'null',
    '"undefined"': 'undefined',
    '{}': {},
    '[]': [],
    'NaN': NaN,

    'Function': Function(),
    '() => {}': () => {},

    'Symbol()': Symbol(),
    'new Set()': new Set(),
    'new Map()': new Map(),
    'new RegExp()': new RegExp(''),
    'new Date()': new Date(),
};
describe('--------Data Type--------', () => {
    for (const key in testData) {
        test(`${key}`, () => {
            const val: unknown = testData[key];
            // expect(IS.isType(val, 'Date')).toBe(true);
            // expect(IS.isObjType(val, Object)).toBe(true);
            // expect(IS.isMap(val)).toBe(true);
            // expect(IS.isSet(val)).toBe(true);
            // expect(IS.isFunction(val)).toBe(true);
            // expect(IS.isSymbol(val)).toBe(true);
            // expect(IS.isArray(val)).toBe(true);
            // expect(IS.isPureObject(val)).toBe(true);
            // expect(IS.isObject(val)).toBe(true);
            // expect(IS.isString(val)).toBe(true);
            // expect(IS.isBoolean(val)).toBe(true);
            // expect(IS.isNumberNaN(val)).toBe(true);
            // expect(IS.isNumber(val)).toBe(true);
        });
    }
});

describe('--------Data Value--------', () => {
    for (const key in testData) {
        test(`${key}`, () => {
            const val: unknown = testData[key];
            // expect(IS.isDef(val)).toBe(true);
            // expect(IS.isUnDef(val)).toBe(true);
            expect(IS.isEmpty(val)).toBe(true);
        });
    }
});

