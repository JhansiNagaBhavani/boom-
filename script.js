let img_ele=document.getElementById("image")
let TimerId=setTimeout(function(){
 img_ele.src="https://media.istockphoto.com/id/955124060/photo/nuclear-bomb-explosion-mushroom-cloud.jpg?s=612x612&w=0&k=20&c=64Wac4ttC1DgBeBvCmYHWB56OyckJGNiO3AjsIe8c2c="
},7000)


let h2_ele=document.createElement("h2")
let num1=Math.random()*100
num1=Math.floor(num1)

let num2=Math.random()*100
num2=Math.floor(num2)
h2_ele.textContent=`what is the ouput of ${num1} + ${num2} =`

document.body.appendChild(h2_ele)

// we are creating input type 

let input_ele=document.createElement("input")
// input_ele.type="text"
document.body.appendChild(input_ele)



// create a submit button

let submit_btn=document.createElement("button")
submit_btn.textContent="save your country with your skills"
submit_btn.onclick=function(){
    if(input_ele.value==num1+num2){
      clearTimeout(TimerId)
      img_ele.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCxMajnbxDr6j7inibkzS0Q6_EiZmkqn4Uw&s"
    }
}
document.body.appendChild(submit_btn)