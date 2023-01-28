function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper (...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (!objectInCache) {
      console.log('Из кэша: ' + objectInCache.value);
      return 'Из кэша: ' + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash, result});
    if(cache.length > 5) {
      cache.shift();
    }
    console.log('Вычисляем: ' + result);
    return 'Вычисляем: ' + result;
  }
  return wrapper;
}



function debounceDecoratorNew(func, time) {
  let timer = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    allCount++;
    if (timer === null) {
      wrapper.count++;
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => { 
      func(...args); 
      wrapper.count++;
    }, time);
  }
  return wrapper;
}