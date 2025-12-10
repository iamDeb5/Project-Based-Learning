class YoutubeChanel {
    constructor (){
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name}, you have subscribed this chanel`)
    }
}

class User {
    constructor (name){
        this.name = name;
    }

    update(data){
        console.log(data);
    }
}

let sheriyans = new YoutubeChanel();
let user1 = new User("Aksh")

sheriyans.subscribe(user1);