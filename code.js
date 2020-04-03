const maskify = (str) => {
  let secureDigits = str.slice(0, -4);
  const identificationDigits = str.slice(-4);
	let secureArray = secureDigits.split('').map(num => {
    return num = "#"
  });

  let bigMysterySequence = secureArray
  .join('');
  return bigMysterySequence.concat(identificationDigits);
}

console.log(maskify("0000000000000000"))
