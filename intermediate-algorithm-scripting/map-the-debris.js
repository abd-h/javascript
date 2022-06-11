/*
    Map th Debris 
    Return a new array that transforms the elements' average altitude into  their orbital periods (in seconds). 

    the array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

    You can read about orbital periods on Wikipedia.

    The values should be rounded to the nearest whole number. The body being orbited is earth.

    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418kms-2.
*/

    function orbitalPeriod(arr) {
        const GM = 398600.4418;
        const earthRadius = 6367.4447;       
        return arr.reduce((a, b) => {
            let t = Math.round(2*Math.PI * Math.sqrt(Math.pow((earthRadius + b.avgAlt), 3) / GM))
            delete b.avgAlt;
           b.orbitalPeriod = t;
           a.push(b)
           return a
        }, []);
    }
    console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //  returns [{name: "sputnik", orbitalPeriod: 86400}].

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])); //  return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].