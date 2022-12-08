const roomsElement = document.getElementById('roomsSectionMenu');
const roomsDropdownElement = document.getElementsByClassName('dropdownItem')[0];

// const bookingModal = document.getElementById('bookingModal');
// const modalInput = document.getElementById('modalInput');

const facillitiesElement = document.getElementById('facillitiesSectionMenu');
const facillitiesDropdownElement = document.getElementsByClassName('dropdownItemFac')[0];

// bookingModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus();
// });

roomsElement.addEventListener('mouseover', function () {
  roomsDropdownElement.style.display = 'flex';
});

roomsElement.addEventListener('mouseout', function () {
  roomsDropdownElement.style.display = 'none';
});


facillitiesElement.addEventListener('mouseover', function () {
  facillitiesDropdownElement.style.display = 'flex';
});

facillitiesElement.addEventListener('mouseout', function () {
  facillitiesDropdownElement.style.display = 'none';
});
