# s1の空箱
left_right_s1 <- NULL

# シャッフルする回数
repeat_shuffle <- 8

# 1212121212をシャッフルして、s1の箱に入れていく
for(i in 1:repeat_shuffle){
  left_right_10 <- rep(1:2, 5)
  left_right_10shuffle <- sample(left_right_10, length(left_right_10))
  left_right_s1 <- c(left_right_s1, left_right_10shuffle)
}

# s2の箱には、s1と逆方向が入る
left_right_s2 <- 3 - left_right_s1

# 1と2で表していたものを、leftとrightに翻訳する
left_right_s1_text <- ifelse(left_right_s1==1, "left", "right")
left_right_s2_text <- ifelse(left_right_s2==1, "left", "right")

# 報酬を1、罰を0とする　結果の空箱を用意する
reward_s1 <- NULL
reward_s2 <- NULL

# シャッフル5回目から確率を逆転させる（シャッフルの総回数が8回）
reverse_block <- 5

# 1111011110をシャッフルしてreward82に、1000010000をシャッフルしてreward28に入れる
# 前半はs1に80%をs2に20%を割り当てて、後半は逆転させる
for(i in 1:repeat_shuffle){
  reward82 <- rep(c(1,1,1,1,0),2)
  reward82_shuffle <- sample(reward82, length(reward82))
  
  reward28 <- rep(c(1,0,0,0,0),2)
  reward28_shuffle <- sample(reward28, length(reward28))
  
  if(i<reverse_block){
    reward_s1 <- c(reward_s1, reward82_shuffle)
    reward_s2 <- c(reward_s2, reward28_shuffle)
  }else{
    reward_s1 <- c(reward_s1, reward28_shuffle)
    reward_s2 <- c(reward_s2, reward82_shuffle)
  }
}

# HTML形式に入れるための変数（s1）
top_bottom_s1 = "top"
top_bottom_position_s1 = 40
image_path_s1 = "RL/stimuli/s1.jpeg"
image_width_s1 = 200
left_right_position_s1 <- 20

# HTML形式に入れるための変数（s2）
top_bottom_s2 = "top"
top_bottom_position_s2 = 40
image_path_s2 = "RL/stimuli/s2.jpeg"
image_width_s2 = 200
left_right_position_s2 <- 20

# HTML形式に入れる
stimulus <- paste("[\"<p style='position: absolute; ",
                  top_bottom_s1, ": ",
                  top_bottom_position_s1, "%;",
                  left_right_s1_text, ": ",
                  left_right_position_s1, "%'><img src='",
                  image_path_s1, "' width='",
                  image_width_s1, "px'/></p>\",",
                  "\"<p style='position: absolute; ",
                  top_bottom_s2, ": ",
                  top_bottom_position_s2, "%;",
                  left_right_s2_text, ": ",
                  left_right_position_s2, "%'><img src='",
                  image_path_s2, "' width='",
                  image_width_s2, "px'/></p>\"]",sep="")

# 選択したものをまとめる
RL_stim <- data.frame(stimulus,
                      left_right_s1,
                      left_right_s2,
                      reward_s1,
                      reward_s2)

stimuli_file <- "RL/RL/stimuli/stimuli.txt"
file.create(stimuli_file)

for(i in 1:nrow(RL_stim)){
  if(i==1){write("const stimuli = [", stimuli_file, append=TRUE)}
  write(paste0("{stimulus:", as.character(RL_stim$stimulus[i]),",
               data:{left_right_s1:", RL_stim$left_right_s1[i],
               ", left_right_s2:",  RL_stim$left_right_s2[i],
               ", reward_s1:", RL_stim$reward_s1[i],
               ", reward_s2:", RL_stim$reward_s2[i],"}}"), stimuli_file, append=TRUE)
  if(i==nrow(RL_stim)){
    write("]", stimuli_file, append=TRUE)
  }else{
    write(",", stimuli_file, append=TRUE)
  }
}