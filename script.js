function proverit(){
    pr_otv_zadachi_1 = "Чайковский"; 
    pr_otv_zadachi_2 = "Майкл Джексон";
    pr_otv_zadachi_3 = "Юлия";
    pr_otv_zadachi_4 = "Артём Качер";
    pr_otv_zadachi_5 = "Моргенштерн";
    pr_otv_zadachi_6 = "Виктор Борба";
    pr_otv_zadachi_7 = "Девочка с картинки";
    pr_otv_zadachi_8 = "Sworn through swords";
    pr_otv_zadachi_9 = "Нет";
    
    otv_uch_1 = document.getElementById('z_1').value;
    otv_uch_2 = document.getElementById('z_2').value;
    otv_uch_3 = document.getElementById('z_3').value;
    otv_uch_4 = document.getElementById('z_4').value;
    otv_uch_5 = document.getElementById('z_5').value;
    otv_uch_6 = document.getElementById('z_6').value;
    otv_uch_7 = document.getElementById('z_7').value;
    otv_uch_8 = document.getElementById('z_8').value;
    otv_uch_9 = document.getElementById('z_9').value;
    
    ball = 0;
    if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    }
    if(otv_uch_4 == pr_otv_zadachi_4){
    ball +=1;
    }
    if(otv_uch_5 == pr_otv_zadachi_5){
    ball +=1;
    }
    if(otv_uch_6 == pr_otv_zadachi_6){
    ball +=1;
    }
    if(otv_uch_7 == pr_otv_zadachi_7){
    ball +=1;
    }
    if(otv_uch_8 == pr_otv_zadachi_8){
    ball +=1;
    }
    if(otv_uch_9 == pr_otv_zadachi_9){
    ball +=1;
    }
    vsego_zadach = 9;
    procent_vip = ball/vsego_zadach * 100;
    document.getElementById('rezultat').innerHTML = "Задания выполнены верно на "+procent_vip+"%.";
    }