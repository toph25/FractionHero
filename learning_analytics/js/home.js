$(document).ready( function(){
var section = localStorage.getItem("section");
    $.ajax({
        url : "http://localhost/LA_final_final/php/data.php",
        type : "POST",
        data : {section: section},
        success: function(data){
            console.log(data);
            var text = "<h3 align='center'>  " + section +"</h3";
            $("#section").append(text);
            var a = motivationcalcu(data);
            var b =a[0];
            var c =a[1];
            var eachindicator = a[2];
            var eachtopic = a[3];
            /*for(var i =0; i<b.length; i++){
                console.log(b[i]," ",c[i]);
            }*/
            console.log("eachindicator: ",eachindicator);
            var sortedstud = sorter(c,b);
            /*for(var kkk=0; kkk<sortedstud[0].length; kkk++){
                console.log(sortedstud[0][kkk], " ", sortedstud[1][kkk]);
            }*/
        
            var options = "";
            for (var i =sortedstud[0].length-1; i>=0; i--)
            {
                options += "<option value ='" + sortedstud[0][i] + "''>"+" Student " + sortedstud[0][i] + "    --    "+ sortedstud[1][i].toFixed(2) + '%' +"</option>";
            }

            //document.getElementById("stud_mot").innerHTML=data[0].Student_Name + " is " + moti;
            //document.getElementById("stud_mot").innerHTML="Student "+ student_id + " is " + motiv;
            $("#students").append(options);
            //console.log("dasfhas: ",sortedstud[2],sortedstud[3]);
            summaryline(sortedstud[3].reverse(),sortedstud[2].reverse());
            //console.log("indicators: ",eachindicator[0].toFixed(2),eachindicator[1].toFixed(2),eachindicator[2].toFixed(2));
            indivindicator(eachindicator[0].toFixed(2),eachindicator[1].toFixed(2),eachindicator[2].toFixed(2));
            //console.log("Topics Motivation: ", eachtopic);
            topicsummary(eachtopic);

            $('select#students').on('change', function() {
                console.log( this.value );
                stuid = this.value;
                localStorage.setItem("sid", stuid);
                window.location = "student.php";
            })
        },
        error: function(data){
            console.log('err');
        }

    });

}) 

function handleSelect(elm)
{
    console.log(elm);
    localStorage.setItem("sid", '201489192');
    window.location = "student.html";
}

function summaryline(m,s){
    var data = {
      labels: s,
      datasets: [
        {
          label: "Student's Motivation in Percentage",
          data: m,
          backgroundColor: "#ffb74d",
          borderColor: '#ffb74d',
        },
      ]
    };
    var options = {
      title : {
        display: true,
        position: "top",
        text: "CLASS MOTIVATION SUMMARY",
        fontSize: 12,
        fontColor: "#111"
      },
      legend: {
        display: false,
      },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,

                },
                scaleLabel: {
                    display: true,
                    labelString: 'Students',
                    fontColor: "#3949ab"
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0
                },
                scaleLabel: {
                    display: true,
                    labelString: 'in percentage %',
                    fontColor: "#3949ab"
                }
            }]
        }
    };
    var ctx = $("#mycanvas1");
    BarGraph1 = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options
    });
}

function indivindicator(g,e,se){
var data = {
    labels: ["Goal Orientation", ""],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                "#ffb74d",
                'white'],
            data: [g, 100-g],
// Notice the borderColor 
            borderColor:    ['#ffb74d', 'white'],
            borderWidth: [2,2]
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
        legend:{display:false},
        title: {
                  display: true,
                  text: 'Goal Orientation',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
};


// Chart declaration:

    var ctx = $("#mycanvas2");
    BarGraph = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });

var data = {
    labels: ["Effort Regulation", ""],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                "#ffb74d",
                'white'],
            data: [e, 100-e],
// Notice the borderColor 
            borderColor:    ['#ffb74d', 'white'],
            borderWidth: [2,2]
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
        legend:{display:false},
        title: {
                  display: true,
                  text: 'Effort Regulation',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
};


// Chart declaration:

    var ctx = $("#mycanvas4");
    BarGraph = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
var data = {
    labels: ["Self-efficacy", ""],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                "#ffb74d",
                'white'],
            data: [se, 100-se],
// Notice the borderColor 
            borderColor:    ['#ffb74d', 'white'],
            borderWidth: [2,2]
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
        legend:{display:false},
        title: {
                  display: true,
                  text: 'Self-Efficacy',
                  position: 'top'
              },
        rotation: -0.7 * Math.PI
};


// Chart declaration:

    var ctx = $("#mycanvas5");
    BarGraph = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: options
    });
}

function topicsummary(d){
    var chartdata = {
        labels: ['Addition','Subtraction','Multiplication','Division','Random'],
        datasets:[
        {
            type: 'line',
            backgroundColor: "#ffb74d",
            borderColor: '#ffb74d',
            fill: false,
            lineTension: 0,
            pointRadius: 5,
            showLine: true,
            pointStyle: 'circle',
            data: d
        }         

        ]};
    var options = {
          title : {
            display: true,
            position: "top",
            text: "CLASS MOTIVATION SUMMARY PER TOPIC",
            fontSize: 12,
            fontColor: "#111"
          },
          legend:{
            display: false
          },
            scales: {   
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Question Difficulty',
                        fontColor: "#3949ab"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'In Percentage %',
                        fontColor: "#3949ab"
                    }
                }]
            }
        };
    var ctx = $("#mycanvas3");
    BarGraph = new Chart(ctx,{
        type: 'line',
        data: chartdata,
        options: options
    });

}

function summarizebattle(baccu,bbooltime,btotalitem,bdiffiaction,bskipaction,bnumeasy){
    var actionsum = [0,0,0,0,0,0,0]; // accutime,diffication,skipaction,expert,open,bonus,perkindex

    var accupoint = (baccu/btotalitem)*20.0;
    actionsum[0]=accupoint;

    //get difficulty vs. accuracy in the battle
    //console.log("diffication: ",bdiffiaction);
    diffiaction = (bdiffiaction/(btotalitem-1))*35.0;
    actionsum[1] =diffiaction;

    //get total skip score equivalent
    var skipcomplement = btotalitem - bskipaction;
    var skipoint = (skipcomplement/btotalitem) *15.0;
    actionsum[2]= skipoint;

    //get easy
    var noneasy = btotalitem-bnumeasy;
    var n = (noneasy/btotalitem) *15;
    actionsum[3] =n;

    //get open notes and bonusquestion
    //console.log(actionsum);
    return(actionsum);
}

function summarizesession(sdiffi,sskip,saccutime,sexpert,sbtopic,totaccu,total,currentstud,currentsession,index,data,topic){
    //console.log("Index: ",index);
    var batsum = [0,0,0,0];
    var t1 =[]; var t2 =[]; var t3 =[]; var t4 =[]; var t5 =[]; var openotes=15;
    var sindex = index; var nb=0;
    for(var kk=0; kk<data.length; kk++){
        if(currentstud == data[sindex].student_id){
            if(currentsession == data[sindex].session_id){
                sindex+=1;
                if(data[sindex].location == 'Notebook'){
                    nb+=1;
                }
            }
        }
    }
    var totalaccuracy = totaccu/total;
    //console.log("tot accuracy: ",totaccu,"total: ",total);
    batsum[3] = sindex;
    //console.log("SINDEX: ",sindex,"student in sindex: ",data[sindex].student_id);
    //console.log("TOTALACCUARACY: ",totalaccuracy)
    if(nb<3 && totalaccuracy <=.60){openotes=0;}

    //console.log("accutime: ",saccutime);
    totdiffi =0; totskip =0; totaccutime =0; totexpert =0; totval =0.0;
    for(var jj = 0; jj<sdiffi.length; jj++){
        totdiffi += sdiffi[jj];
        totskip += sskip[jj];
        totaccutime += saccutime[jj];
        totexpert += sexpert[jj];
        totval +=1.0;
        var stotal = sdiffi[jj] + sskip[jj] + saccutime[jj] + sexpert[jj] + openotes;
        if(sbtopic[jj] ==1){t1.push(stotal);}
        else if(sbtopic[jj] ==2){t2.push(stotal);}
        else if(sbtopic[jj] ==3){t3.push(stotal);}
        else if(sbtopic[jj] ==4){t4.push(stotal);}
        else if(sbtopic[jj] ==5){t5.push(stotal);}
    }

    totdiffi = totdiffi /totval;
    totskip = totskip /totval;
    totaccutime = totaccutime /totval;
    totexpert = totexpert /totval;
    session_se = totexpert + ((totdiffi/35)*20);
    session_goal = ((totdiffi/35)*15) + totskip;
    session_effort = totaccutime + openotes;
    //console.log("Diffi Accu: ",totdiffi,"Skip: ",totskip,"Accu Time: ",totaccutime,"Expert: ",totexpert);
    batsum[0] =session_goal; batsum[1] =session_effort; batsum[2] =session_se;
    var tott1 =0; var tott2 =0; var tott3 =0; var tott4 =0; var tott5 =0;
    for(var a = 0; a<t1.length; a++){tott1= tott1 + t1[a];}
    if(t1.length!=0){
        if(topic[0]!=0){topic[0] = (topic[0] + (tott1/t1.length))/2;}
        else{topic[0]=tott1/t1.length;}
    }
    for(var a = 0; a<t2.length; a++){tott2= tott2 + t2[a];}
        if(t2.length!=0){
        if(topic[1]!=0){topic[1] = (topic[1] + (tott2/t2.length))/2;}
        else{topic[1]=tott2/t2.length;}
    }
    for(var a = 0; a<t3.length; a++){tott3= tott3 + t3[a];}
        if(t3.length!=0){
        if(topic[2]!=0){topic[2] = (topic[2] + (tott3/t3.length))/2;}
        else{topic[2]=tott3/t3.length;}
    }
    for(var a = 0; a<t4.length; a++){tott4= tott4 + t4[a];}
        if(t4.length!=0){
        if(topic[3]!=0){topic[3] = (topic[3] + (tott4/t4.length))/2;}
        else{topic[3]=tott4/t4.length;}
    }
    for(var a = 0; a<t5.length; a++){tott5= tott5 + t5[a];}
        if(t5.length!=0){
        if(topic[4]!=0){topic[4] = (topic[4] + (tott5/t5.length))/2;}
        else{topic[4]=tott5/t5.length;}
    }
    //console.log(batsum);
    return(batsum);
}

function motivationcalcu(data){
    var boollastentry=0;
    var datamain = data['student'];
    var datavisits = data['visits'];
    var topic = [0,0,0,0,0];
    var cindivindicator = [0,0,0];
    var student = []; var mot = []; var currentstud = ''; var currentopic =0;
    var goal = []; var effort =[]; var selfefficacy = [];
    var diffi = []; var skip = []; var accutime =[]; var expert = [];  var btopic =[];
    var prevres = 0; var prevdiffi = 0; var currentsession = 0;
    var diffiaction = 0; var skipaction = 0; var accu =0; var booltime =0; var numopenotes =0; var numeasy =0;
    var numbonusq =0; var totalitem = 0; var totaccu =0; var total = 0;
    var index = 0;
    for(var i = 0; i<datamain.length; i++){
        if(currentstud != datamain[i].student_id){
            if(currentstud.length!=0){
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    btopic.push(currentopic);
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentstud,currentsession,index,datavisits,topic);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); index=c[3];
                }
                var g=0; var e=0; var se=0; var t=0.0;
                for(var zz = 0; zz<goal.length; zz++){ //get average of each 3 general motivation indicator
                    g+=goal[zz];
                    e+=effort[zz];
                    se+=selfefficacy[zz];
                    t+=1;
                    //console.log("G: ",goal[zz], "E: ",effort[zz], "SE: ",selfefficacy[zz]);
                }
                g = g/t;
                e = e/t;
                se = se/t;
                var totmot = g + e + se;
                cindivindicator[0]+=g;
                cindivindicator[1]+=e;
                cindivindicator[2]+=se;
                console.log('G: ',g,' E: ',e,' SE: ',se);
                student.push(currentstud);
                mot.push(totmot);
            }
            currentstud = datamain[i].student_id;
            currentopic = Number(datamain[i].topic);
            console.log("hello ", currentstud);
            goal = []; effort = []; selfefficacy = [];
            currentsession = datamain[i].session_id; currentbattle = datamain[i].battle_num;
            diffi = []; skip = []; accutime =[]; openotes = []; expert = []; bonusq = []; btopic =[];
            prevres = datamain[i].result; prevdiffi = Number(datamain[i].difficulty);
            diffiaction =0; numopenotes=0; numeasy=0; numbonusq=0; totalitem=1.0; total=1;accu =0; booltime =0;
            skipaction =0; totaccu =0;
            if(datamain[i].result.toLowerCase() == 'skipped'){
                if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){skipaction+=1;}}
                else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){skipaction+=1;}}
                else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){skipaction+=1;}}
                else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){skipaction+=1;}}
            }
            else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;totaccu+=1;}
            else if(datamain[i].result.toLowerCase() == 'wrong'){
                if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) > 15){accu+=1;}}
                else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) > 30){accu+=1;}}
                else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) > 45){accu+=1;}}
                else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) > 60){accu+=1;}}               
            }
            if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}numeasy+=1;}
            else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
            else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
            else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){booltime+=1;}}

        }
        else{
            if(currentsession != datamain[i].session_id){
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    perkindex = d[6]; btopic.push(currentopic);
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentstud,currentsession,index,datavisits,topic);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); index=c[3];
                }
                
                currentsession = datamain[i].session_id; currentbattle = datamain[i].battle_num; currentopic = Number(datamain[i].topic);
                prevres = datamain[i].result; prevdiffi = datamain[i].difficulty;
                diffi = []; skip = []; accutime =[]; openotes = []; expert = []; bonusq = []; btopic=[];
                diffiaction =0; numopenotes=0; numeasy=0; totalitem=1.0; accu =0; booltime =0; total =1; totaccu=0;
                numbonusq =0; skipaction =0;
                if(datamain[i].result.toLowerCase() == 'skipped'){
                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){skipaction+=1;}}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){skipaction+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){skipaction+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){skipaction+=1;}}
                }
                else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1; totaccu+=1;}
                else if(datamain[i].result.toLowerCase() == 'wrong'){
                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) > 15){accu+=1;}}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) > 30){accu+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) > 45){accu+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) > 60){accu+=1;}}               
                }
                if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}numeasy+=1;}
                else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){booltime+=1;}}
            }
            else{
                if(currentbattle != datamain[i].battle_num){
                    //console.log("different battle");
                    if(totalitem>1){
                        d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy);
                        accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                        btopic.push(currentopic);
                    }
                    //console.log("done reading");
                    currentbattle = datamain[i].battle_num;
                    currentopic = Number(datamain[i].topic);
                    prevres = datamain[i].result; prevdiffi = Number(datamain[i].difficulty);
                    accu =0; booltime =0; totalitem =1.0; diffiaction =0; skipaction =0; numeasy=0; numopenotes=0;
                    numbonusq =0; total+=1;
                    if(datamain[i].result.toLowerCase() == 'skipped'){
                        if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){skipaction+=1;}}
                    }
                    else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;totaccu+=1;}
                    else if(datamain[i].result.toLowerCase() == 'wrong'){
                        if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) > 15){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) > 30){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) > 45){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) > 60){accu+=1;}}               
                    }
                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}numeasy+=1;}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){booltime+=1;}}
                }
                else{
                    if(datamain[i].result.toLowerCase() == 'skipped'){
                        if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){skipaction+=1;}}
                        else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){skipaction+=1;}}
                    }
                    else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;totaccu+=1;}
                    else if(datamain[i].result.toLowerCase() == 'wrong'){
                        if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) > 15){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) > 30){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) > 45){accu+=1;}}
                        else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) > 60){accu+=1;}}               
                    }
                    totalitem+=1.0;
                    total+=1;
                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}numeasy+=1;}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){if(Number(datamain[i].time) <= 60){booltime+=1;}}

                    //console.log("compare diffi: ",prevdiffi, Number(datamain[i].difficulty));
                    if(prevres == 'correct' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=1;}
                    else if(prevres == 'correct' && prevdiffi > Number(datamain[i].difficulty)){diffiaction+=0;}
                    else if(prevres == 'wrong' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=1;}
                    else if(prevres == 'wrong' && prevdiffi > Number(datamain[i].difficulty)){diffiaction+=1;}
                    else if(prevres == 'correct' && prevdiffi == Number(datamain[i].difficulty)){
                        if(Number(datamain[i].difficulty) == 4){diffiaction+=1;}
                        else{diffiaction+=0;}
                    }
                    else if(prevres == 'wrong' && prevdiffi == Number(datamain[i].difficulty)){diffiaction+=1;}

                    prevdiffi = Number(datamain[i].difficulty);
                    prevres = datamain[i].result;
                    //console.log(skipaction," ",accu," ",booltime," ",numeasy," ",diffiaction," ",totalitem);
                }
                if(i == datamain.length-1){
                    console.log("last entry");
                    if(totalitem>1){
                        d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy);
                        accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                        perkindex = d[6];btopic.push(currentopic);
                        c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentstud,currentsession,index,datavisits,topic);
                        goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); index=c[3];
                    }
                    var g=0; var e=0; var se=0; var t=0.0;
                    for(var z = 0; z<goal.length; z++){ //get average of each 3 general motivation indicator
                        g+=goal[z];
                        e+=effort[z];
                        se+=selfefficacy[z];
                        t+=1;
                        //console.log("G: ",goal[z], "E: ",effort[z], "SE: ",selfefficacy[z]);
                    }
                    g = g/t;
                    e = e/t;
                    se = se/t;
                    var totmot = g + e + se;
                    console.log('G: ',g,' E: ',e,' SE: ',se);
                    //console.log(totmot);
                    cindivindicator[0]+=g;
                    cindivindicator[1]+=e;
                    cindivindicator[2]+=se;
                    student.push(currentstud);
                    mot.push(totmot);
                    boollastentry=1;   
                }
            }
            if(i == datamain.length-1 && boollastentry==0){
                console.log("last entry2");
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    perkindex = d[6];btopic.push(currentopic);
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentstud,currentsession,index,datavisits,topic);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); index=c[3];
                }
                var g=0; var e=0; var se=0; var t=0.0;
                for(var z = 0; z<goal.length; z++){ //get average of each 3 general motivation indicator
                    g+=goal[z];
                    e+=effort[z];
                    se+=selfefficacy[z];
                    t+=1;
                   // console.log("G: ",goal[z], "E: ",effort[z], "SE: ",selfefficacy[z]);
                }
                g = g/t;
                e = e/t;
                se = se/t;
                var totmot = g + e + se;
                cindivindicator[0]+=g;
                cindivindicator[1]+=e;
                cindivindicator[2]+=se;
                //console.log(totmot);
                console.log('G: ',g,' E: ',e,' SE: ',se);
                student.push(currentstud);
                mot.push(totmot);        
            }
        }
    }
    console.log("C[0]: ",cindivindicator[0], student.length);
    cindivindicator[0] = (cindivindicator[0]/student.length)+70;
    cindivindicator[1] = (cindivindicator[1]/student.length)+65;
    cindivindicator[2] = (cindivindicator[2]/student.length)+65;
    var studmot = [student,mot,cindivindicator,topic];
    return(studmot);       
}


function perkmotivationcalcu(data){
 return(0);
}

function sorter(scorel,stud){
    oldsc = [];
    oldstud = [];
    scc = [];
    studd = [];
    curr = 0;
    curr_stud = 0;
    while(scorel.length!=0){
        curr = scorel.pop();
        curr_stud = stud.pop();
        oldsc.push(curr);
        oldstud.push(curr_stud);
        if(scc.length == 0){
            scc.push(curr);
            studd.push(curr_stud);
        }
        else{
            i = 0;
            check = 0;
            while(i<scc.length){
                if (curr < scc[i]){
                    scc.splice(i, 0, curr);
                    studd.splice(i, 0, curr_stud);
                    check = 1;
                    i = scc.length;
                }
                i += 1;
            }
            if (check == 0){
                scc.push(curr);
                studd.push(curr_stud);
            }
            //console.log(scc);
        }
    }
    var r = [studd,scc,oldstud,oldsc];
    return(r);
}
