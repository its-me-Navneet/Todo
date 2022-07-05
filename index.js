 function update(){  
 
    if(localStorage.getItem('itemsJson')==null){ 
        itemjsonarray =[] ;
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray)) ;
    }
    else{
        itemjsonarraystr = localStorage.getItem('itemsJson') ;
        itemjsonarray = JSON.parse(itemjsonarraystr) ;
      
     
       

  let tablebody = document.getElementById("tablebody") ; 

  let str="" ;

  itemjsonarray.forEach((element,index ) => {
      str+=`
      <tr>
              <td>${index+1}</td>
              <td>${element[0]}</td>
              <td>${element[1]}</td> 
               <td><button type="submit" onclick="deletee(${index})" >Remove</button></td>
          </tr>
          `
  });
  tablebody.innerHTML=str ;
}

 }
 function add() { 
     
    let tit= document.getElementById("title").value;
     let desc =document.getElementById("Description").value;  
     //console.log(tit) ;
    if(localStorage.getItem('itemsJson')==null){ 
        console.log("hh");
        itemjsonarray =[] ;
        itemjsonarray.push([tit,desc]) ; 
        localStorage.setItem('itemsJson',JSON.stringify(itemjsonarray)) ;
    }
    else{
        itemjsonarraystr = localStorage.getItem('itemsJson') ;
        itemjsonarray = JSON.parse(itemjsonarraystr) ;
        itemjsonarray.push([tit,desc]) ;
        localStorage.setItem('itemsJson' , JSON.stringify(itemjsonarray)) ;

    } 
 
     update() ;

 
  

 }   
 //localStorage.clear();
 var cli =document.getElementById("add") ;
 cli.addEventListener("click",add); 
   update(); 
 function deletee(index){
    itemjsonarraystr = localStorage.getItem('itemsJson') ;
    itemjsonarray = JSON.parse(itemjsonarraystr) ;  
     itemjsonarray.splice(index,1) ;
    localStorage.setItem('itemsJson' , JSON.stringify(itemjsonarray)) ; 
     update();
 }
 
