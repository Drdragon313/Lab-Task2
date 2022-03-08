let sandwitch_calculator1 = function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "need more slices";
    }
    }
    console.log("for 12 bread slices sandwitch made: ",sandwitch_calculator1(12));
    function sandwitch_calculator(bread,cheese){
        if(bread % 2 == 0 && cheese > 1 )
        {
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1)
        {
            return 1;
        }
        else
        {
            return "need more bread";
        }
    }
    console.log("for 17 bread slices and 1 cheese slice: ",sandwitch_calculator(17,1))