function maxData()
{
    let data = parseFloat(document.getElementById('celsius').value);
    let input = (data * 9 / 5) + 32
    
    document.getElementById('celsius2').value= input;
}

//Soccer Cup list
var num22 = "";
for(i=2022; i<=2050; i+=4)
    {
        num22 += i + "<br>"
    }
    document.getElementById('soccerCup').innerHTML = num22;

    //Show student Bio that pass or fail
    function studentResult(){
        let absenceStudent = parseInt(document.getElementById('absence').value);
        let firstGrade = parseFloat(document.getElementById('grade1').value);
       let secondGrade = parseInt(document.getElementById('grade2').value);
        let percentage1 = (firstGrade+secondGrade)/2;
        let absent = ((20 - absenceStudent) / 20) * 100;
        if (percentage1 >= 6.5 && absent >= 70) {
            document.getElementById('showResult').innerHTML = "You are Clear your Current Stage";
        } else
        if(percentage1 >= 6.5 && absent < 70){

            document.getElementById('showResult').innerHTML = "You are Fail Due to Low Absenty";
        }else
        if(percentage1 < 6.5 && absent >= 70){
            document.getElementById('showResult').innerHTML = "You are Fail Due to Low Grade";
        }else
        if(percentage1 < 6.5 && absent < 70){

            document.getElementById('showResult').innerHTML = "You are Not Clear Any Stage! We Are Very Sorry";
        }
        
    }
  
    
