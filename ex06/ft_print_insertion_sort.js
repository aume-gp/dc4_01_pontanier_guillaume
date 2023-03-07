/*Écrire une fonction qui prend en entrée un tableau d'entiers non trié et qui le trie par insertion. La fonction doit modifier le tableau d'origine et afficher le tableau trié.*/

function ft_print_insertion_sort(array) {
    for (let index = 0; index < array.length; ++index) {
      for (let index2 = 0; index2 < (array.length - 1 - index); ++index2) {
        if (array[index2] > array[index2 + 1]) {
          const temp = array[index2];
          array[index2] = array[index2 + 1];
          array[index2 + 1] = temp;
        }
      }
    }
      return array;
  }