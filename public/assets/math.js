let inRangeExclusive = (x, min, max) => {
  return (Number.isInteger(x) & min < x & x < max)
}