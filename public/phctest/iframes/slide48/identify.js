var correct = ['E','A','D','B','C'];

function ca() {
    var amountofQ = $('.selectpicker').length;

    for (i = 0; i < amountofQ; i++) // cycles through each inputfield
    {
        var inputnum = i + 1;
        var theinput = $('#q' + inputnum + ' :selected');

        if (theinput.length > 1) //checks if the inputfield has multiple values
        {
            var answer = [];

            for (x = 0; x < theinput.length; x++) { //cycles through multiple values on one input field
                var tempanswer = theinput[x].value;
                answer += tempanswer;
            }
            
            if (answer == correct[i]){
                console.log("SUCCESS1");
                console.log(i);
                $(".dropdown-toggle").eq(i).css({"background-color":"#5cb85c"});
                
            } else {
                console.log("FAIL");
                 console.log(i);
                $(".dropdown-toggle").eq(i).css({"background-color":"#d9534f"});
            }

        } else if (theinput.length == 1) {
            var answer = theinput[0].value; // if only one value the answer is here
            
            if (answer == correct[i]){
                console.log("SUCCESS2");
                console.log(i);
                $(".dropdown-toggle").eq(i).css({"background-color":"#5cb85c"});
            } else {
                console.log("FAIL");
                $(".dropdown-toggle").eq(i).css({"background-color":"#d9534f"});
            }
        }

    }

}
