function ft_print_update_array(array) {
    for (let index = 0; index < array.length; ++index) {
      array[index] = array[index]+1;
    }
    console.log(array);
  }
  
  ft_print_update_array([1,2,3,4,5,6,7,8,9,7,4,5,1])