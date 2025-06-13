function getMinMove(start: string, target: string, brokenTiles: string[]): number {
  // chess board = 8 x 8, a-h and 1 - 8
  // set border for column and row
  const colMin = "a".charCodeAt(0); // 97
  const colMax = "h".charCodeAt(0); // 104
  const rowMin = 1;
  const rowMax = 8;

  // seperate column and row
  const [startCol, startRow] = start.split("") as [string, string];
  // transform string to uni code num
  const startColCode = startCol.charCodeAt(0);
  const startRowCode = Number(startRow);

  const alternativeMove = [];

  // move of horse
  const moves: [number, number][] = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // analysis next move
  for (const [dc, dr] of moves) {
    // new code
    const newColCode = startColCode + dc;
    const newRowCode = startRowCode + dr;

    // over border
    if (newColCode < colMin || newColCode > colMax || newRowCode < rowMin || newRowCode > rowMax) {
      continue;
    }

    // new position
    const newPosition = String.fromCharCode(newColCode) + String(newRowCode);
    console.log(newPosition);

    // check block
    for (const block of brokenTiles) {
      if (newPosition === block) {
        continue;
      }
    }
    return 1;
  }
  return -1;
}

getMinMove("d6", "h8", ["f6", "f7"]);
