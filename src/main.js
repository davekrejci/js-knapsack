let root = require('./nodeStructure');
let GreedyAlgorithm = require('./GreedyAlgorithm');
let resources = 500;

let ga = new GreedyAlgorithm(root, resources);
let optimum = ga.findOptimum(true);
console.log(`Optimum value found is: ${optimum}`);





