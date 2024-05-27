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
            document.getElementById('sum_digits').innerHTML = `Sum_Of_Array = [${sum_arr}]`;

        }

        
        //Calculate Mean of Elements Of Array
        function mean_OfNumbers()
        {
            let mean_Array = JSON.parse(document.getElementById('meanNumbers').value);
            let mean_arr = mean_Array.reduce( (acc,item) => acc + item/mean_Array.length, 0)
            document.getElementById('mean_digits').innerHTML = `Mean_Of_Array = [${mean_arr}]`;

        }

        //Calculate median numbers
        function median_OfNumbers() {
            const median_Array = JSON.parse(document.getElementById('medianNumbers').value);
            const sortedArr = [...median_Array].sort((a, b) => a - b);
            const mid = Math.floor(sortedArr.length / 2);
            const median = sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
            document.getElementById('median_digits').innerHTML = `Median_Of_Array = [${median}]`;
        }
        
        document.getElementById('calculateMedianButton').addEventListener('click', median_OfNumbers);
        
        
        

        //get initials of string
        function initials_String() {
            const name = document.getElementById('initials').value.trim(); 
            if ((name.startsWith('"') && name.endsWith('"')) || (name.startsWith('[') && name.endsWith(']'))) {
                const cleanedName = name.slice(1, -1);
                var initials = cleanedName.split(" ").map((char) => {return char[0]; }).join("");
                document.getElementById('initials_text').textContent = "Initials: \"" + initials + "\"";
            } else {
                var initials = name.split(" ").map((char) => {return char[0]; }).join("");
                document.getElementById('initials_text').textContent = "Initials: \"" + initials + "\"";
            }
        }

        
        //Find Difference between oldest age and youngest age
       function largest_InAge()
       {
            const oldest_Age =JSON.parse(document.getElementById('ageOldest').value);
           const youngest_Age = JSON.parse(document.getElementById('ageYoungest').value);
          
           let max = Math.max(...oldest_Age);
            //  if(max < 40)
            //      {
            //     document.getElementById('oldest_text').innerHTML = "Give here greater than 40 ages!";
            //     document.getElementById("oldest_text").style.color = "red";
            //     document.getElementById("oldest_text").style.fontSize = "larger";
            //     }else{
                    document.getElementById('oldest_text').innerHTML = "Your Family Oldest Age is =" + " " + max;
                //}
            
                let min = Math.min(...youngest_Age);
            // if(min > 40)
            //     {
               
            //     document.getElementById('youngest').innerHTML = "Give here less than 40 ages!";
            //     document.getElementById("youngest").style.color = "red";
            //     document.getElementById("youngest").style.fontSize = "larger";
            //     }else{
                    document.getElementById('youngest').innerHTML = "Your Family Youngest Age is =" + " " + min;
               // }
            
            const difference_Age = max - min;
            document.getElementById('result_text').innerHTML = "The Difference In Age Is =" + " " + difference_Age;
       }


       //find value that greater than 5
       function greaterThan_Five()
       {
       let given_Array = JSON.parse(document.getElementById('greater_five').value);
       let updatedArr = given_Array.slice().filter(val => val >= 5);
       document.getElementById('greater_text').innerHTML = "The numbers that greater than or equal to 5 are ="+ " "+updatedArr;

       }
        
       //find even numbers
       function even_Numbers22()
       {
        let even_Array = JSON.parse(document.getElementById('even_nums').value);
       let resulted = even_Array.slice().filter(val => val%2 === 0);
       document.getElementById('evennumbers_text').innerHTML = "The numbers that greater than or equal to 5 are ="+ " "+resulted;
       }
        
      
        

    
        
        
        
        
          
 
  

        


  
    
