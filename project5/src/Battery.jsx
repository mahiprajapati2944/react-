import "./index.css";

var BPercent ="";
navigator.getBattery().then((bat)=>BPercent = bat.level*100)
//var BPercent =51;

var condition ="";
var col={};
if(BPercent <= 20 && BPercent >= 1){
    condition =BPercent + "%";
    col.color="red";
    col.backgroundColor="yellow";
} 

else if(BPercent >= 21 && BPercent <= 50){
    condition = BPercent + "%";
    col.color="Orange";
    col.backgroundColor="yellow";
}

else if(BPercent>=51 && BPercent <=100){
    condition =BPercent + "%";
    col.color="green";
    col.backgroundColor="yellow";
}

function Battery123(){
    return<>
    <h1 className="bg"> Your Battery is <span style={col}> {condition}{BPercent}%
    </span></h1>
    </>

}

export {Battery123}