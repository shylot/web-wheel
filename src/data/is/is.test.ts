import IS from './Is'
import TestData from "@/data/is/is.testData";
describe('--------Data Type--------', () => {
    for (const key in TestData) {
        test(`${key}`, () => {
            const val: unknown = TestData[key];
            expect(IS.isType(val, 'Date')).toBe(true);
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

