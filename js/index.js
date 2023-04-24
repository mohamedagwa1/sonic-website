const sections =document.querySelectorAll('.sec');
const secBtn =document.querySelectorAll('.sec-btn');
const allSections =document.querySelector('.allBoxes');
/////////////////////////
function PageTransitions(){
    //button click active class
    for(let i=0; i<secBtn.length ;i++){
        secBtn[i].addEventListener('click',function(){
            let currentItem =document.querySelectorAll('.active-btn');
            currentItem[0].className=currentItem[0].className.replace('active-btn','');
            secBtn[i].className+=' active-btn';
        })
    }
    //section active class
    allSections.addEventListener('click',function(e){
        let id =e.target.dataset.id ;
        if(id){
            //remove selected from other btns
            secBtn.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element= document.getElementById(id);
            element.classList.add('active');
        }
    }
    );
}
PageTransitions()
