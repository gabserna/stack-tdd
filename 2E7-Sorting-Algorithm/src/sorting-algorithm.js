function sortingAlgorithm(value) {
    let search = false;
    while (!search) {
      search = true;
      for (let i = 0; i < value.length - 1; i++) {
        if (typeof value[i] !== typeof value[i + 1]) continue;
        if (value[i + 1] < value[i]) {
          search = false;
          [value[i], value[i + 1]] = [value[i + 1], value[i]];
        }
      }
    }
    return value;
}