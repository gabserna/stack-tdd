describe('Test for sortingAlgorithm', () => {
    
    it('should return a sorted array: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19', () => {
    let value = [19, 1, 3, 11, 7, 15, 13, 5, 17, 9];
    let resultado = sortingAlgorithm(value);
    let solved = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    expect(resultado).toEqual(solved);
    })  
    
    it('should return a sorted array: 1, 2, 3, 4, 5', () => {
    let value = [5, 1, 4, 2, 3];
    let resultado = sortingAlgorithm(value)
    let solved = [1, 2, 3, 4, 5];
    expect(resultado).toEqual(solved);
    })
    
    it('should return a sorted array: 2, 4, 6, 8, 10', () => {
    let value = [10, 8, 6, 4, 2];
    let resultado = sortingAlgorithm(value)
    let solved = [2, 4, 6, 8, 10];
    expect(resultado).toEqual(solved);
    })

    it('should return a sorted array: 1, 2, 4, 5, 6, 6, 8, 9, 12', () => {
    let value = [1, 6, 4, 12, 9, 8, 6, 5, 2];
    let resultado = sortingAlgorithm(value);
    let solved = [1, 2, 4, 5, 6, 6, 8, 9, 12];
    expect(resultado).toEqual(solved);
    })
    
    it('should return a sorted array: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100', () => {
    let value = [100, 10, 40, 60, 90, 30, 20, 50, 80, 70];
    let resultado = sortingAlgorithm(value);
    let solved = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(resultado).toEqual(solved);
    })

    

})