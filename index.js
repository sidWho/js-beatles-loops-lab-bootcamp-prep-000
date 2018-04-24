function theBeatlesPlay(arrMusicians, arrInstruments){
  var arrX =[]
  for (var i=0; i < arrMusicians.length ; i++ )
    {
      arrX.push(arrMusicians[i] + arrInstruments[i])
    }
  return arrX
}