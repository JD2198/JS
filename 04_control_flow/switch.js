const month = "March"

switch(month){
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;       // if we will not use break then afteer getting result also all statemnet will  eecute, except default 
    case "April":
        console.log("April");
        break;
    default:
        console.log("Not found");       
}