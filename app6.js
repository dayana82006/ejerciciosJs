

/* comparar dos conjuntos */
function sonIguales(data, data2) {
    const dataS1 = new Set(data);
    const dataS2 = new Set(data2);
  
    if (dataS1.size !== dataS2.size) 
       return false;
  
    for (let validateData of dataS1) {
      if (!dataS2.has(validateData)) {
        return false;
      }
    }
    return true;
  }
  sonIguales([1, 2, 3], [3, 6, 1]);