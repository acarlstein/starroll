let dices = new Map()
let dicesFrom = (points) => {  
  if (dices.has(points)) return dices.get(points)
  let original = points;
  let countDs = 0
  for(;points - 3 >= 0; points -= 3, countDs++);
  let result = `${countDs}D + ${points}`
  dices.set(original, result)
  return result
}