function headerStart() {   
    
    let root = document.documentElement;
    let logo = document.getElementById('header-item-logo-img');
    
    root.style.setProperty('--theme','white');


    document.querySelector('#ct').addEventListener("click", function() {        
        if(getComputedStyle(root).getPropertyValue('--theme') == 'white') {
            root.style.setProperty('--main-color','#1f1f22');
            root.style.setProperty('--text-color','#fff');
            root.style.setProperty('--body-color','#292929');
            logo.src = './images/logo_dark.png';
            root.style.setProperty('--theme','black');
        }
        else {
            root.style.setProperty('--main-color','#eeeeee');
            root.style.setProperty('--text-color','#000');
            root.style.setProperty('--body-color','#ffffff');
            logo.src = './images/logo_light.png';
            root.style.setProperty('--theme','white');
        }
    });   
}

 headerStart();

