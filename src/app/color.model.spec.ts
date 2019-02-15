import { Color } from "./color.model";

describe('ColorModel', () => {
    it('should create color', () => {
        const color = new Color('red', '#f00');
        expect(color.name).toEqual('red');
        expect(color.rgb).toEqual('#f00');
    });
});