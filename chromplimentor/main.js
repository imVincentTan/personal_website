var text_data = {
    "zh":{
       "greeting":[
          "嗨",
          "哈喽"
       ],
       "name":[
          "圆圆",
          "宝宝",
          "老婆",
          "乖乖",
          "小宝宝",
          "小乖乖"
       ],
       "compliment":[
          "今天长的好美哦！",
          "我爱你！",
          "么么哒！",
          "今天好乖哦！",
          "给亲亲！muamua！",
          "给抱抱！",
          "给拍拍！",
          "哇哦！你怎么会这么漂亮呢！",
          "谢谢小宝宝天天让我这么开心！么么哒！"
       ]
    },
    "en":{
       "greeting":[
          "Hi",
          "Hello"
       ],
       "name":[
          "Jenny",
          "baby",
          "wifey",
          "babe",
          "cutie"
       ],
       "compliment":[
          "You look so beautiful today!",
          "I love you!",
          "Muah!",
          "You look so cute today!",
          "Kissies! MUAHMUAH!",
          "HUGGIE!",
          "Pat pat!",
          "WOW! How can you be this beautiful!",
          "Thanks babe for making me so happy every day! MUAH!"
       ]
    }
}

var language = 'zh';

const numDefaultDoggos = 25;
var defaultDoggoRatio = 0.2;

function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

function newText(){
    switch(language){
        case 'zh':
            document.getElementById('line-one').innerHTML = randomItem(text_data[language].greeting) + randomItem(text_data[language].name) + '！';
            document.getElementById('line-two').innerHTML = randomItem(text_data[language].compliment);
            break;
        case 'en':
            document.getElementById('line-one').innerHTML = randomItem(text_data[language].greeting) + ' ' + randomItem(text_data[language].name) + '!';
            document.getElementById('line-two').innerHTML = randomItem(text_data[language].compliment);
            break;
        // can add more language formatting cases for different patterns below
    }
}

function setBackground(){
    if (Math.random() < defaultDoggoRatio){
        setLocalBackground();
    }else{
        setApiBackground();
    }
    
}

function setApiBackground(){
    const url = 'https://dog.ceo/api/breeds/image/random';
    
    fetch(url).then(function(response) {
        response.text().then(function(text) {
            
            requestJSON = JSON.parse(text);

            if (requestJSON.status === "success"){
                document.body.style.backgroundImage = "url('" + requestJSON.message + "')";
            } else {         
                // use local
                setLocalBackground();
            }
        });
    });
}

function setLocalBackground(){
    var temp = Math.floor(Math.random() * 25).toString();
    document.body.style.backgroundImage = "url('css/images/default" + temp + ".jpg')";
}




window.onload = function(){
    setBackground();
    newText();
};


