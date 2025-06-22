const boxes = document.querySelectorAll('.box');

const body1 = document.querySelector('body');

boxes.forEach((box)=>{
    box.addEventListener('click', (e) =>{
        // console.log(e)
        // console.log(e.target.id);
        const val = e.currentTarget.id;
        console.log(val);
        if(val === "grey"){
            body1.style.backgroundColor = val;
        }
        if(val === "red"){
            body1.style.backgroundColor = val;
        }
        if(val === "green"){
            body1.style.backgroundColor = val;
        }
        if(val === "blue"){
            body1.style.backgroundColor = val;
        }
    })
})

