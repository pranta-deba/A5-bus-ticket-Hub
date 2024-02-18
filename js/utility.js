function getStringToNumberById(id) {
  return parseInt(document.getElementById(id).innerText);
}

function setValueById(id, value) {
  document.getElementById(id).innerText = value;
}

function setSheetAndPriceById(id, name, price) {
  const template = `<div class="flex gap-4 py-1 inter text-[#03071299] text-base font-medium">
                            <p class="flex-1">${name}</p>
                            <p class="flex-1">Economoy</p>
                            <p>${price}</p>
                    </div>`;
  document.getElementById(id).innerHTML += template;
}

function setDiscountPriceById(id, price, couponCode, discount) {
  const template = `<div class="flex justify-between text-base font-medium">
                      <p>Discount Price <span class="text-xs text-primaryColor"> (${couponCode}) ${discount}% off</span></p>
                      <p>BDT <span>${price}</span></p>
                  </div>`;
  document.getElementById(id).innerHTML += template;
}
