var comparacion = function(array1, array2){
if(array.length !== array2.length){
  document.write("los arreglos no tienen la misma longitud")
  return false;

} else{
  for (var i=0; i<array1.length; i++){
    console.log(array1[i],array2[i]);
    if(array1[1] !=array2[i]){
      document.write("los arreglos son diferentes")
        return false;
    }
  }
  document.write("los arreglos son iguales")
  return true;  
}
}


var arreglos1=[1,2,3,4,5,6,7,8,9];
var arreglos2=[1,2,3,4,5,6,7,8,9];

comprobacion arreglos()
