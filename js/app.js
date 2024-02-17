//  all sheets access
const allBusSheets = document.getElementsByClassName("bus-sheat");

// primary color store
const PresentBgColors = "bg-[#F7F8F8]";
const NewBgColors = "bg-primaryColor";

// used loop in all single sheet
let count = 0;
let ticketName = "";
// loops start
for (const sheet of allBusSheets) {
  sheet.addEventListener("click", (e) => {
    // check double click
    if (ticketName === e.target.innerText) {
      Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "You already select!",
      });
      return;
    }
    // check only 4 ticket
    else if (count >= 4) {
      Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "You already select 4 ticket",
      });
      return;
    }

    // sheet name. sheet free, and sheet class
    const sheetName = e.target.innerText;
    ticketName = sheetName;
    const sheetFree = getStringToNumberById("sheetFree");

    // change bg color
    e.target.classList.remove(PresentBgColors);
    e.target.classList.add(NewBgColors);

    // total Sheets Space and total sheet booking count
    const totalSheets = getStringToNumberById("totalSheetsSpace");
    const bookingCount = getStringToNumberById("sheetBookingCount");
    const sheetSpace = totalSheets - 1;
    const sheetBooking = bookingCount + 1;
    if (sheetSpace < 0) {
      return;
    }

    // total price and grand Price
    const totalPrice = getStringToNumberById("total-Price");
    const grandPrice = getStringToNumberById("grand-Price");

    // set dynamic value
    setValueById("totalSheetsSpace", sheetSpace);
    setValueById("sheetBookingCount", sheetBooking);
    setHtmlTempleteById("booking-sheet", sheetName, sheetFree);
    setValueById("total-Price", totalPrice + sheetFree);
    setValueById("grand-Price", totalPrice + sheetFree);

    // counting
    count++;
  });
}
// loops end
