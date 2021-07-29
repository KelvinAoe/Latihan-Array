// tugas no 1
function hitung(array){
 let a = array.length
 let sum = 0;
if (typeof array === 'object' && Number(a)){
    for (let i = 0 ; i < a; i++){
        sum += array[i]
    }
    return sum ;
}else{
    return false;
}

}
console.log(hitung([1,2,3]))


//tugas no 2
function terbalik(array){
    var tulisan = [];
    if (typeof array === 'object'){
    for( var i = array.length - 1 ; i>= 0 ; i--){
    tulisan.push(array[i])
    }
    return tulisan ;
    }else{
        console.log("error input bukan array")
    }
}
console.log(terbalik([123,"kel"]))

//tugas no 3
function duplicate(array){
    var tulisan = [] ;
    if (typeof array === 'object'){
    for(i=0; i < array.length; i++){
        let same = false
           for(j= 0; j<tulisan.length;j++){
               if (array[i] === tulisan[j]) {
                    same = true 
                    break                  
               }
            }
            if (!same) {
             tulisan.push(array[i])
            }
        }
           return tulisan;
        } else{
                console.log("error input bukan array")
                 }
            }

console.log(duplicate([1,2,3,1,3,1,5,6]))




//tugas no 4


function jajanBoba(uangJajan){
    const listBoba = [
        ['Xing Fu Tang', 38000], 
        ['OneZo', 53500],
        ['KOI The', 36000],
        ['Chatime', 25000],
        ['Kokumi', 42000],
        ['Bubble Station Milk', 13000]
    ]

    console.log ("David mulai jajan dengan uang jajan "+uangJajan+" rupiah") 
     for(let i = 0, l1 = listBoba.length; i<l1; i++ ){
         if(uangJajan - listBoba[i][1] >= 0){
            console.log("Dengan uang "+uangJajan+ " cukup membeli " +listBoba[i][0]+"")
            console.log("setelah beli"+listBoba[i][0]+" uang nya berkurang "+ listBoba[i][1]+" ")
            uangJajan -= listBoba[i][1];
            console.log("jadi uang nya sisa" +uangJajan)
         }else{
             console.log("Dengan uang" + uangJajan + "tidak cukup membeli " +listBoba[i][0])
         }
 }
 console.log("David pulang dengan sisa uang jajan"+uangJajan)
}


 jajanBoba(100000)
