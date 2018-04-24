function theBeatlesPlay(arrMusicians, arrInstruments){
  var arrX =[]
  for (var i=0; i < arrMusicians.length ; i++ )
    {
      arrX.push(arrMusicians[i] + ' plays ' + arrInstruments[i])
    }
  return arrX
}



function johnLennonFacts(arrFacts){
  var y = 0
  var arrStrings = []
  while(y < arrFacts.length){
    y++
    arrStrings.push(arrFacts[y] + '!!!')
  }
  return arrStrings
}