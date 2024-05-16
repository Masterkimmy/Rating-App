
// function clickone() {
//     const result = document.querySelector('.result')
//     const rrr = result.innerHTML = "1"
//     localStorage.setItem("text", rrr)
// }
// function clicktwo() {
//     const result = document.querySelector('.result')
//     const rrr = result.innerHTML = "2"
//     localStorage.setItem("text", rrr)

// }
// function clickthree() {
//     const result = document.querySelector('.result')
//     const rrr = result.innerHTML = "3"
//     localStorage.setItem("text", rrr)

// }
// function clickfour() {
//     const result = document.querySelector('.result')
//     const rrr = result.innerHTML = "4"
//     localStorage.setItem("text", rrr)

// }
// function clickfive() {
//     const result = document.querySelector('.result')
//     const rrr = result.innerHTML = "5"
//     localStorage.setItem("text", rrr)
//     document.querySelector('.send').disable = none

// }

// const result = document.querySelector(".rst")
// const answer = localStorage.getItem("text")
// // document.querySelector(".send").disabled = true
// result.innerHTML= answer

let reviewCount;

var buttons = document.querySelectorAll('.btn');

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        reviewCount = Number(btn.innerHTML)
        document.querySelector(".rst").textContent = `You selected ${reviewCount} out of 5`;
    })
})

document.querySelector(".send").addEventListener("click", ()=>{
    if(reviewCount == undefined){
        return alert("Please review before you submit!!!")
    }
    // alert(reviewCount)
    document.querySelector(".all").style.display = "none"
    document.querySelector(".review-next").style.display = "flex"
});
