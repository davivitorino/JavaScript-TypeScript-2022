/* False Values JS analyser expression **SHORT CIRCUIT** */

/*

* false
* 0
* '' "" ``
* null / undefined
* NaN 

*/

// Usando "&&" javascript retornara o primeiro valor falso na expressao com os termos em "false"


console.log('davi' && null)                                    // retornando *null

// Usando "||" javascript retornara o primeiro valor verdadeiro na expressao com os termos "false"

console.log('davi' || 0 || undefined)                           // retornando string
