/*Écrire une fonction qui insert dans un tableau un nombre reçu en paramètre dans l’ordre croissant. Le tableau de référence sera le suivant.
let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]*/

function ft_insert_number(number) {
    let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    tab.push(number);
    tab.sort((a, b) => a - b);
    console.log(tab);
  }
  
  ft_insert_number(15);