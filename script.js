function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

    const regex = /[a-zA-Z]/g;
	const decodedStr = str.replace(regex, (char) => {
    const index = rot13.indexOf(char);

    if(index === -1)
	{
      return char;
    }
		return alphabet[index];
  });
  return decodedStr;
}
module.exports = rot13;
