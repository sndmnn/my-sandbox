export function range(start, stop, step = 1) {
  if (arguments.length === 1) {
    return [...Array(arguments[0]).keys()];
  }

  if ((start > stop && !(step < 0)) || (start < stop && !(step > 0))) {
    step *= -1;
  }

  let returnArray = [];

  for (let i = start; (i - start) * (i - stop) <= 0; i += step) {
    returnArray.push(i);
  }

  return returnArray;
}
