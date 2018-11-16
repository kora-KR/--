function gradTip(c) {
  if(c == "A") {
    return  "风险极小"
  }
  else if(c == "B") {
    return "风险低于平均水平"
  }
  else if (c == "C") {
    return "风险属于平均水平"
  }
  else if (c == "D") {
    return "风险高于平均水平"
  }
  else if (c == "F") {
    return "风险很大"
  }
  else if (c == "N") {
    return "风险无法评定"
  }
}

module.exports = {
  gradTip
}
