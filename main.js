const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".fa-regular")

starsEl.forEach((starsEl, index) =>{
    starsEl.addEventListener("click",() =>{
        updaterating(index)
    })
})

function updaterating(index){
    starsEl.forEach((starsEl, indx) =>{
        if(indx < index + 1){
            starsEl.classList.add("active")
        } else{
            starsEl.classList.remove("active")
        }
    })

    emojisEl.forEach((emojisEl)=>{
        emojisEl.style.transform = `translate(-${index * 50}px)`;
    })
}