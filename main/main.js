module.exports = function main(inputs) {
   const {distance,parkTime}=inputs
    let price=0
    if(distance<=2)
    {price=(6+time(parkTime));}
    else
        if(distance<=8)
    {price=(6+(distance-2)*0.8+time(parkTime));}
    else
    {price=(6+6*0.8+(distance-8)*1.2+time(parkTime));}
    return Math.round(price);
}
function time(parkTime)
{
   return parkTime*0.25
}
