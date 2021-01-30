// Variables
var megaList = document.querySelectorAll('.nav-menu--list');
var megaSubList = document.querySelectorAll('.megaMenuTab-nav-category li a');


megaList.forEach((element) => {
    // console.log(element);
    element.addEventListener('mouseenter', (event)=>{
            removeClassFromElement(document.querySelectorAll('.mega-menu'))
            // console.log(event.target);
            var cls = element.classList.contains('is-mega')
            if(cls){
                element.querySelector('.mega-menu').classList.add('active')
            }
        
        // var children = event.target.childNodes;
        // console.log(event.target.childNodes);
    });
    element.addEventListener('mouseleave', (event) => {
        removeClassFromElement(document.querySelectorAll('.mega-menu'))
    });
});

megaSubList.forEach((element) => {
    element.addEventListener('mouseenter', (event)=>{
        var selectedId = event.target.dataset.id;
        removeClassFromElement(document.querySelectorAll('.megaMenuTab-colRight .tab-panel'));
        var toBeDisplayed = document.querySelector(`.sub-container.active .megaMenuTab-colRight #${selectedId}`);
        console.log(toBeDisplayed);
        toBeDisplayed.classList.add('active');
    });

    element.addEventListener('mouseleave', (event)=>{
        removeClassFromElement(document.querySelectorAll('.megaMenuTab-colRight .tab-panel'));
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
        }
        
        console.log("printing "+i);
        document.querySelector('.productList .row').appendChild(productCardClone); 
    }
}

propagateProductsCard(document.querySelector('.productCardColumn'),8);
