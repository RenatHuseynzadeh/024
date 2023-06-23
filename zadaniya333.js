function firstt(num){
    let rrr = num
    console.log(`${rrr}ly`);

}

firstt("total")


function two(numm){
    let kluc = 0
    let znac = 0

    for(let i in numm){
        znac = numm[i]
    }  
    
    for(let m in numm){
        kluc = m
    }  

    console.log(`["${kluc}", ${znac}]`);

}

two({a: 1})




function kolic(nummm){
    console.log(String(Math.abs(nummm)).length)

}

kolic(318)