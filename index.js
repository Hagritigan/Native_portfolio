let wrap_menu = document.querySelectorAll('.wrap_menu');
let wrap_menuArray = Array.prototype.slice.call(wrap_menu,0);
wrap_menuArray.forEach(function(el){
  let button = el.querySelector('a[data-toggle="wrap_menu"]'),
    menu = el.querySelector('.drop-menu'),
    arrow = button.querySelector('i.icon-arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

let wrapArr = ['wrap_player', 'wrap_manager', 'wrap_stats', 'wrap_performance']






let textArr = [
  'bio_1', 'bio_2', 'bio_3', 'bio_4', 'bio_5', 'bio_6', 'bio_7', 'reg_stat', 'po_stat',
  'int_stat', 'award_list', "achieve_list", 'red_gal', 'man_gal', 'int_gal', 'pers_gal'
]
let menuArr = [
  'menu_1', 'menu_2', 'menu_3', 'menu_4', 'menu_5', 'menu_6', 'menu_7', 'menu_8', 'menu_9',
  'menu_10', 'menu_11', 'menu_12', 'menu_13', 'menu_14', 'menu_15', 'menu_16'
]

for (let i=0; i< menuArr.length; i++) {
  document.getElementById(menuArr[i]).addEventListener('click', (event) => {
    document.getElementsByClassName('active_text')[0].classList.remove('active_text');
    document.getElementById(textArr[i]).classList.add('active_text');
  })
}