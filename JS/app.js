//Side navigation 
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators:false, 
  height:500,
  transition:500,
  interval:6000
});

//Autocomplete

const ac = document.querySelector('.autocomplete');

M.Autocomplete.init(ac, {
  data : {
    "Afghanistan":null,
    "Albania":null,

    "Algeria":null,

    "American Samoa":null,

    "Andorra":null,

    "Angola":null,

    "Anguilla":null,

    "Antigua and Barbuda":null,

    "Argentina":null,
    
    "Botswana":null,

    "Brazil":null,

    "Brunei":null,

    "Bulgaria":null,

    "Burkina Faso":null,

    "Burundi":null,

    "Cambodia":null,

    "Cameroon":null,

    "Canada":null,
    "India":null,
    "United State of America":null
  }
});