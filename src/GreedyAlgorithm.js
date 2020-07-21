/**
 * Represents the algorithm used for greedy optimalization.
 */
class GreedyAlgorithm{
    /**
     * @param {Node} rootNode - The root node.
     * @param {Number} resources - The number of resources at disposal.
     */
    constructor(rootNode, resources){
        this.root = rootNode;
        this.resources = resources;
        this.currentNodes = [];
        this.optimumValue = 0;
    }
    /**
     * Finds the optimum value for given node structure.
     * @param {Boolean} verbose - The option whether to log variables in between steps.
     * @return {Number} The optimum value found.
     */
    findOptimum(verbose){
        // Add root value to optimumValue and root children to current (candidate) nodes
        this.optimumValue += this.root.value;
        this.currentNodes.push(...this.root.childNodes);
        if (verbose) {
            console.log(`Root node: { value: ${this.root.value}, cost: ${this.root.cost} }`);
            console.log(`Available resources: ${this.resources}`);
            console.log(`Optimum value: ${this.optimumValue}\n`);
        }
        // Loop through the rest of the nodes while you have resources
        while(this.resources > 0){

            // 1. Find best value/cost ratio for current available nodes.
            let bestRatio = Math.max.apply(Math, this.currentNodes.map(node => node.ratio));
            let nextNode = this.currentNodes.find(node => node.ratio === bestRatio);
            if (nextNode.cost > this.resources) {
                if (verbose) console.log(`Not enough resources left for next node.`);
                break;
            }

            // 2. Add Node value to optimumValue and reduce resources
            this.optimumValue += nextNode.value;
            this.resources -= nextNode.cost;
            if (verbose) {
                console.log(`Next node: { value: ${nextNode.value}, cost: ${nextNode.cost} }`);
                console.log(`Available resources: ${this.resources}`);
                console.log(`Optimum value: ${this.optimumValue}\n`);
            }

            // 3. Add child nodes to current nodes and remove added node
            this.currentNodes = this.currentNodes.filter(node => node !== nextNode);
            this.currentNodes.push(...nextNode.childNodes);
        }

        return this.optimumValue;
    }
}

module.exports = GreedyAlgorithm;