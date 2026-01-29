/* 課題に関するコードを以下に書く */
const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p><span style='font-size: 20pt;'>逢いにきてくれてありがと♡</span></p>"+
  "<p>キーをどれか押してねっ♡</p>"
};

/*教示*/
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>これからぁ〜２つのマークがでてくるよっ！どっちかの図形を選んでね〜♡</p>"+
    "<p>君の選択に対して、「みどりいろのニコニコ」か「あかいろのぴえん」が返ってくるよっ♡</p>"+
    "<p>どっちかのマークはニコニコになりやすくって〜もうかたっぽはぴえんになりやすいの…</p>"+
    "<p>がんばってニコニコがゲットできるように，選んでね♡</p>"+
    "<p><br></p>"+
    "<p>あとぉ〜ニコニコのなりやすさは途中で変わることがあるよ〜♡</p>"+
    "<p>マークの位置もころころ変わるから注意してねっ♡</p>"+
    "<p><br></p>"+
    "<p>それじゃあ〜、キーをどれか押して〜ゲームすたあとっ♡</p>"
};

/*刺激*/
const stimuli = [
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
               data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
]

/*選択肢*/
const choice = {
    timeline: [{
      stimulus: '',
      type: jsPsychHtmlButtonResponse,
      choices: jsPsych.timelineVariable('stimulus'),
      button_html: '%choice%',
      trial_duration: 2000,
      data: jsPsych.timelineVariable('data')
  },{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: function(){
      var last_select = jsPsych.data.get().last(1).values()[0].response;
      var last_left_right_s1 = jsPsych.data.get().last(1).values()[0].left_right_s1;
      if(last_select==0 && last_left_right_s1==1){
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"]
      } else if(last_select==0 && last_left_right_s1==2) {
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"]
      } else if(last_select==1 && last_left_right_s1==1) {
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p>"]
      } else if(last_select==1 && last_left_right_s1==2) {
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p>"]
      } else {
        return ['<p style="font-size: 48px">時間内に選んでね♡</p>']
      }
    },
    button_html: '%choice%',
    trial_duration: 500,
    response_ends_trial: false,
  },{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: function(){
      var last_select = jsPsych.data.get().last(2).values()[0].response;
      var last_left_right_s1 = jsPsych.data.get().last(2).values()[0].left_right_s1;
      var last_reward_s1 = jsPsych.data.get().last(2).values()[0].reward_s1;
      var last_reward_s2 = jsPsych.data.get().last(2).values()[0].reward_s2;
      if (last_select==0 && last_left_right_s1 == 1 && last_reward_s1 == 1){
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
      } else if (last_select==0 && last_left_right_s1 == 1 && last_reward_s1 == 0){
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
      } else if (last_select==0 && last_left_right_s1 == 2 && last_reward_s1 == 1){
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
      } else if (last_select==0 && last_left_right_s1 == 2 && last_reward_s1 == 0){
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 1 && last_reward_s2 == 1){
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 1 && last_reward_s2 == 0){
        return ["<p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 2 && last_reward_s2 == 1){
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 2 && last_reward_s2 == 0){
        return ["<p style='position: absolute; top: 40%; right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%; right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
      } else {
        return ['<p style="font-size: 48px">時間内に選んでね♡</p>']
      }
    },
    button_html: '%choice%',
    trial_duration: 1000,
    response_ends_trial: false
  },{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices: ['<p style="font-size: 48px">+</p>'],
    button_html: '%choice%',
    trial_duration: function(){
      return Math.floor(Math.random() * 1000) + 500;
    },
    response_ends_trial: false
  }],
  timeline_variables: stimuli
};

var sub_id = jsPsych.randomization.randomID(6)

/*デブリーフ*/
const debrief = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
    const s1_reward = jsPsych.data.get().filter({trial_type: "html-button-response", response: 0}).select('reward_s1').sum();
    const s2_reward = jsPsych.data.get().filter({trial_type: "html-button-response", response: 1}).select('reward_s2').sum();
    const correct_rate = ((s1_reward + s2_reward)/80)*100;
    return "<p>君のIDは、<strong>"+sub_id+"</strong>だよ♡このIDはよ〜く覚えててねっ♡スクショたーいむ♡♡</p>"+
      "<p>すっご〜い♡君の正答率は<strong>"+correct_rate+"%♡</strong></p>" +
      "<p>結果がCSVでダウンロードされるよ♡ブラウザを閉じたらもう逢えなくなっちゃう…でも楽しかったよっ♡</p>"
  },
  data: {participant_id:sub_id}
};

/*タイムラインの設定*/
const timeline = [welcome, fullscreen, instruction, choice, debrief];
