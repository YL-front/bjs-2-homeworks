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
    //cache.push({'hash': hash, 'value': result});
    cache.push({hash, result});
    if(cache.length > 5) {
      cache.shift();
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
    }
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), time);
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;
  wrapper.count = 0;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), ms);
    wrapper.count++;
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;
  wrapper.count = 0;
  wrapper.allCount = [];

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), ms);
    wrapper.count++;
  }
  wrapper.allCount.push(count);
  
  return wrapper;
}