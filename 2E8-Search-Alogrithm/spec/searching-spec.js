describe('Test for jumpSearch', () => {
    const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it('when 5 is chosen should return 4', () => {
        const expected = 4;
        const result = jumpSearch(arrayTest, 5);
        expect(result).toEqual(expected);
    });

    it('when 7 is chosen should return 6', () => {
        const expected = 6;
        const result = jumpSearch(arrayTest, 7);
        expect(result).toEqual(expected);
    });

    it('when 0 is chosen should return -1', () => {
        const expected = -1;
        const result = jumpSearch(arrayTest, 0);
        expect(result).toEqual(expected);
    });
    
    it('when 10 is chosen should return 9', () => {
        const expected = 9;
        const result = jumpSearch(arrayTest, 10);
        expect(result).toEqual(expected);
    });
});

describe('Test for jumpMovies', () => {
    //const arrayOfMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrayOfMovies = ['Agent Salt', 'Alien', 'American Psycho', 'Apocalypto', 'Avengers', 'Back to the future', 'Black Panther', 'Black Widow', 'Blade Runner', 'Bourne', 'Bride and bridges', 'Casablanca', 'Citizen Kane', 'Crouching Tiger, Hidden Dragon', 'Dead Pool', 'E.T.', 'Fearless', 'Gone with the wind', 'Goodfellas', 'Gravity', 'Green Lantern', 'Hard to kill', 'Harry Potter', 'Hellboy', 'Hitman', 'Hulk', 'Hunger Games', 'Inception', 'Interstellar', 'Iron Man', 'John Wick', 'Lilo & Stitch', 'Lord of the Rings', 'Miracle in cell no. 7', 'Mission: Impossible', 'Nobody', 'Pretty Woman', 'Pulp Fiction', 'Puss in boots', 'Roma', 'Saving Private Ryan', 'Schindlers List', 'Shrek', 'Star Wars', 'Taken', 'Taxi Driver', 'Terminator', 'The Dark Knight', 'The Exorcist', 'The Godfather', 'The Matrix', 'Titanic', 'Titanic', 'Tomb Rider', 'Top Gun Maverick', 'Toy Story', 'West Side Story', 'X-men'];

    it('when \'Hitman\' is chosen should return 24', () => {
        const expected = 24;
        const result = jumpSearch(arrayOfMovies, "Hitman");
        expect(result).toEqual(expected);
    });

    it('when \'The Matrix\' is chosen should return 50', () => {
        const expected = 50;
        const result = jumpSearch(arrayOfMovies, "The Matrix");
        expect(result).toEqual(expected);
    });

    it('when \'Avengers\' is chosen should return 4', () => {
        const expected = 4;
        const result = jumpSearch(arrayOfMovies, "Avengers");
        expect(result).toEqual(expected);
    });
});



describe('Test for interpolationSearch', () => {
    const arrayOfInterpolation = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    it('when 80 is chosen should return index: 7', () => {
        const expected = 7;
        const result = jumpSearch(arrayOfInterpolation, 80);
        expect(result).toEqual(expected);
    });

    it('when 10 is chosen should return index: 0', () => {
        const expected = 0;
        const result = jumpSearch(arrayOfInterpolation, 10);
        expect(result).toEqual(expected);
    });

    it('when 40 is chosen should return index: 3', () => {
        const expected = 3;
        const result = jumpSearch(arrayOfInterpolation, 40);
        expect(result).toEqual(expected);
    });
});