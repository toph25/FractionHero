function summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numexpert,perkindex,data){
	var actionsum = [0,0,0,0,0,0,0]; // accutime,diffication,skipaction,expert,open,bonus,perkindex
    var bataccu = accu/totalitem;
    var speed = booltime/totalitem;
    if(bataccu < .60 && speed>=.60){actionsum[0]=0;}
    else if(bataccu < .60 && speed<.60){actionsum[0]=10;}
    else if((bataccu >= .60 && speed>=.60) || (bataccu >= .60 && speed<.60)){actionsum[0] =20;}

    //get difficulty vs. accuracy in the battle
    diffiaction = diffiaction/(totalitem-1);
    actionsum[1] =diffiaction;

    //get total skip score equivalent
    if(skipaction==1){actionsum[2] =10;}
    else if(skipaction>1 && skipaction<=3){actionsum[2] =5;}
    else if(skipaction>=4){actionsum[2] =0;}
    else if(skipaction == 0){actionsum[2] =15;}

    //get expert
    numexpert = numexpert/totalitem;
    if(numexpert>=.60){actionsum[3] =15;}
    else{actionsum[3] =0;}

    //get open notes and bonusquestion
    if(data['perk'][perkindex] == currentstud){
        for(var kk = perkindex; kk<data['perk'].length; kk++){
            if(currentstud == data['perk'][kk].student_id){
                if(currentsession == data['perk'][kk].session_id){
                    if(currentbattle == data['perk'][kk].battle_num){
                        if(data['perk'][kk].used == 'Open Notes'){numopenotes+=1;}
                        else if(data['perk'][kk].used == 'Bonus Points'){numbonusq+=1;}
                    }
                }
            }
            else{
                kk = data['perk'].length;
            }
            perkindex+=1;
        }
    }

    if(numopenotes>=2){actionsum[4] = 15;}
    else if(numopenotes == 0 && accu>=.60){actionsum[4] =7.5;}
    else{actionsum[4] =0;}

    if(numbonusq>=2){actionsum[5] =15;}
    else if(numbonusq == 1){actionsum[5] =7.5;}
    else if(numbonusq == 0){actionsum[5] =0;}
	actionsum[6] = perkindex;
	return(actionsum);
}

function summarizesession(diffi,skip,accutime,expert,openotes,bonusq){
	var batsum = [0,0,0];
    totdiffi =0; totskip =0; totaccutime =0; totexpert =0; totopenotes =0; totbonusq =0; totval =0.0;
    for(var jj = 0; jj<diffi.length; jj++){
        totdiffi += diffi[jj];
        totskip += skip[jj];
        totaccutime += accutime[jj];
        totexpert += expert[jj];
        totopenotes += openotes[jj];
        totbonusq += bonusq[jj];
        totval +=1.0;
    }
    totdiffi = totdiffi /totval;
    totskip = totskip /totval;
    totaccutime = totaccutime /totval;
    totexpert = totexpert /totval;
    totopenotes = totopenotes /totval;
    totbonusq = totbonusq /totval;
    session_se = totexpert + totbonusq;
    session_goal = totdiffi + totskip;
    session_effort = totaccutime + totopenotes;
    batsum[0] =session_goal; batsum[1] =session_effort; batsum[2] =session_se;
    return(batsum);
}

function motivationcalcu(data){
    var datamain = data['student'];
    var dataperk = data['perk'];
    var student = []; var mot = []; var currentstud = '';
    var goal = []; var effort =[]; var selfefficacy = [];
    var diffi = []; var skip = []; var accutime =[]; var openotes = []; var expert = []; var bonusq = [];
    var prevres = 0; var prevdiffi = 0; var currentsession = 0;
    var diffiaction = 0; var skipaction = 0; var accu =0; var booltime =0; var numopenotes =0; var numexpert =0;
    var numbonusq =0; var totalitem = 0;
    var perkindex = 0;
    for(var i = 0; i<datamain.length; i++){
        if(currentstud != datamain[i].student_id){
            if(currentstud.length!=0){
            	d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numexpert,perkindex,data);
            	accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
            	openotes.push(d[4]); bonusq.push(d[5]); perkindex = d[6];
            	c = summarizesession(diffi,skip,accutime,expert,openotes,bonusq);
                goal.push(c[0]); effort.push(session_effort[c1]); selfefficacy.push(session_se[c2]);
                var g=0; var e=0; var se=0; var t=0.0;
                for(var i = 0; i<goal.length; i++){ //get average of each 3 general motivation indicator
                    g+=goal[i];
                    e+=effort[i];
                    se+=selfefficacy[i];
                    t+=1;
                }
                g = g/t;
                e = e/t;
                se = se/t;
                var totmot = g + e + se;
                student.push(currentstud);
                mot.push(totmot);
            }
            currentstud = datamain[i].student_id;
            goal = []; effort = []; selfefficacy = [];
            currentsession = datamain[i].session_id; currentbattle = datamain[i].battle_num;
            diffi = []; skip = []; accutime =[]; openotes = []; expert = []; bonusq = [];
            prevres = datamain[i].result; prevdiffi = datamain[i].difficulty;
            diffiaction =0; numopenotes=0; numexpert=0; numbonusq=0; totalitem=1.0; accu =0; booltime =0;
            skipaction =0;
            if(datamain[i].result.toLowerCase() == 'skipped'){skipaction+=1;}
            else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;}
            if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}}
            else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
            else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
            else if(Number(datamain[i].difficulty) == 4){
                if(Number(datamain[i].time) <= 60){booltime+=1;}
                numexpert+=1;
            }

        }
        else{
            if(currentsession != datamain[i].session_id){
            	d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numexpert,perkindex,data);
            	accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
            	openotes.push(d[4]); bonusq.push(d[5]); perkindex = d[6];
                totdiffi =0; totskip =0; totaccutime =0; totexpert =0; totopenotes =0; totbonusq =0; totval =0.0;
                for(var jj = 0; jj<diffi.length; jj++){
                    totdiffi += diffi[jj];
                    totskip += skip[jj];
                    totaccutime += accutime[jj];
                    totexpert += expert[jj];
                    totopenotes += openotes[jj];
                    totbonusq += bonusq[jj];
                    totval +=1.0;
                }
                totdiffi = totdiffi /totval;
                totskip = totskip /totval;
                totaccutime = totaccutime /totval;
                totexpert = totexpert /totval;
                totopenotes = totopenotes /totval;
                totbonusq = totbonusq /totval;
                session_se = totexpert + totbonusq;
                session_goal = totdiffi + totskip;
                session_effort = totaccutime + totopenotes;
                goal.push(session_goal); effort.push(session_effort); selfefficacy.push(session_se);

                currentsession = datamain[i].session_id; currentbattle = datamain[i].battle_num;
                prevres = datamain[i].result; prevdiffi = datamain[i].difficulty;
                diffi = []; skip = []; accutime =[]; openotes = []; expert = []; bonusq = [];
                diffiaction =0; numopenotes=0; numexpert=0; totalitem=1.0; accu =0; booltime =0;
                numbonusq =0; skipaction =0;
                if(datamain[i].result.toLowerCase() == 'skipped'){skipaction+=1;}
                else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;}
                if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}}
                else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                else if(Number(datamain[i].difficulty) == 4){
                    if(Number(datamain[i].time) <= 60){booltime+=1;}
                    numexpert+=1;
                }
            }
            else{
                if(currentbattle != datamain[i].battle_num){
                    //get accuracy vs time in the battle
                    var bataccu = accu/totalitem;
                    var speed = booltime/totalitem;
                    if(bataccu < .60 && speed>=.60){accutime.push(0);}
                    else if(bataccu < .60 && speed<.60){accutime.push(10);}
                    else if((bataccu >= .60 && speed>=.60) || (bataccu >= .60 && speed<.60)){accutime.push(20);}

                    //get difficulty vs. accuracy in the battle
                    diffiaction = diffiaction/(totalitem-1);
                    diffi.push(diffiaction);

                    //get total skip score equivalent
                    if(skipaction==1){skip.push(10);}
                    else if(skipaction>1 && skipaction<=3){skip.push(5);}
                    else if(skipaction>=4){skip.push(0);}
                    else if(skipaction == 0){skip.push(15);}

                    //get expert
                    numexpert = numexpert/totalitem;
                    if(numexpert>=.60){expert.push(15);}
                    else{expert.push(0);}

                    //get open notes and bonusquestion
                    if(data['perk'][perkindex] == currentstud){
                        for(var kk = perkindex; kk<data['perk'].length; kk++){
                            if(currentstud == data['perk'][kk].student_id){
                                if(currentsession == data['perk'][kk].session_id){
                                    if(currentbattle == data['perk'][kk].battle_num){
                                        if(data['perk'][kk].used == 'Open Notes'){numopenotes+=1;}
                                        else if(data['perk'][kk].used == 'Bonus Points'){numbonusq+=1;}
                                    }
                                }
                            }
                            else{
                                kk = data['perk'].length;
                            }
                            perkindex+=1;
                        }
                    }

                    if(numopenotes>=2){openotes.push(15);}
                    else if(numopenotes == 0 && accu>=.60){openotes.push(7.5);}
                    else{openotes.push(0);}

                    if(numbonusq>=2){bonusq.push(15);}
                    else if(numbonusq == 1){bonusq.push(7.5);}
                    else if(numbonusq == 0){bonusq.push(0);}
                    currentbattle = datamain[i].battle_num;
                    prevres = datamain[i].result; prevdiffi = Number(datamain[i].difficulty);
                    accu =0; booltime =0; totalitem =1.0; diffiaction =0; skipaction =0; numexpert=0; numopenotes=0;
                    numbonusq =0;
                    if(datamain[i].result.toLowerCase() == 'skipped'){skipaction+=1;}
                    else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;}
                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){
                        if(Number(datamain[i].time) <= 60){booltime+=1;}
                        numexpert+=1;
                    }
                }
                else{
                    if(datamain[i].result.toLowerCase() == 'skipped'){skipaction+=1;}
                    else if(datamain[i].result.toLowerCase() == 'correct'){accu+=1;}
                    totalitem+=1.0;

                    if(Number(datamain[i].difficulty) == 1){if(Number(datamain[i].time) <= 15){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 2){if(Number(datamain[i].time) <= 30){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 3){if(Number(datamain[i].time) <= 45){booltime+=1;}}
                    else if(Number(datamain[i].difficulty) == 4){
                        if(Number(datamain[i].time) <= 60){booltime+=1;}
                        numexpert+=1;
                    }

                    if(prevres == 'correct' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=20;}
                    else if(prevres == 'correct' && prevdiffi > Number(datamain[i].difficulty)){diffiaction+=0;}
                    else if(prevres == 'wrong' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=20;}
                    else if(prevres == 'wrong' && prevdiffi < Number(datamain[i].difficulty)){diffiaction+=0;}
                    else if(prevres == 'correct' && prevdiffi == Number(datamain[i].difficulty)){
                        if(Number(datamain[i].difficulty) == 4){diffiaction+=20;}
                        else{diffiaction+=20;}
                    }
                    else if(prevres == 'wrong' && prevdiffi == Number(datamain[i].difficulty)){diffiaction+=20;}

                    prevdiffi = Number(datamain[i].difficulty);
                    prevres = datamain[i].result;


                }
            	if(i == datamain.length-1){
	            	d = summarizebattle(accu,booltime,totalitem,diffiaction,skipaction,numexpert,perkindex,data);
	            	accutime.push(d[0]); diffi.push(d[1]); skip.push(d[2]); expert.push(d[3]);
	            	openotes.push(d[4]); bonusq.push(d[5]); perkindex = d[6];
	            	c = summarizesession(diffi,skip,accutime,expert,openotes,bonusq);
	                goal.push(c[0]); effort.push(session_effort[c1]); selfefficacy.push(session_se[c2]);
	                var g=0; var e=0; var se=0; var t=0.0;
	                for(var i = 0; i<goal.length; i++){ //get average of each 3 general motivation indicator
	                    g+=goal[i];
	                    e+=effort[i];
	                    se+=selfefficacy[i];
	                    t+=1;
	                }
	                g = g/t;
	                e = e/t;
	                se = se/t;
	                var totmot = g + e + se;
	                student.push(currentstud);
	                mot.push(totmot);            		
            	}
            }
        }
    }
    var studmot = [student,mot];
    return(studmot);       
}
