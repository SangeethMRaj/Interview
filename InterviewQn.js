// There is a shop. In that shop, only 2 types of packets are available for rice. (2kg and 5kg) 

// we need to distribute the package according to customers' requirements.
// for example, 
// 1. ask for 4 kg then, 2 units of 2kg 
// 2. ask for 11 kg then, 1 unit of 5kg and 3 units of 2kg


function shop(){
    var packet1=2;
    var packet2=5;

    var totalkg=111
    if(totalkg<packet2){
        var totalNumber=totalkg/packet1
        console.log(`unit of ${totalNumber} of ${packet1}kg`);
    }
    if(totalkg>packet2){
        var totalNumber=Math.floor(totalkg/packet2)
        var balance = totalkg - (totalNumber*packet2)
        console.log('bq',balance);
        if(balance%2==0){
            var balancetotal =balance/2
            console.log(` ${totalNumber} unit of ${packet2}kg and ${balancetotal} unit of ${packet1}kg`);
        }else{
                totalNumber=totalNumber-1
                var balancekg=balance+5
                var balancepackage1=balancekg/2
                
                console.log(` ${totalNumber} unit of ${packet2}kg and ${balancepackage1} unit of ${packet1}kg`);
            
        }
        
    }

}
shop()