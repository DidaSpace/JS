function generatePassword(length = 8, options = {}) {
  const { letters = true, numbers = true, specialChars = true } = options;
  const lettersSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersSet = "0123456789";
  const specialCharsSet = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = "";
  if (letters) characters += lettersSet;
  if (numbers) characters += numbersSet;
  if (specialChars) characters += specialCharsSet;

  if (!characters) throw new Error("No character sets selected");

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

module.exports = {
  generatePassword,
};
