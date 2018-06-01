$(document).ready(function(){
    var sessionValue= $("#hdnSession").data('value');
    console.log(sessionValue);
    $.ajax({
        url : "http://localhost/LA_final_final/php/teacher.php",
        type : "POST",
        data : {teacher: sessionValue},
        success: function(data){
            var text = "Hello Teacher " + data[0].name +"!";
            $("#helloteacher").append(text);

            var options = "";
            options += "<option value ='" + 0 + "''>" + "section"  +"</option>";
            for (var i =0; i<data.length; i++)
            {
                options += "<option value ='" + data[i].section + "''>" + data[i].section  +"</option>";
            }

            //document.getElementById("stud_mot").innerHTML=data[0].Student_Name + " is " + moti;
            //document.getElementById("stud_mot").innerHTML="Student "+ student_id + " is " + motiv;
            $("#in_sections").append(options);
            $('select#in_sections').on('change', function() {
                console.log( this.value );
                section = this.value;
                localStorage.setItem("section", section);
                window.location = "class.php";
            })
        },
        error: function(data){
            console.log('err');
        }

    });
});

function handleSelect(elm)
{
    console.log(elm);
    localStorage.setItem("sid", '201489192');
    //window.location = "student.html";
}