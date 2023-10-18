const $ = document;
const selectCountry =  $.querySelector('#country');
const selectCity = $.querySelector('#city');
const selectNumber = $.querySelector('#number');
const selectHours = $.querySelector('#hours');
const selectDate =  $.querySelector('#date');
const selectAirlines = $.querySelector('#airline');


let dataObj = {
  iran : {
    city : ['tehran','zanjan','tabriz','mashad'],
    number : [1,2,3,4,5,6,7,8],
    hours : ['10:30','12:30','15:00','20:00'],
    date : ['sunday','monday','wednesday','friday'],
    airlines : ['iran air','mahan air','zagros air']
  },
  usa : {
    city:['new york','chicago','san fransisco','california'],
    number:[1,2,3,4,5,6],
    hours:['22:30','02:30'],
    date:['wednesday','friday'],
    airlines:['luftansa air','turkish air','pegasus air']
  },
  germany : {
    city:['monich','frankfort','berlin'],
    number:[1,2,3,4,5],
    hours:['12:30','02:30'],
    date:['monday','friday'],
    airlines:['luftansa air','pegasus air']
  },
  canada : {
    city:['toronto'],
    number:[1,2,3,4],
    hours:['12:30','02:30'],
    date:['monday','tuesday'],
    airlines:['luftansa air','pegasus air']
  }
};


selectCountry.addEventListener('change',(e)=>{
  selectCity.innerHTML = '';
  selectNumber.innerHTML = '';
  selectHours.innerHTML =  '';
  selectDate.innerHTML = '';
  selectAirlines.innerHTML = '';

  let country = e.target.value;
  let selected = dataObj[country];
  let itemtCity = selected.city;
  let itemNumber = selected.number;
  let itemHours = selected.hours;
  let itemDate = selected.date;
  let itemAirline = selected.airlines;

  itemtCity.forEach(element => {
    selectCity.innerHTML += `<option> ${element} </option>`;
  });
  itemNumber.forEach(element=>{
    selectNumber.innerHTML+= `<option> ${element} </option>`;
  });
  itemHours.forEach(element=>{
    selectHours.innerHTML += `<option> ${element} </option>`;
  });
  itemDate.forEach(element=>{
    selectDate.innerHTML += `<option> ${element} </option>`;
  });
  itemAirline.forEach(element=>{
    selectAirlines.innerHTML += `<option> ${element} </option>`;
  });
});