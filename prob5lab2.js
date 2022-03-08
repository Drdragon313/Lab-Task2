var cal_avg_and_highest = function()
{
    var myarray =  new Array();
    var sum = 0;
    for(var i = 0; i<arguments.length ; i++)
    {
        sum = sum + arguments[i];
    }
    myarray.push(sum/arguments.length);
    myarray.push(Math.max.apply(Math,arguments));
    return myarray;
     
}
var result = cal_avg_and_highest(1,9,70,210,64,12,33,313);
console.log("Average is : ",result[0]," and highest is: ",result[1]);