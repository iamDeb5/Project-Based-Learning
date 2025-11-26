const reels = [
  {
    username: "tech_guru",
    likeCount: 12400,
    isLiked: false,
    commentCount: 320,
    caption: "New tech dropping soon! 💥",
    video: "./Assets/video1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 40,
    isFollowed: true
  },
  {
    username: "travel_vibes",
    likeCount: 9850,
    isLiked: true,
    commentCount: 210,
    caption: "Take me back to this paradise 🌴✨",
    video: "./Assets/video2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 55,
    isFollowed: false
  },
  {
    username: "foodie_queen",
    likeCount: 15030,
    isLiked: false,
    commentCount: 450,
    caption: "This pasta is everything 😍🍝",
    video: "./Assets/video3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 60,
    isFollowed: true
  },
  {
    username: "fitness_freak",
    likeCount: 20300,
    isLiked: true,
    commentCount: 600,
    caption: "No excuses. Just results 💪🔥",
    video: "./Assets/video4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 100,
    isFollowed: false
  },
  {
    username: "pet_world",
    likeCount: 45000,
    isLiked: true,
    commentCount: 900,
    caption: "Dog or cat? 😌🐶🐱",
    video: "./Assets/video5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 220,
    isFollowed: true
  },
  {
    username: "style_icon",
    likeCount: 8700,
    isLiked: false,
    commentCount: 150,
    caption: "Outfit of the day ✨👗",
    video: "./Assets/video6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 35,
    isFollowed: true
  },
  {
    username: "music_vibes",
    likeCount: 30000,
    isLiked: true,
    commentCount: 1000,
    caption: "Feel the beat 🎧🎶",
    video: "./Assets/video7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 250,
    isFollowed: false
  },
  {
    username: "daily_motivation",
    likeCount: 5400,
    isLiked: false,
    commentCount: 90,
    caption: "You’re stronger than you think 💙",
    video: "./Assets/video8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 15,
    isFollowed: true
  },
  {
    username: "art_attack",
    likeCount: 7700,
    isLiked: true,
    commentCount: 230,
    caption: "Creating something magical 🎨✨",
    video: "./Assets/video9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 50,
    isFollowed: false
  },
  {
    username: "funny_boi",
    likeCount: 120500,
    isLiked: true,
    commentCount: 3000,
    caption: "Try not to laugh challenge 😂🔥",
    video: "./Assets/video10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 430,
    isFollowed: true
  }
];

let sum = " "
reels.forEach(function(elem){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-telegram-2-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`
})

let allReels = document.querySelector(".all-reels")
allReels.innerHTML = sum