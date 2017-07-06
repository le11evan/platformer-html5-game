var test = require('tape');
var Block = require('../js/block');

test('point is inside method', t => {
    var block = new Block(30, 30);
    //set position to (0, 0)
    block.x = 0;
    block.y = 0;
    t.equal(block.pointIsInside({x: 5, y: 5}), true, 'point is inside block');
    t.equal(block.pointIsInside({x: -1, y: 5}), false, 'x outside, y inside > point outside');
    t.equal(block.pointIsInside({x: 5, y: -1}), false, 'x inside, y outside > point outside');
    t.equal(block.pointIsInside({x: -1, y: -1}), false, 'x outside, y outside > point outside');
    t.end();
});
