/*
Random Name Selector 
*/

const s = selector => document.querySelector(selector);





//Function that adds items to array
function appendToArray(string) {
    names[names.length] = string;
}


function stringCheck(elem) {
    if (elem != "") {
        appendToArray(elem);
    }
}


$(document).ready(function () {

    let names = [];

    var counter = 2;

    $("#addButton").click(function () {

        s("#message").textContent = "";

        if (counter > 10) {
            s("#message").textContent = "Only 10 names allowed!";
            return false;
        }

        var newTextBoxDiv = $(document.createElement('div'))
            .attr("id", 'TextBoxDiv' + counter);

        newTextBoxDiv.after().html('<label>Enter Name ' + counter + ': </label>' +
            '<input type="text" name="textbox' + counter +
            '" id="name' + counter + '" value="" >');


        newTextBoxDiv.appendTo("#TextBoxesGroup");

        counter++;


    });

    $("#removeButton").click(function () {
        s("#message").textContent = "";
        if (counter == 2) {
            //s('#name' + i).value = "";
            s("#message").textContent = "Can't remove anymore names!";
            return false;
        }

        counter--;

        $("#TextBoxDiv" + counter).remove();
        $("#name" + counter).remove();

    });



    $("#choose").click(function processEntries() {
        names = [];



        for (let i = 1; i < counter; i++) {
            var user_val = s("#name" + i).value;
            if (user_val != "") {
                names.push(user_val);
            }


            if (names.length > 0) {

                console.log(names);
                let randomItem = names[Math.floor(Math.random() * names.length)];
                s('#results').textContent = randomItem;

            }
        }





    });

    $("#clear").click(function clearEntries() {
        s('#results').textContent = "";
        s("#message").textContent = "";
        //Clearing array: 
        names.length = 0;
        s("#name1").select();

        for (let i = 1; i < counter; i++) {
            s('#name' + i).value = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    $("#name1").focus();
});



