
const recursiveSearch = (string, subStrings) => {
  if (!string.length)
  	return subStrings
  else {
  	let tmp = ''
    let i = 0
    while (!!string[i]) {
    	let char = string[i].charCodeAt(0)
    	let charPlusOne = !!string[i + 1] ? string[i + 1].charCodeAt(0) : 0
      tmp += string[i++]
      if (charPlusOne < char)
        break
    }
    subStrings.push(tmp)
    return recursiveSearch(string.substr(i), subStrings)
  }
}

const tri_alpha = (string) => {
	let subStrings = recursiveSearch(string, [])
  return subStrings.reduce(function (a, b) { return a.length >= b.length ? a : b; });
}

console.log(tri_alpha('azcbobobegghakl') === 'beggh', )
console.log(tri_alpha('abcbcd') === 'abc')
console.log(tri_alpha('okdrbtqat') === 'dr' )
console.log(tri_alpha('wmkjpjcvngmczm') === 'jp')
console.log(tri_alpha('owflwswxdafpk') === 'flw')
console.log(tri_alpha('ouirtbbqtcuvocpgl') === 'bbqt')
console.log(tri_alpha('kxyrtmgprxulhpwpsxl') === 'gprx')
console.log(tri_alpha('mihvhqpvuuhyw') === 'hv')
console.log(tri_alpha('baisljlraylxnit') === 'ais')
console.log(tri_alpha('abcdefghijklmnopqrstuvwxyz') === 'abcdefghijklmnopqrstuvwxyz')
console.log(tri_alpha('gqycanhnpdquago') === 'gqy')
console.log(tri_alpha('bkcnnjvgorx') === 'gorx')
console.log(tri_alpha('vlgsikhllqizthfkqthqloy') === 'hllq')
console.log(tri_alpha('zyxwvutsrqponmlkjihgfedcba') === 'z')
console.log(tri_alpha('ocsrbpzwhamrvzy') === 'amrvz')
