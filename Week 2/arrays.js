let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The new value of the array is:" + ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']);
console.log(favoriteAnimals);
console.log("The array has a length of:" + "5");
console.log(favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + 1);
console.log(favoriteAnimals.indexOf('meerkat'));
favoriteAnimals.splice(1, 1);
console.log(favoriteAnimals);