const containsDuplicate = nums => {
    const hash = new Map();
  
    for (const n of nums) {
        console.log(hash.get(n));
      if (hash.get(n) !== undefined) return true;
      hash.set(n, true);
      console.log(hash);
    }
  
    return false;
  };

  let nums = [1,2,3,4];
  console.log(containsDuplicate(nums))