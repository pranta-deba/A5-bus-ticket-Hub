function getStringToNumberById(id) {
  return parseInt(document.getElementById(id).innerText);
}
function setValueById(id, value) {
  document.getElementById(id).innerText = value;
}
function setHtmlTempleteById(id, name, price) {
  const template = `<div class="flex gap-4 py-1 inter text-[#03071299] text-base font-medium">
                            <p class="flex-1">${name}</p>
                            <p class="flex-1">Economoy</p>
                            <p>${price}</p>
                    </div>`;
  document.getElementById(id).innerHTML += template;
}
