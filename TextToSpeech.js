/*
* @param {string} text     
* @param {number} voice        0~19
* @param {number} volume       0~1
* @param {number} rate         0.1~2 
* @param {number} pitch        0~2
* @param {boolean} showElapsedTime

*/



if ('speechSynthesis' in window) {

   var TextToSpeech = function(text,voice,volume,rate,pitch,showElapsedTime){
  
     	var msg = new SpeechSynthesisUtterance();
     	var voices = window.speechSynthesis.getVoices();

     	if(typeof text=="string"){
     		msg.text = text;
     	}else{
     		console.error("text must be a string at first argument")
     		return
     	};
    if (typeof voice !== 'undefined'){
		if(typeof voice=="number"){
			if(0<=voice&&voice<=19){
		      msg.voice = voices[voice];
	        }else{
	          console.error("voice number must between 0~19 at second argument")
	        }
	    }else{
	    	console.error("voice must be number at second argument")
	    }
    }	    
    if (typeof volume !== 'undefined'){
     	if(typeof volume=="number"){

     		if(0<=volume&&volume<=1){
     		  msg.volume = volume;
     		}else{
     			console.error("volume must greater than zero and smaller than 1 at third argument")
     			return
     		}
     	}else{
     		console.error("volume must be a number at third argument")
     		return
     	};
   }  	
	if (typeof rate !== 'undefined'){
		if(typeof rate=="number"){
			if(0.1<=rate&&rate<=2){
		       msg.rate = rate; 
		    }else{
		    	console.error("rate must greater than 0.1 and smaller than 2")
		    	return
		    }
	    }else{
     		console.error("rate must be a number at fourth argument")
     		return
     	};
    } 	
	if (typeof pitch !== 'undefined'){
		if(typeof pitch=="number"){
			if(0.1<=pitch&&pitch<=2){
		       msg.pitch = pitch; 
		    }else{
		    	console.error("pitch must greater than 0 and smaller than 2 at fifth argument")
		    	return
		    }
	    }else{
     		console.error("pitch must be a number at fifth argument")
     		return
     	};
    } 	    
    if (typeof showElapsedTime !== 'undefined'){
	if(typeof showElapsedTime=="boolean"){
		 if(showElapsedTime==true){
		 	msg.onend = function(e) {
			  console.log('Finished in ' + event.elapsedTime + ' seconds.');
			};
		}
        }else{
    	    console.error("showElapsedTime must be true of false at sixth argument")
        }

    }
    
     	speechSynthesis.speak(msg);
  }


	
}

