// Given N axis-aligned rectangles where N > 0, determine if they all together form an exact cover of a rectangular region.
// Each rectangle is represented as a bottom-left point and a top-right point. For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).

// Example 1:
// rectangles = [
//   [1,1,3,3],
//   [3,1,4,2],
//   [3,2,4,4],
//   [1,3,2,4],
//   [2,3,3,4]
// ]
// Return true. All 5 rectangles together form an exact cover of a rectangular region.
 
// Example 2:
// rectangles = [
//   [1,1,2,3],
//   [1,3,2,4],
//   [3,1,4,2],
//   [3,2,4,4]
// ]
// Return false. Because there is a gap between the two rectangular regions.
 
// Example 3:
// rectangles = [
//   [1,1,3,3],
//   [3,1,4,2],
//   [1,3,2,4],
//   [3,2,4,4]
// ]
// Return false. Because there is a gap in the top center.
 
// Example 4:
// rectangles = [
//   [1,1,3,3],
//   [3,1,4,2],
//   [1,3,2,4],
//   [2,2,4,4]
// ]
// Return false. Because two of the rectangles overlap with each other.

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const Rectangle = class {
    constructor(coordinates) {
        this.bottomLeft = [coordinates[0], coordinates[1]];
        this.topRight = [coordinates[2], coordinates[3]];
        this.bottomRight = [coordinates[0], coordinates[3]];
        this.topLeft = [coordinates[2], coordinates[1]];
        this.area = (this.topRight[1] - this.bottomLeft[1]) * (this.topRight[0] - this.bottomLeft[0]);
    }
}

const addPointIfEmpty = (pointsMap, point) => {
    let pointKey = point[0] + ' ' + point[1];
    if (pointsMap.has(pointKey))
        pointsMap.delete(pointKey);
    else pointsMap.add(pointKey);
};

const getBoundingRect = (rectangles) => {
    let boundingBottomLeft = [Number.MAX_VALUE, Number.MAX_VALUE];
    let boundingTopRight = [0, 0];

    rectangles.forEach(rectangle => {
        if (rectangle.bottomLeft[0] < boundingBottomLeft[0])
            boundingBottomLeft[0] = rectangle.bottomLeft[0]
        if (rectangle.bottomLeft[1] < boundingBottomLeft[1])
            boundingBottomLeft[1] = rectangle.bottomLeft[1]
        if (rectangle.topRight[0] > boundingTopRight[0])
            boundingTopRight[0] = rectangle.topRight[0]
        if (rectangle.topRight[1] > boundingTopRight[1])
            boundingTopRight[1] = rectangle.topRight[1]
    });

    return new Rectangle([boundingBottomLeft[0], boundingBottomLeft[1], boundingTopRight[0], boundingTopRight[1]]);
};

var isRectangleCover = (rectangles) => {
    let rectanglesArray = [];
    rectangles.forEach(rectanglePoints => {
        rectanglesArray.push(new Rectangle(rectanglePoints));
    });

    let boundingRect = getBoundingRect(rectanglesArray);
    let rectanglesTotalArea = rectanglesArray.map(el => el.area).reduce((acc, el) => acc + el);
    if (boundingRect.area != rectanglesTotalArea)
        return false;

    let pointsMap = new Set();
    rectanglesArray.forEach(rectangle => {
        addPointIfEmpty(pointsMap, rectangle.topLeft);
        addPointIfEmpty(pointsMap, rectangle.topRight);
        addPointIfEmpty(pointsMap, rectangle.bottomLeft);
        addPointIfEmpty(pointsMap, rectangle.bottomRight);
    });

    if (pointsMap.size != 4 ||
        !pointsMap.has(boundingRect.topLeft[0] + ' ' + boundingRect.topLeft[1]) ||
        !pointsMap.has(boundingRect.topRight[0] + ' ' + boundingRect.topRight[1]) ||
        !pointsMap.has(boundingRect.bottomLeft[0] + ' ' + boundingRect.bottomLeft[1]) ||
        !pointsMap.has(boundingRect.bottomRight[0] + ' ' + boundingRect.bottomRight[1]))
        return false;
    else return true;
};