/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
const transformersMap = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ];
     let forms= transformers.map((transformer)=> transformer.form)
      console.log(forms)
}
transformersMap()



/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
         {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        }
    ]

*/
const transformersFilter = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ]
let team = transformers.filter((transformer)=> transformer.team === 'Autobot')
console.log(team)
}
transformersFilter()



/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
    Autobot: 2,
    Decepticon: 2
}
*/
const reduceTransformers = () => {
    let transformers = [
        {
          name: 'Optimus Prime',
          form: 'Freightliner Truck',
          team: 'Autobot'
        },
        {
          name: 'Megatron',
          form: 'Gun',
          team: 'Decepticon'
        },
        {
          name: 'Bumblebee',
          form: 'VW Beetle',
          team: 'Autobot'
        },
        {
          name: 'Soundwave',
          form: 'Walkman',
          team: 'Decepticon'
        }
      ];
      
      let reduced = transformers.reduce((acc, cur)=>{
            const team = cur.team
            if (acc[team]){
              acc[team]++
            }else{
              acc[team] =1
            }
            return acc
      }, {})
      console.log(reduced)
}
reduceTransformers()

/*

Sum of every positive element
If the given input is an array of numbers, return the total of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
const sumPositiveElement = () => {
    const input = [ 1, -4, 12, 0, -3, 29, -150]
   let total = input.filter(number=>number>0)
    .reduce((acc,cur)=>acc+cur)
    console.log(total)
  }
sumPositiveElement()

/* 
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 }
const medianMean = () => {
    const input = [12, 46, 32, 64]
    let mean = input.reduce((acc, cur)=>(acc+cur))/input.length
    let median= input.sort()
    median = (median[median.length/2] + median[(median.length/2)-1])/2
    
console.log({mean,median})
}
medianMean()

/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
    const input = 'George Raymond Richard Martin';

    let name = input.split(' ').map(letter=>letter[0]).join('')

    console.log(name)
}
nameInitials()


/*
Age difference from the young and old
Find the difference in age between the old and young family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
    const input = [
        {
          name: 'John',
          age: 13
        },
        {
          name: 'Mark',
          age: 56,
        },
        {
          name: 'Rachel',
          age: 45,
        },
        {
          name: 'Nate',
          age: 67,
        },
        {
          name: 'Jeniffer',
          age: 65,
        }
      ];
      
      let ages = input.map(e=>e.age)
        let old = Math.max(...ages)
        let young = Math.min(...ages)
        return [young, old, (old - young)]
}
console.log(ageDifference())


