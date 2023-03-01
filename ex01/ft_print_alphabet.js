/*Écrire une fonction qui affiche l’alphabet en majuscule, une string contenant l’alphabet en minuscule sera passée en paramètre la fonction. Chaque lettre devra être stockée dans une cellule du tableau.*/

function ft_print_alphabet(string) {
    const splitedString = string.split("");
    for (let index = 0; index < splitedString.length; ++index) {
      let asciiRef = splitedString[index].charCodeAt(0);
      let newAsciiRef = asciiRef - 32;
      let newChar = String.fromCharCode(newAsciiRef);
      splitedString[index] = newChar;
    }
    console.log(splitedString);
  }
  ft_print_alphabet("abcdefghijklmnopqrstuvwxyz");