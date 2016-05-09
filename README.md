# Speech-Synthesis-API-wrapper


#How to use?
```
npm install speaktome
```
than
```
<script src="..\node_modules\speaktome\textToSpeech.js"  ></script>
```


CDN
```
<script src="https://raw.githubusercontent.com/EasonWang01/Speech-Synthesis-API-wrapper/master/TextToSpeech.js"></script>
```



#API
```
/*
* @param {string} text     
* @param {number} voice        0~19
* @param {number} volume       0~1
* @param {number} rate         0.1~2 
* @param {number} pitch        0~2
* @param {boolean} showElapsedTime
*/



TextToSpeech(text,voice,volume,rate,pitch,showElapsedTime);
```
