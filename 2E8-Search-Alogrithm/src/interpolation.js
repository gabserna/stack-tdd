function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && x >= arr[low] && x <= arr[high]) {
      if (low === high) {
        if (arr[low] === x) {
          return low;
        }
        return -1;
      }
      const position = Math.floor(low + ((high - low) / (arr[high] - arr[low])) * (x - arr[low]));
      
      if (arr[position] === x) {
        return position;
      }
      
      if (arr[position] < x) {
        low = position + 1;
      } else {
        high = position - 1;
      }
    }
    return -1;
  }
  
  // Ejemplo de uso
  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const x = 10;
  const result = interpolationSearch(arr, x);
  
  if (result === -1) {
    console.log(`${x} no se encontró en el array`);
  } else {
    console.log(`${x} se encontró en el índice ${result} del array`);
  }
  