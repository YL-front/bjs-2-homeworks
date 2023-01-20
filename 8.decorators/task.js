function cachingDecoratorNew(func) {
  debugger;
  let cache = [];
  function wrapper (...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (!objectInCache) {
      console.log('Из кэша: ' + cache[hash]);
      return 'Из кэша: ' + cache[hash];
    }

    let result = func(...args);
    cache.push({'hash': hash, 'value': result});
    if(cache.length > 5) {
      cache.shift;
    }
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result;
  }
  return wrapper;
}

// const addThree = (a, b, c) => (a + b + c); 
// const upgradedAddThree = cachingDecoratorNew(addThree);
// upgradedAddThree(1, 2, 3); 
// upgradedAddThree(1, 2, 3); 
// upgradedAddThree(2, 2, 3); 
// upgradedAddThree(3, 2, 3); 
// upgradedAddThree(4, 2, 3); 
// upgradedAddThree(5, 2, 3); 
// upgradedAddThree(6, 2, 3); 
// upgradedAddThree(1, 2, 3);



function debounceDecoratorNew(func, time) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), time);
    }
  }
  return wrapper;
}