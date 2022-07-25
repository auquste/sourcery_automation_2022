const isTriangle = require('./isTriangle');

function isRightTriangle(a, b, c) {
    return isTriangle(a, b, c) && ((a*a == b*b + c*c) || (b*b == a*a + c*c) || (c*c == a*a + b*b));
}

module.exports = isRightTriangle;