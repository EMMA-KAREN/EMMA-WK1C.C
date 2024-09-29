
function calculateDemeritPoints(speed)
{
 
//points awarded for exceeding by 5km/s is 1demerit point
let demeritPointsPerExcess =1;

let speedlimit =70 //define the speed limit
// isNaN is used to check if a value is not a numberit returns true if not false its a number
//if we use a string it will output true since its not a number
if(isNaN(speed) || speed< 0)
    {  //<0 if its less it returbs true
    return "invalid speed entered.Please enter a positive number. ";
    }
 const excessSpeed = Math.max(0, speed - speedlimit);
    //the above This calculates the excess speed by subtracting the speedLimit from the speed. 
    //However, it uses Math.max to ensure that the result is never negative.
    // If the speed is less than or equal to the speedLimit, the excess speed will be 0.
 const demeritPoints = Math.ceil(excessSpeed / 5)
    //This calculates the number of demerit points by dividing the excessSpeed by 5 and rounding up to the nearest integer using Math.ceil. 
    //This ensures that even a small excess speed (e.g., 1 km/h) results in at least 1 demerit point
    let output;
 if (speed <= speedlimit) 
    {
      output = "OK";//if condition: If the speed is less than or equal to the speedLimit, the output is set to "OK", indicating that the driver is within the speed limit.
    } else if (demeritPoints >=12)
    {
      output = "License suspended";// the speed is greater than the speedLimit and the demeritPoints are greater than 12, the output is set to "License suspended",
                                   // indicating that the driver has accumulated too many demerit points and their license should be suspended.
    } 
    else {
      output = `Points: ${demeritPoints}`;//This indicates that the driver has exceeded the speed limit but has not accumulated enough demerit points to have their license suspended.

    }
  
    return output;
}
    const speed1 = 65;
    console.log(calculateDemeritPoints(speed1)); 

    const speed2 = 80;
    console.log(calculateDemeritPoints(speed2));// is because the driver's speed speed2 is 80 km/h, which exceeds the speed limit of 70 km/h. The calculation for demerit points is as follows:
                                                // Excess speed: 80 km/h - 70 km/h = 10 km/h.
                                              //  Demerit points: 10 km/h / 5 km/h/point = 2 points.
                                                   // Therefore, the driver earns 2 demerit points for exceeding the speed limit by 10 km/h.

     const speed3 = 95;
     console.log(calculateDemeritPoints(speed3)); 

     const speed4 = 140;
     console.log(calculateDemeritPoints(speed4)); 