// Nav item JS code
function addMenuListeners(menuSelector, storeSelector, listSelector) {
  const menu = document.querySelector(menuSelector);
  const store = document.querySelector(storeSelector);

  store.addEventListener('mouseover', () => {
    menu.classList.add('opened');
  });

  menu.addEventListener('mouseout', (event) => {
    if (!menu.contains(event.relatedTarget)) {
      menu.classList.remove('opened');
    }
  });

  document.querySelectorAll(listSelector).forEach((listItem) => {
    listItem.addEventListener('click', () => {
      menu.classList.remove('opened');
    });
  });
}

// For store
addMenuListeners('.menu', '.menu .store', '.menu-list');

// For Mac
addMenuListeners('.menu1', '.menu1 .mac', '.menu-list1');

// For iPad
addMenuListeners('.menu2', '.menu2 .ipad', '.menu-list2');

// For iPhone
addMenuListeners('.menu3', '.menu3 .iphone', '.menu-list3');

// For Watch
addMenuListeners('.menu4', '.menu4 .watch', '.menu-list4');

// For AirPods
addMenuListeners('.menu5', '.menu5 .ap', '.menu-list5');

// For TV
addMenuListeners('.menu6', '.menu6 .tv', '.menu-list6');

// For Entertainment
addMenuListeners('.menu7', '.menu7 .entertainment', '.menu-list7');

// For Accessories
addMenuListeners('.menu8', '.menu8 .accessories', '.menu-list8');

// For Support
addMenuListeners('.menu9', '.menu9 .support', '.menu-list9');





// --hamburger navbar js code-----------------------HAMBURGER js ----------------------//
var ham_menu = document.querySelector('.ham_menu');
var ham_menuBtn = document.querySelector('.ham_menu .m_ham');
ham_menuBtn.addEventListener('click', () => {
    ham_menu.classList.toggle('opened')
    
})



// Ham 1 - Store
var ham_item1 = document.querySelector('.store_menu');
var hamBtn1 = document.querySelector('.store_menu .s_button');

hamBtn1.addEventListener('click', () => {
    ham_item1.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item1.classList.remove('opened');
});

document.querySelector('.b1').addEventListener('click', () => {
    ham_item1.classList.remove('opened');
});

// Ham 2 - Mac
var ham_item2 = document.querySelector('.mac_menu');
var hamBtn2 = document.querySelector('.mac_menu .m_button');

hamBtn2.addEventListener('click', () => {
    ham_item2.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item2.classList.remove('opened');
});

document.querySelector('.b2').addEventListener('click', () => {
    ham_item2.classList.remove('opened');
});

// Ham 3 - iPad
var ham_item3 = document.querySelector('.ipad_menu');
var hamBtn3 = document.querySelector('.ipad_menu .ipad_button');

hamBtn3.addEventListener('click', () => {
    ham_item3.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item3.classList.remove('opened');
});

document.querySelector('.b3').addEventListener('click', () => {
    ham_item3.classList.remove('opened');
});

// Ham 4 - iPhone
var ham_item4 = document.querySelector('.iphone_menu');
var hamBtn4 = document.querySelector('.iphone_menu .ip_button');

hamBtn4.addEventListener('click', () => {
    ham_item4.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item4.classList.remove('opened');
});

document.querySelector('.b4').addEventListener('click', () => {
    ham_item4.classList.remove('opened');
});

// Ham 5 - Watch
var ham_item5 = document.querySelector('.watch_menu');
var hamBtn5 = document.querySelector('.watch_menu .w_button');

hamBtn5.addEventListener('click', () => {
    ham_item5.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item5.classList.remove('opened');
});

document.querySelector('.b5').addEventListener('click', () => {
    ham_item5.classList.remove('opened');
});

// Ham 6 - Vision


// Ham 7 - AP
var ham_item7 = document.querySelector('.ap_menu');
var hamBtn7 = document.querySelector('.ap_menu .ap_button');

hamBtn7.addEventListener('click', () => {
    ham_item7.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item7.classList.remove('opened');
});

document.querySelector('.b7').addEventListener('click', () => {
    ham_item7.classList.remove('opened');
});

// Ham 8 - TV
var ham_item8 = document.querySelector('.tv_menu');
var hamBtn8 = document.querySelector('.tv_menu .tv_button');

hamBtn8.addEventListener('click', () => {
    ham_item8.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item8.classList.remove('opened');
});

document.querySelector('.b8').addEventListener('click', () => {
    ham_item8.classList.remove('opened');
});

// Ham 9 - En
var ham_item9 = document.querySelector('.enter_menu');
var hamBtn9 = document.querySelector('.enter_menu .e_button');

hamBtn9.addEventListener('click', () => {
    ham_item9.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item9.classList.remove('opened');
});

document.querySelector('.b9').addEventListener('click', () => {
    ham_item9.classList.remove('opened');
});

// Ham 10 - Acc
var ham_item10 = document.querySelector('.acc_menu');
var hamBtn10 = document.querySelector('.acc_menu .acc_button');

hamBtn10.addEventListener('click', () => {
    ham_item10.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item10.classList.remove('opened');
});

document.querySelector('.b10').addEventListener('click', () => {
    ham_item10.classList.remove('opened');
});

// Ham 11 - Support
var ham_item11 = document.querySelector('.sup_menu');
var hamBtn11 = document.querySelector('.sup_menu .sup_button');

hamBtn11.addEventListener('click', () => {
    ham_item11.classList.toggle('opened');
});

document.querySelector('.fa-xmark').addEventListener('click', () => {
    ham_item11.classList.remove('opened');
});

document.querySelector('.b11').addEventListener('click', () => {
    ham_item11.classList.remove('opened');
});

// -----------------------HAMBURGER js END----------------------
// -----------------------bag js----------------------
var menu2 = document.querySelector('.bag_menu');
var menuBtn2 = document.querySelector('.bag_menu button');
menuBtn2.addEventListener('click', () => {
    menu2.classList.toggle('opened')
})

menu2.addEventListener('mouseout', (event) => {
    if (!menu2.contains(event.relatedTarget)) {
      menu2.classList.remove('opened');
    }
  });

// -----------------------bag js END----------------------
// ------------------------------Search Menu JS-------------------------
        var menu1 = document.querySelector('.search_menu');
var menuBtn1 = document.querySelector('.search_menu button');
menuBtn1.addEventListener('click', () => {
    menu1.classList.toggle('opened')
})



menu1.addEventListener('mouseout', (event) => {
    if (!menu1.contains(event.relatedTarget)) {
      menu1.classList.remove('opened');
    }
  });





        //Getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
const linkTag = searchWrapper.querySelector(".tagli");
let webLink;

// Function to generate search link
function generateSearchLink(userData) {
  return `https://www.apple.com/${userData}`;
}

// Function to set link attributes and trigger click
function setLinkAttributesAndClick(link, webLink) {
  link.setAttribute("href", webLink);
  link.setAttribute("target", "_self");
  link.click();
}

// Event listener for inputBox keyup
inputBox.addEventListener("keyup", (e) => {
  const userData = e.target.value.trim(); // Trim to remove leading and trailing spaces
  const emptyArray = [];

  if (userData) {
    icon.onclick = () => {
      webLink = generateSearchLink(userData);
      setLinkAttributesAndClick(linkTag, webLink);
    };

    emptyArray.push(...suggestions.filter(data =>
      data.toLowerCase().startsWith(userData.toLowerCase())
    ).map(data => `<li>${data}</li>`));

    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    
    const allList = suggBox.querySelectorAll(".quick-links li");
    allList.forEach(li => li.addEventListener("click", () => select(li)));
  } else {
    searchWrapper.classList.remove("active");
  }
});

// Function to handle suggestion selection
function select(element) {
  const selectData = element.textContent;
  inputBox.value = selectData;
  
  icon.onclick = () => {
    webLink = generateSearchLink(selectData);
    setLinkAttributesAndClick(linkTag, webLink);
  };

  searchWrapper.classList.remove("active");
}

// Function to display suggestions
function showSuggestions(list) {
  const listData = list.length
    ? `<h2 class="heading">Suggested Links</h2>${list.join("")}`
    : `<li>${inputBox.value}</li>`;
  suggBox.innerHTML = listData;
}
// -----------------------SEARCH MENU js END----------------------
