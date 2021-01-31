// Variables
var megaList = document.querySelectorAll('.nav-menu--list');
var megaSubList = document.querySelectorAll('.megaMenuTab-nav-category li a');
var mobileMenuOpen = document.querySelector('#mobile-menu-toggle');
var mobileMenuClose = document.querySelector('#closeMenuMobile');
var mobileMenuNav = document.querySelector("#slidingMenuMobile-wapper .slider-menu__container");
var mobileMainUL = document.querySelector('.slider-menu__menu');
var mobileMainLI= document.querySelectorAll('.slider-menu__item.has-sub');
var mobileSubMenuBackBtn = document.querySelector('#slidingMenuMobile-wapper .slider-menu__main');

var megaMenuOpen = false;

document.querySelector("#desktop-nav .nav-menu__container").addEventListener('mouseenter', (event)=>{

});

document.querySelector("#desktop-nav .nav-menu__container").addEventListener('mouseleave', (event)=>{
    removeClassFromElement(document.querySelectorAll('.mega-menu.sub-container'))
});

megaList.forEach((element) => {

    element.addEventListener('mouseenter', (event)=>{
            removeClassFromElement(document.querySelectorAll('.mega-menu'))
            var cls = element.classList.contains('is-mega')
            if(cls){
                element.querySelector('.mega-menu').classList.add('active')
            }
            document.querySelector('.megaMenuTab-colRight').childNodes[1].classList.add('active')
            megaMenuOpen = true;
            element.querySelectorAll('.megaMenuTab-colRight .tab-panel')[0].classList.add('active'); 
            element.querySelectorAll('.megaMenuTab-colLeft li a')[0].classList.add('active');   
    });

    element.addEventListener('mouseleave', (event)=> {
        // console.log(element.querySelector('.mega-menu.sub-container'));
        // console.log("Event :",event); 
        

    });
});

megaSubList.forEach((element) => {
    element.addEventListener('mouseenter', (event)=>{
        document.querySelectorAll('.megaMenuTab-colRight .tab-panel')[0].classList.add('active');
        var selectedId = event.target.dataset.id;
        event.target.classList.add('active')
        removeClassFromElement(document.querySelectorAll('.megaMenuTab-colRight .tab-panel'));
        removeClassFromElement(document.querySelectorAll('.megaMenuTab-colLeft li a'));
        var toBeDisplayed = document.querySelector(`.sub-container.active .megaMenuTab-colRight #${selectedId}`);
        toBeDisplayed.classList.add('active');

    });

    element.addEventListener('mouseleave', (event)=>{
        
    });
    
});


mobileMenuOpen.addEventListener('click',toggleMenu);

mobileMenuClose.addEventListener('click', toggleMenu);

document.querySelector('.slider-menu__main').addEventListener('click',(event)=>{
    if(!event.target.classList.contains('active'))
    return;
    mobileMenuNav.style.left= '0%';
    event.target.classList.remove('active');
});



mobileMainLI.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        mobileMenuNav.style.left = '-100%';
        event.target.classList.add('show');
        console.log(event.target.childNodes);
        try{
            mobileSubMenuBackBtn.classList.add('active');
            event.target.childNodes[3].classList.add('slider-menu--active');
            
        }catch{
            console.log("no child present");
        }
    });
});

function removeClassFromElement(element){
    if(element.length > 1){
        element.forEach((e) => {
            e.classList.remove('active');
        });
        return true;
    }else if(element.length == 1){
        element.classList.remove('active');
        return true;
    }else{
        return false;
    }
}

function toggleMenu(){
    var isOpen = document.querySelector('#slidingMenuMobile-wapper').classList.contains('show');
    if(!isOpen){
        document.querySelector('#slidingMenuMobile-wapper').classList.add('show');
    }else{
        document.querySelector('#slidingMenuMobile-wapper').classList.remove('show');
    }
}








let imageLinksArray = [
    'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1047543_00/1047543_00_default_1.jpg?catalogcontentlisting-116929-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1044121_00/1044121_00_default_1.jpg?catalogcontentlisting-178849-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/productimages/rebel/1053280_00/1053280_00_default_1.jpg?catalogcontentlisting-111830-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1055554_00/1055554_00_default_1.jpg?catalogcontentlisting-125555-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1080533_00/1080533_00_default_1.jpg?catalogcontentlisting-129032-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/productimages/briscoes/1089754_00/1089754_00_default_1.jpg?catalogcontentlisting-367345-300-300-75-0,0',
    'https://www.briscoes.co.nz/globalassets/1.-briscoes/1057282007_sku_default_1.jpg?catalogcontentlisting-332847-300-300-75-0,0',
];

function propagateProductsCard(parent, times){

    for(var i=1; i<= times; i++){
        let productCardClone = parent.cloneNode(true);
        try {
            productCardClone.childNodes[1].childNodes[1].childNodes[1].childNodes[1].src = imageLinksArray[i];
        } catch (error) {
            console.error("Wrong/Changed formating of Product card");
            productCardClone.childNodes[1].childNodes[1].childNodes[1].childNodes[1].src = 'https://via.placeholder.com/300x300';
            
        }
        document.querySelector('.productList .row').appendChild(productCardClone); 
    }
}

// propagateProductsCard(document.querySelector('.productCardColumn'),imageLinksArray.length);


arr = [];
document.querySelectorAll('.sub-nav .container span').forEach((element) => {
    arr.push(element.innerText);
})
i = 0
setInterval(()=> {
    if(i >= arr.length){i = 0;}
    document.querySelector('.sub-nav .container p').innerText = arr[i];
    i++;
    
}, 1000)
