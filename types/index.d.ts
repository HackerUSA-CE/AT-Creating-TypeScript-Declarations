declare module 'lodash'{
  // multiplication only works on numbers
  function multiply(multiplier: number, multiplicand: number): number
  
  // the below is an example of function overloading
  function reverse(arr:string[]):string[]
  function reverse(arr:number[]):number[]
  // using the generic below replaces the need for function overloading.
  // function reverse<T>(arr:T[]):T[]

  // union type can be used for an array with multiple types
  function dropRight(arr:(string|number)[], dropped: number):(string|number)[]
}

