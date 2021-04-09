function depositCalucalor(){
    let req = true;
    const initialAmountReq = 1000;
    const yearPercentageReq = 100;
    const numberFixed = 2;
    while(req){
        let initialAmount = prompt('Initial amount?', '0');
        if (isNaN(initialAmount) || initialAmount < initialAmountReq ) {
            alert('Invalid input.')
        }else{
            let depositPeriod = parseInt(prompt('Number of years?', '0'));
            if (isNaN(depositPeriod) || depositPeriod <= 1 ) {
                alert('Invalid input.')
            } else{
                let yearPercentage = prompt('Percentage of year?', '0');
                if (isNaN(yearPercentage) || yearPercentage > yearPercentageReq ) {
                alert('Invalid input.')
                } else{
                    let A = initialAmount * Math.pow(1 + yearPercentage / yearPercentageReq, depositPeriod);
    
                    let result= [
                        `Initial amount: ${initialAmount}`,
                        `Number of years: ${depositPeriod}`,
                        `Percentage of year ${yearPercentage}`,
                        '',
                        `Total profit: ${(A.toFixed(numberFixed) - initialAmount).toFixed(numberFixed)}`,
                        `Total amount: ${A.toFixed(numberFixed)}`];
                
                    alert(result.join('\n'));
                    break
                }
            }
        }
    }
}
depositCalucalor()
