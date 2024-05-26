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

    //double the array numbers
    const original_array = [2,3,4,5,6];
    document.getElementById('orignalarr').innerHTML = "The array is " + " " + original_array;

    const double_array = original_array.map(doubleNumbers);
    document.getElementById('doublearr').innerHTML = double_array;

    function doubleNumbers(num){
       return num*2;
    }

    //integer array  to string array
    
        document.addEventListener('DOMContentLoaded', function() {
            var arry = [3, 5, 7, 9];
            // Convert each element of the array to string with double quotes
            let string_arr = arry.map(num => '"' + num + '"');
            document.getElementById('numbersArray').innerHTML = "Original Array: [" + arry.join(', ') + "]";
            document.getElementById('stringArray').innerHTML = "String Array: [" + string_arr.join(', ') + "]";
        });


        //convert each element of array to uppercase and print
        const names = ['John', 'Jane', 'Doe'];
        document.getElementById('lowerCase').textContent = names;
        upper_case = names.map(f=>
            { 
                return f.toUpperCase(); 
            
            });
        // console.log(upper_case);
        document.getElementById('upperCase').textContent =  `upperCase = ${JSON.stringify(upper_case)}`;
     

        //magic thing, remove first element and add the given element
        var ingredients = [ "bread", "cheese", "ham" ];

        ingredients[0] = "whole bread";
    
        console.log(ingredients);

        //squre the element of array
        function squareResult()
        {
            let square_Array = JSON.parse(document.getElementById('square').value);
            let square_arr = square_Array.map( (num) => num * num);
            document.getElementById('squre_result').innerHTML = `squareArray = [${square_arr}]`;

        }


        //sum the elements of array and print
        function sumNumbers()
        {
            let sum_Array = JSON.parse(document.getElementById('sum_Num').value);
            let sum_arr = sum_Array .filter((num) => num > 0).reduce( (acc , num1) => acc + num1, 0 );
            document.getElementById('sum_digits').innerHTML = `squareArray = [${sum_arr}]`;

        }

        
           
   

  
    
