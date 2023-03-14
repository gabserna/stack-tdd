describe('Test for Reverse Polish Notation (rpn):', () => {
    
    it('when "3 5 +" is entered should return: 8', () => {
        const expected = 8;
        const result = rpn("3 5 +");
        expect(result).toEqual(expected);
    })
    
    it('when "4 5 *" is entered should return: 20', () => {
        const expected = 20;
        const result = rpn("4 5 *");
        expect(result).toEqual(expected);
    })

    it('when "8 4 -" is entered should return: 4', () => {
        const expected = 4;
        const result = rpn("8 4 -");
        expect(result).toEqual(expected);
    })

    it('when "2 6 *" is entered should return: 12', () => {
        const expected = 12;
        const result = rpn("2 6 *");
        expect(result).toEqual(expected);
    })

    it('when "16 4 /" is entered should return: 4', () => {
        const expected = 4;
        const result = rpn("16 4 /");
        expect(result).toEqual(expected);
    })

    it('when "3 5 10 + *" is entered should return: 45', () => {
        const expected = 45;
        const result = rpn("3 5 10 + *");
        expect(result).toEqual(expected);
    })

    it('when "20 4 3 + 2 * -" is entered should return: 6', () => {
        const expected = 6;
        const result = rpn("20 4 3 + 2 * -");
        expect(result).toEqual(expected);
    })

})