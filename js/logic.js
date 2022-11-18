var text= document.getElementById('text');
var rest= document.getElementById('result');

var number="";
var numberI=0;

function DecToHex(){
    var total="";
    number=""
    numberI=0;
    number=text.value;    
    numberI=parseInt(number);
    if(!isNaN(numberI)){
        if(numberI>0){
            while(numberI>0){
                if(numberI%16<10)
            total=parseInt(numberI%16)+total;
                else{
                     if(numberI%16==10)total="A"+total;
                    else if(numberI%16==11)total="B"+total;
                    else if(numberI%16==12)total="C"+total;
                    else if(numberI%16==13)total="D"+total;
                    else if(numberI%16==14)total="E"+total;
                    else if(numberI%16==15)total="F"+total;
                }
            numberI=parseInt(numberI/16);
        }
        rest.innerHTML=total;
        }
        else
            rest.innerHTML='0';    
    }else
        rest.innerHTML='Something is wrong with the input';
}
function HexToDec(){
    var total="";
    number=""
    numberI=0;
    var ch="";
    var pos=0;
    number=text.value;    
            for(var i=(number.length)-1;i>=0;i--){
            ch=number.charAt(i);
            if(ch=='A')ch="10";
            else if(ch=='B')ch="11";
            else if(ch=='C')ch="12";
            else if(ch=='D')ch="13";
            else if(ch=='E')ch="14";
            else if(ch=='F')ch="15";

            numberI=numberI+(parseInt(ch)*(Math.pow(16,pos)));
            pos++;
        }
        rest.innerHTML=numberI;
}

    