function getElementValueById(discountValueId){
    const discount = document.getElementById(discountValueId);
    const discountValueString  = discount.innerText;
    const discountValue = parseFloat(discountValueString);
    return discountValue;
}