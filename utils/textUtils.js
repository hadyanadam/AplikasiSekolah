export const capitalizeText = (text) => (text.charAt(0).toUpperCase() + text.slice(1))

export const masaTenggangText = (datetime) => {
  const totalDayInMonth = new Date(datetime.slice(0,4), datetime.slice(5,7), 0)
  const dayCalc = Math.abs((parseInt(datetime.slice(8,10)) + 7))
  const rawResult = () => {
    const calculate = Math.abs(parseInt(dayCalc) - parseInt(totalDayInMonth.getDate()))
    if (parseInt(totalDayInMonth.getDate()) < parseInt(dayCalc)){
        return datetime.slice(0,4) + '-' + (parseInt(datetime.slice(5,7)) + 1).toString() + '-' + calculate.toString()
      }
    return datetime.slice(0,4) + '-' + datetime.slice(5,7) + '-' + calculate.toString()
  }
  return rawResult()
}