/*Écrire une fonction qui filtre tous les nombres impairs d’un tableau. 
Affichez le résultat dans la console de développement.*/

function ft_print_filter_array(array) {
    console.log(array.filter(element => element%2 === 1));
  }
  
  ft_print_filter_array([1,2,3,4,5,6,7,8,9,10])