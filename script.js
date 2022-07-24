// Assignment code here
var generatePassword = function () {
	var password = '';
	var lowercase = 'abcdefghijklmnopqrstuvwxyz';
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var numbers = '0123456789';
	var special = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
	var characterSet = '';
	var passwordLength;
	var passwordLength = prompt(
		'Choose a password length between 8 and 128 characters.'
	);
	if (passwordLength < 8 || passwordLength > 128) {
		alert('Password length must be between 8 and 128 characters.');
		return generatePassword();
	}
	var confirmLowercase = confirm(
		'Would you like to include lowercase letters?'
	);
	var confirmUppercase = confirm(
		'Would you like to include uppercase letters?'
	);
	var confirmNumbers = confirm('Would you like to include numbers?');
	var confirmSpecial = confirm('Would you like to include special characters?');
	if (confirmLowercase) {
		characterSet += lowercase;
	}
	if (confirmUppercase) {
		characterSet += uppercase;
	}
	if (confirmNumbers) {
		characterSet += numbers;
	}
	if (confirmSpecial) {
		characterSet += special;
	}

	if (characterSet === '') {
		alert('You must choose at least one character type.');
		return generatePassword();
	}

	for (var i = 0; i < passwordLength; i++) {
		password += characterSet.charAt(
			Math.floor(Math.random() * characterSet.length)
		);
	}
	return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
