function jumpSearch(array, target) {
    const length = array.length;
    let stage = Math.floor(Math.sqrt(length));
    let low = 0;

    while (array[Math.min(stage, length) - 1] < target) {
        low = stage;
        stage += Math.floor(Math.sqrt(length));
        
        if (low >= length) {
            return -1;
        }
    }
    
    while (array[low] < target) {
        low++;
        if (low === Math.min(stage, length)) {
            return -1;
        }
    }
    return array[low] === target ? low : -1;
}