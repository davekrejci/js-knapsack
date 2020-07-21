let Node = require('./Node');

/**
 * Represents the node structure.
 */

let root = new Node(5, 0);

// layer 1
let n1 = new Node(40, 145);
let n2 = new Node(14, 132);
let n3 = new Node(1, 193);
root.childNodes.push(n1,n2,n3);

// layer 2
let n4 = new Node(4, 78);
let n5 = new Node(3, 30);
let n6 = new Node(1, 4);
n1.childNodes.push(n4,n5,n6);

let n7 = new Node(10, 48);
let n8 = new Node(15, 21);
n2.childNodes.push(n7,n8);

let n9 = new Node(5, 12);
let n10 = new Node(12, 150);
n3.childNodes.push(n9,n10);

// layer 3
let n11 = new Node(19, 57);
let n12 = new Node(20, 30);
n4.childNodes.push(n11,n12);

let n13 = new Node(43, 23);
let n14 = new Node(36, 27);
n10.childNodes.push(n13.n14);


module.exports = root;