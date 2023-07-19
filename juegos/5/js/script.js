
function wordIsPositive()
{
    var rn = Math.round(Math.random()*1)
    if(rn==1)
        return true
    else
        return false
}
function randomNumber(opc, valActual, valMin)
{
    if (!opc)
            {  
                var num = -valActual + valMin;
                var rn=Math.round(Math.random()*num)
                return rn
            }
            else 
            {
                var rn=Math.round(Math.random()*2000)
                return rn
            }
}
function wordGenerator()
{
   
    var wordNumber=[]
    var rn = Math.round(Math.random()*7)
    var isPositive = wordIsPositive()
    if(wordIsPositive())
    {
        switch(rn)
        {
            case 1:
                wordNumber[0] = "positive1";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 2:
                wordNumber[0] = "positive2";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 3:
                wordNumber[0] = "positive3";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 4:
                wordNumber[0] = "positive4";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 5:
                wordNumber[0] = "positive5";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 6:
                wordNumber[0] = "positive6";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 7:
                wordNumber[0] = "positive7";
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            default:
                wordNumber[0] = "super secret message1"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
        }
        document.getElementById("data-chat").innerHTML=""+wordNumber[0]
    }
    else
    {
        switch (rn)
        {
            case 1:
                wordNumber[0] = "negative1"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 2:
                wordNumber[0] = "negative2"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 3:
                wordNumber[0] = "negative3"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 4:
                wordNumber[0] = "negative4"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 5:
                wordNumber[0] = "negative5"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 6:
                wordNumber[0] = "negative6"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            case 7:
                wordNumber[0] = "negative7"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
            default:
                wordNumber[0] = "super secret message2"
                wordNumber[1] = randomNumber(isPositive, 0, 0)
                break
        }
        document.getElementById("data-chat").innerHTML=""+wordNumber[0]
    }
}

