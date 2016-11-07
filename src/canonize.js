export default function canonize(fullname) {

  for ( var i = 0; i < 10; i++) {
    if ( fullname.indexOf(i) !== -1 )
      return('Invalid fullname')
  } // проверка на наличие цифр в именах

  const replaceSpaces = new RegExp( '  +' )
  fullname = fullname.trim().replace(replaceSpaces, ' ').replace(replaceSpaces, ' ')
  // убираем лишние пробелы

  fullname = fullname.toLowerCase()
  fullname = fullname.replace(fullname.charAt(0), fullname.charAt(0).toUpperCase())
  const firstSpace = fullname.indexOf(' ')
  fullname = fullname.replace(fullname.charAt(firstSpace + 1), fullname.charAt(firstSpace + 1).toUpperCase())
  const secondSpace = fullname.indexOf(' ', firstSpace + 1)
  fullname = fullname.replace(' ' + fullname.charAt(secondSpace + 1), ' ' + fullname.charAt(secondSpace + 1).toUpperCase())
  // первая буква в слове вехнего регистра, остальные нижнего

  if ((fullname.split(' ').length > 3) || (fullname == ''))
    return('Invalid fullname')
  // количество слов не может быть больше 3х

  const test = new RegExp( '[^a-zA-Zа-яА-Я ó1-9\']' )
  const testMatch = test.exec(fullname);
  if (testMatch)
    return('Invalid fullname')
  // исключение возможности прохождения строк с незарегистрированными символами

  const FIO = new RegExp( '([^ ]+)?\d*? ?([^ ]+)? ?([A-ZА-Я][a-zа-яó\']*)' )
  const userName = fullname.match(FIO)

  if ( userName[2] ) {
    return(`${userName[3]} ${userName[1].charAt(0)}. ${userName[2].charAt(0)}.`)
  }  else
      if ( userName[1] )
        return(`${userName[3]} ${userName[1].charAt(0)}.`)
          else return (userName[0])
}
