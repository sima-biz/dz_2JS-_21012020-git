

//////////////////////////////////////////////////////////////////////
///////////пользователю предлагают ввести один любой символ///////////
//////////////////////////////////////////////////////////////////////




let input_datax = prompt("ВВИДИТЕ ОДИН ЛЮБОЙ СИМВОЛ")
if (input_datax == null) { // нет никакого обьектного значения
  alert("Вы отказались")
} else {
  if (input_datax.length > 1 || input_datax.length === 0) { // сравниваем  длинну строки или отсутствие ввода
    input_datax = " " // присваиваем строку из одного пробела
    console.log(input_datax)
  } else {
    console.log(input_datax.toLowerCase()) // возвращает символы строки в нижнем регистре
  } 

  switch (input_datax) {
    case "a": 
    case "e": 
    case "o":
      alert(input_datax.toUpperCase())  // возвращает символы строки в верхнем регистре
      break
    case "x": 
    case "y":
      alert(input_datax.repeat(2)) // метод повторений строки
      break
    case "s":
    case "d":
    case "g":
    case "m":
      let numbplus = 0
      let resuplus = 0
      for (let i = 0; i < 2; i++ ) {
        let numb = Math.random() //генератор случайных чисел
        // console.log(numb)
        numbplus += numb  
      }
      if (Math.trunc(numbplus) !== 0) {  // функция возращае целую часть числа дробную удалят
        resuplus = numbplus  // ? resuplus = Math.trunc(numbplus)
        console.log(resuplus)
        alert(resuplus)
      } else {
        resuplus = 1
        console.log(resuplus)
        alert(resuplus)
      } 
      break
    case " ":
      console.log(Boolean(" ")) //преобразование в булевый тип
      break  
    default:
      let resulmax = 0
      for (let i = 0; i < 3; i++) {
        let numb = Math.random()
        console.log(numb + " - случайное число " + (i + 1))
        resulmax = Math.max(resulmax, numb) // находим максивальное значение
      }
      console.log(resulmax + " - максмальное случайное число")
      alert("Максмальное случайное число   " + resulmax)
  }
}










