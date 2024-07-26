// stack memory(primitive) and heap memory(non-primitive)

//Stack memory -> original value of a datatype is intact, only a copy copy is passed 
 let num=5;
 let num2=num;
 // if we change the value of num 2 then th evalue of num2 will not be affected
 num2=10;
 console.log(num);
 console.log(num2);



 //Heap memory -> original value is passed 
 let arr=[2,4,6,8];
 let arr2=arr;
 arr2[0]=3;
 console.log(arr);
 console.log(arr2);