// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
    for(let i=0; i<encodedStr.length; i++)
		{
			let char = encodedStr[i];
			if (char.match(/[A-Za-z]/)) {
				let code = char.charCodeAt(0);
				if(code >= 65 && code <= 90)
				{
					char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
			    }
				else if(code >= 97 && code <= 122)
				{
					char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
			    }
			}
			decodedArr.push(char);
		}
	return decodedArr;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
