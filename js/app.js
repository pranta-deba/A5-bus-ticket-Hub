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
    setSheetAndPriceById("booking-sheet", sheetName, sheetFree);
    setValueById("total-Price", totalPrice + sheetFree);
    setValueById("grand-Price", grandPrice + sheetFree);

    // counting
    count++;

    // coupon btn enable
    if (getStringToNumberById("sheetBookingCount") === 4) {
      document.getElementById("couponBtn").removeAttribute("disabled");
    }
  });
}
// loops end

// coupon input validation
const couponBtn = document.getElementById("couponBtn");
couponBtn.addEventListener("click", () => {
  const couponInput = document.getElementById("couponInput");
  if (couponInput.value === "NEW15") {
    const totalPrice = getStringToNumberById("total-Price");
    const discount = (totalPrice * 15) / 100;
    const newPrice = totalPrice - discount;
    setDiscountPriceById(
      "totalPriceAndDisPriceContainer",
      discount,
      "NEW15",
      15
    );
    setValueById("grand-Price", newPrice);
    document.getElementById("couponBtn").setAttribute("disabled", true);
    couponInput.value = "";
  } else if (couponInput.value === "Couple20") {
    const totalPrice = getStringToNumberById("total-Price");
    const discount = (totalPrice * 20) / 100;
    const newPrice = totalPrice - discount;
    setDiscountPriceById(
      "totalPriceAndDisPriceContainer",
      discount,
      "Couple20",
      20
    );
    setValueById("grand-Price", newPrice);
    document.getElementById("couponBtn").setAttribute("disabled", true);
    couponInput.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry!",
      text: "Coupon code invalid!",
    });
  }
});

// contact form validation
const phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("keyup", (e) => {
  const sheetBookingCount = getStringToNumberById("sheetBookingCount");
  if (e.target.value.length === 11 && sheetBookingCount > 0) {
    document.getElementById("contactNextBtn").removeAttribute("disabled");
  } else {
    document.getElementById("contactNextBtn").setAttribute("disabled", true);
  }
});

// contactNextBtn click and finish
const contactNextBtn = document.getElementById("contactNextBtn");
contactNextBtn.addEventListener("click", () => {
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");
  if (userName.value !== "" && email.value !== "") {
    const my_modal_5 = document.getElementById('my_modal_5');
    my_modal_5.showModal()
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry!",
      text: "Name or Email invalid!",
    });
  }
});

// modal Continue Btn click 
const modalContinueBtn = document.getElementById('modalContinueBtn');
modalContinueBtn.addEventListener('click', ()=>{
  window.location.reload();
});
