const radious =[3,3,30,5,50]

const calculateArea = function(radious){
    const output =[]
    radious.forEach(function(i) {output.push(Math.PI*i*i) })
    return output
    }

console.log(calculateArea(radious))
