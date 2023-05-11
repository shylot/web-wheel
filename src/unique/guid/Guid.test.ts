import Guid from "@/unique/guid/Guid";

describe('--------Unique Guid--------', () => {
    const id1 = Guid.get();
    const id2 = Guid.get();
    test(`[${id1}] [${id2}]`, () => {
        expect(id1).not.toBe(id2);
    })
});
