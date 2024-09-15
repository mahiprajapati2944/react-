export default function ColorChange(){
    
        var a=["red","pink","orenge","yellow","blue","purple","green"];
        var b =0;
        var back1 = ()=>{
        document.body.style.backgroundColor =a[b];
       if(b>7){
        b=0;
       }
        b++; 
    }

    var BackImg =()=>{
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg)"
    }
      
    return<>
    <button onClick={back1}>Color Change</button>
    <button onClick={BackImg}>wallpaer</button>

    
    </>
}