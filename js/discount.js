document.getElementById('btn-apply').addEventListener('click', function(){

    const discountAmountString = document.getElementById('discount-amount').innerText;
    const discountAmount = parseFloat(discountAmountString.replace('%', ''));
    const price = getElementValueById('price-value');

    const payAmount =(price/100)*(100-discountAmount);
    document.getElementById('pay-amount').innerText = payAmount.toFixed(2);

})