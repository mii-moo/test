/* 課題に関するコードを以下に書く */
const text1 = ["C", "A", "R", "P", "C", "A", "R", "P"];
const text2 = ["シー！", "エー！", "アール！", "カープ", "シー！", "エー！", "アール！", "カープ"];
const text3 = ["", "", "", "Pの時間みじかっ！",　"", "", "", "Pの時間みじかっ！"];

/*タイムラインの設定*/
const timeline = []
for (var i=0; i<8; i++) {
  for(var j=0; j<3; j++){
    
    /*textを分岐させる*/
    if(j==0){
      var text = text1[i];
    } else if(j==1) {
      var text = text2[i];
    } else {
      var text = text3[i];
    }
    
    /*Pの時間を短くする*/
    if(text == "P"){
      const welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: text,
        trial_duration: 500,
      };
      timeline.push(welcome);
    }
    /*おどろきの声*/
    else if(text == "Pの時間みじかっ！"){
      const welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: text,
        trial_duration: 500,
      };
      timeline.push(welcome);
    }
    /*掛け声*/
    else if(j==1){
      const welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: text,
        trial_duration: 800,
      };
      timeline.push(welcome);
    }
    /*空白*/
    else if(j==2){
      const welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: text,
        trial_duration: 200,
      };
      timeline.push(welcome);
    }else{
      const welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: text,
        trial_duration: 1000,
      };
      timeline.push(welcome);
    }
  }
}