var caesarshift= function(){

	var mystring = "hello";
	var shiftamount = 14;
	var cipherstring = ""

	var x ='';
	for (var counter =  0; counter < 5; counter++){
		
			var asciiCode = mystring.charCodeAt(counter);

			x = String.fromCharCode((asciiCode -65 + shiftamount)+65);
			cipherstring+=x;

	}

	return cipherstring;
}


document.getElementById('demo').innerHTML = window.caesarshift();
