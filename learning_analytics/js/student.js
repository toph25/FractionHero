var student = Number(localStorage.getItem("sid"));
//var student =15;
$(document).ready(function(){
    $.ajax({
        url : "http://localhost/LA_final_final/php/datastudent.php",
        type : "POST",
        data : {student: student},
        success: function(data){
            console.log(data);
            console.log("THE DATA: ",data['student'][0]);
            var res =motivationcalc(data);
            console.log("T: ",res[0]," C: ",res[1]," S: ",res[2], "D: ",res[3]);
            radar(res[1]);
            bardifficulty(res[0]);
            var text = "<h3>"+res[2][0]+"</h3>";
            $("#statboxed1").append(text);
            var text1 = "<h3>"+res[2][1]+"</h3>";
            $("#statboxed2").append(text1);
            var text2 = "";
            for(var dtext=0; dtext<res[3].length; dtext++){
                text2+= "<h3>"+res[3][dtext]+"</h3>";
            }
            $("#statboxed3").append(text2);
            var text4 = "<h3 align='center'>Student "+student+"</h3>";
            $("#student").append(text4);
        },
        error: function(data){
            console.log('err');
        }

    });
});


function radar(d){
	var chartdata = {
	    labels: ['Goal Orientation', 'Effort Regulator', 'Self Efficacy'],
	    datasets: [{
            backgroundColor: "rgba(250,197,136,0.2)",
            borderColor: '#ffb74d',
	        data: d
	    }]
	};
    var options = {
        title: {display:true, text: "Student's Motivation Per Indicator"},
        responsive: true,
        legend: {
             display: false
        },
        scale: {
			ticks: {
				beginAtZero: true,
				stepSize: 10
			}
        }
 
    };
    var ctx = $("#mycanvas1");
	 var myRadarChart = new Chart(ctx, {
	    type: 'radar',
	    data: chartdata,
	    options: options
	});     

}


function bardifficulty(di){
    var data = {
      labels: ['Addition','Subtraction','Multiplication','Division','Random'],
      datasets: [
        {
          data: di,
          background: "#ffb74d",
          borderColor: "#ffb74d",
          fill: false,
          lineTension: 0,
          pointRadius: 5,
          showLine: true,
          pointStyle: 'circle'
        },
      ]
    };
    var options = {
      title : {
        display: true,
        position: "top",
        text: "Student's Motivation Per Topic",
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
                    labelString: 'Topics',
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
    var ctx = $("#mycanvas2");
    BarGraph1 = new Chart(ctx, {
      type: "line",
      data: data,
      options: options
    });

}
function summarizebattle(baccu,bbooltime,btotalitem,bdiffiaction,bskipaction,bnumeasy,bat){
    var actionsum = [0,0,0,0,0,0,0,0]; // accutime,diffication,skipaction,expert,open,bonus,perkindex,at
    var accupoint = (baccu/btotalitem)*20.0;
    actionsum[0]=accupoint;
    actionsum[7]=bat/btotalitem;

    console.log("Accuracy and Time: ",actionsum[7]);
    //get difficulty vs. accuracy in the battle
    console.log("diffication: ",bdiffiaction);
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

    return(actionsum);
}

function summarizesession(sdiffi,sskip,saccutime,sexpert,sbtopic,totaccu,total,currentsession,index,data,topic,sat){
    var batsum = [0,0,0,0,0];
    var t1 =[]; var t2 =[]; var t3 =[]; var t4 =[]; var t5 =[]; var openotes=15;
    var sindex = index; var nb=0;
    if(sindex < data.length){
        for(var kk=0; kk<data.length; kk++){
            if(currentsession == data[sindex].session_id){
                sindex+=1;
                if(data[sindex].location == 'Notebook'){
                    nb+=1;
                }
            }
            
        }
    }
    var totalaccuracy = totaccu/total;
    console.log("tot accuracy: ",totaccu,"total: ",total);
    batsum[4] = sindex;
    //console.log("SINDEX: ",sindex,"student in sindex: ",data[sindex].student_id);
    console.log("TOTALACCUARACY: ",totalaccuracy)
    if(nb<3 && totalaccuracy <=.60){openotes=0;}

    console.log("accutime: ",saccutime);
    totdiffi =0; totskip =0; totaccutime =0; totexpert =0; totopenotes =0; totbonusq =0; totval =0.0; totat=0;
    for(var jj = 0; jj<sdiffi.length; jj++){
        totdiffi += sdiffi[jj];
        totskip += sskip[jj];
        totaccutime += saccutime[jj];
        totexpert += sexpert[jj];
        totat+=sat[jj];
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
    totat= totat/totval;
    session_se = totexpert + ((totdiffi/35)*20);
    session_goal = ((totdiffi/35)*15) + totskip;
    session_effort = totaccutime + openotes;
    batsum[0] =session_goal; batsum[1] =session_effort; batsum[2] =session_se;batsum[3]=totat;
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
    console.log(batsum);
    return(batsum);
}

function motivationcalc(data){
    var boollastentry=0;
    var datamain = data['student'];
    var datavisits = data['visits'];
    var topic = [0,0,0,0,0]; var at = 0;
    var cindivindicator = [0,0,0];
    var sidebar = ['',''];
    var sidebarmode = [];
    var currentopic =0;
    var goal = []; var effort =[]; var selfefficacy = []; var wholeAt= []; var wholeDa=[0,0,0,0,0,0,0];
    var diffi = []; var skip = []; var accutime =[]; var openotes = []; var expert = []; var bonusq = []; var btopic =[];
    var accuratime = [];
    var prevres = 0; var prevdiffi = 0; var currentsession = 0;
    var diffiaction = 0; var skipaction = 0; var accu =0; var booltime =0; var numopenotes =0; var nume =0;
    var numbonusq =0; var totalitem = 0; var totaccu =0; var total = 0;
    var index = 0;
    var check =0
    var aat=0;
    for(i=0; i<datamain.length; i++){
        if(currentsession != datamain[i].session_id){
            if(currentsession!=0){
                if(totalitem>1){                    
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy,aat);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    btopic.push(currentopic);
                    accuratime.push(d[7]);
                    
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentsession,index,data,topic,accuratime);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); wholeAt.push(c[3]); index=c[4];
                }

            }
            currentsession = datamain[i].session_id; currentbattle = datamain[i].battle_num; currentopic = Number(datamain[i].topic);
            prevres = datamain[i].result; prevdiffi = datamain[i].difficulty;
            diffi = []; skip = []; accutime =[]; openotes = []; expert = []; bonusq = []; btopic=[];
            accuratime=[];
            diffiaction =0; numopenotes=0; numeasy=0; totalitem=1.0; accu =0; booltime =0; total =1; totaccu=0;
            numbonusq =0; skipaction =0; aat=0;
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

            if(datamain[i].result.toLowerCase() == 'correct' && booltime==1){aat+=4;} //FA
            else if(datamain[i].result.toLowerCase() == 'correct' && booltime!=1){aat+=3;} //SA
            else if(datamain[i].result.toLowerCase() != 'correct' && booltime!=1){aat+=2;} //SINAC
            else if(datamain[i].result.toLowerCase() != 'correct' && booltime==1){aat+=1;} // FINAC
        }
        else{
            //console.log("same session");
            if(currentbattle != datamain[i].battle_num){
                //console.log("different battle");
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy,aat);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    btopic.push(currentopic);
                    accuratime.push(d[7]);
                }
                //console.log("done reading");
                currentbattle = datamain[i].battle_num;
                currentopic = Number(datamain[i].topic);
                prevres = datamain[i].result; prevdiffi = Number(datamain[i].difficulty);
                accu =0; booltime =0; totalitem =1.0; diffiaction =0; skipaction =0; numeasy=0; numopenotes=0;
                numbonusq =0; total+=1; aat=0;
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
                if(datamain[i].result.toLowerCase() == 'correct' && booltime==1){aat+=4;} //FA
                else if(datamain[i].result.toLowerCase() == 'correct' && booltime!=1){aat+=3;} //SA
                else if(datamain[i].result.toLowerCase() != 'correct' && booltime!=1){aat+=2;} //SINAC
                else if(datamain[i].result.toLowerCase() != 'correct' && booltime==1){aat+=1;} // FINAC
            }
            else{
                //console.log("same battle");
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

                if(datamain[i].result.toLowerCase() == 'correct' && booltime==1){aat+=4;} //FA
                else if(datamain[i].result.toLowerCase() == 'correct' && booltime!=1){aat+=3;} //SA
                else if(datamain[i].result.toLowerCase() != 'correct' && booltime!=1){aat+=2;} //SINAC
                else if(datamain[i].result.toLowerCase() != 'correct' && booltime==1){aat+=1;} // FINAC

                //console.log("compare diffi: ",prevdiffi, Number(datamain[i].difficulty));
                if(prevres == 'correct' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=1; wholeDa[5]+=1;}
                else if(prevres == 'correct' && prevdiffi > Number(datamain[i].difficulty)){diffiaction+=0;wholeDa[0]+=1;}
                else if(prevres == 'wrong' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=1;wholeDa[4]+=1;}
                else if(prevres == 'wrong' && prevdiffi > Number(datamain[i].difficulty)){diffiaction+=1;wholeDa[2]+=1;}
                else if(prevres == 'correct' && prevdiffi == Number(datamain[i].difficulty)){
                    if(Number(datamain[i].difficulty) == 4){diffiaction+=1;wholeDa[6]+=1;}
                    else{diffiaction+=0;wholeDa[1]+=1;}
                }
                else if(prevres == 'wrong' && prevdiffi == Number(datamain[i].difficulty)){diffiaction+=1;wholeDa[3]+=1;}

                prevdiffi = Number(datamain[i].difficulty);
                prevres = datamain[i].result;
                console.log(skipaction," ",accu," ",booltime," ",numeasy," ",diffiaction," ",totalitem);
            }
            if(i == datamain.length-1){
                console.log("last entry");
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy,aat);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    btopic.push(currentopic);
                    accuratime.push(d[7]);
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentsession,index,data,topic,accuratime);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); wholeAt.push(c[3]); index=c[4];
                }

                var g=0; var e=0; var se=0; var atime=0;  var t=0.0;
                for(var z = 0; z<goal.length; z++){ //get average of each 3 general motivation indicator
                    g+=goal[z];
                    e+=effort[z];
                    se+=selfefficacy[z];
                    atime+=wholeAt[z];
                    t+=1;
                    //console.log("G: ",goal[z], "E: ",effort[z], "SE: ",selfefficacy[z]);
                }
                g = g/t;
                e = e/t;
                se = se/t;
                atime = atime/t;
                
                var totmot = g + e + se;
                console.log("Motivation: ",totmot,"  ACTime: ",atime);
                if(totmot>=60){sidebar[0]='Motivated';}
                else{sidebar[0]='Not Motivated';}
                if(atime<=4 && atime>3){sidebar[1]='Fast Accurate';}
                else if(atime<=3 && atime>2){sidebar[1]='Slow Accurate';}
                else if(atime<=2 && atime>1){sidebar[1]='Slow Inaccurate';}
                else if(atime<=1){sidebar[1]='Fast Inaccurate';}

                //get mode of difficulty vs. accuracy
                console.log("WHOLE DA: ",wholeDa);
                var highest =0;
                for(var dd=0; dd<wholeDa.length; dd++){
                    if(highest<wholeDa[dd]){highest=wholeDa[dd];}
                }
                console.log("HIGHEST: ",highest);
                for(var da=0; da<wholeDa.length; da++){
                    if(wholeDa[da] == highest){
                        if(da==0){sidebarmode.push("Correct,Decreased Difficulty");}
                        else if(da==1){sidebarmode.push("Correct,Consistent Difficulty");}
                        else if(da==2){sidebarmode.push("Wrong,Decreased Difficulty");}
                        else if(da==3){sidebarmode.push("Wrong,Consistent Difficulty");}
                        else if(da==4){sidebarmode.push("Wrong,Increased Difficulty");}
                        else if(da==5){sidebarmode.push("Correct,Increased Difficulty");}
                        else if(da==6){sidebarmode.push("Correct, Consistent Expert");}
                    }
                }

                //console.log(totmot);
                cindivindicator[0]+=g;
                cindivindicator[1]+=e;
                cindivindicator[2]+=se;
                check = 1;
            }
        }
        if(i == datamain.length-1 && check==0){
            console.log("last entry");
                if(totalitem>1){
                    d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numeasy,aat);
                    accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
                    btopic.push(currentopic);
                    accuratime.push(d[7]);
                    c = summarizesession(diffi,skip,accutime,expert,btopic,totaccu,total,currentsession,index,data,topic,accuratime);
                    goal.push(c[0]); effort.push(c[1]); selfefficacy.push(c[2]); wholeAt.push(c[3]); index=c[4];
                }

                var g=0; var e=0; var se=0; var atime=0;  var t=0.0;
                for(var z = 0; z<goal.length; z++){ //get average of each 3 general motivation indicator
                    g+=goal[z];
                    e+=effort[z];
                    se+=selfefficacy[z];
                    atime+=wholeAt[z];
                    t+=1;
                    //console.log("G: ",goal[z], "E: ",effort[z], "SE: ",selfefficacy[z]);
                }
                g = g/t;
                e = e/t;
                se = se/t;
                atime = atime/t;
                
                var totmot = g + e + se;
                console.log("Motivation: ",totmot,"  ACTime: ",atime);
                if(totmot>=60){sidebar[0]='Motivated';}
                else{sidebar[0]='Not Motivated';}
                if(atime<=4 && atime>3){sidebar[1]='Fast Accurate';}
                else if(atime<=3 && atime>2){sidebar[1]='Slow Accurate';}
                else if(atime<=2 && atime>1){sidebar[1]='Slow Inaccurate';}
                else if(atime<=1){sidebar[1]='Fast Inaccurate';}

                //get mode of difficulty vs. accuracy
                console.log("WHOLE DA: ",wholeDa);
                var highest =0;
                for(var dd=0; dd<wholeDa.length; dd++){
                    if(highest<wholeDa[dd]){highest=wholeDa[dd];}
                }
                console.log("HIGHEST: ",highest);
                for(var da=0; da<wholeDa.length; da++){
                    if(wholeDa[da] == highest){
                        if(da==0){sidebarmode.push("Correct,Decreased Difficulty");}
                        else if(da==1){sidebarmode.push("Correct,Consistent Difficulty");}
                        else if(da==2){sidebarmode.push("Wrong,Decreased Difficulty");}
                        else if(da==3){sidebarmode.push("Wrong,Consistent Difficulty");}
                        else if(da==4){sidebarmode.push("Wrong,Increased Difficulty");}
                        else if(da==5){sidebarmode.push("Correct,Increased Difficulty");}
                        else if(da==6){sidebarmode.push("Correct, Consistent Expert");}
                    }
                }

                //console.log(totmot);
                cindivindicator[0]+=g;
                cindivindicator[1]+=e;
                cindivindicator[2]+=se;
        }

    }
    var r = [topic,cindivindicator,sidebar,sidebarmode];
    return(r);

}