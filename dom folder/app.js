// let smallImg=document.getElementsByClassName("oldImg");
// for(i=0;i<smallImg.length;i++){
//     smallImg[i].src="assets/spiderman_img.png"
//     console.log(`value of ${i} is changed.`);
// }
// let colour=document.createElement('p') 
// colour.innerText="Hey I'm red";
// let body=document.querySelector('body');
// body.append(colour)




// What will be the final output of the following code?
// Question: Where will the <p> element be at the end?

// const parent1 = document.createElement("div");  
// const parent2 = document.createElement("div");  
// const child = document.createElement("p");

// child.textContent = "I'm a child!";

// parent1.appendChild(child);   o/p-> <div><p>i'm child</p></div>
// parent2.appendChild(child);   o/p-> <div><p>I'm child</P></div>

// document.body.appendChild(parent1);<div></div>
// document.body.appendChild(parent2);<div><p>i'm child</p></div>
// Elements in the DOM cannot exist in two places at once.
//When you appendChild() an existing element, it removes it from its previous parent before adding it to the new one.



// let heading=document.createElement("h3");
// heading.innerText="this is blue";
// heading.style.color="blue";
// document.body.append(heading);



let exbox=document.createElement("div");
exbox.style.backgroundColor="pink";

let txt2=document.createElement("h1");
txt2.innerText="I'm in a div";
 txt2=document.body.appendChild(exbox);
 let txt3=document.createElement("p");
 txt3.innerText="ME TOO";
 txt3=document.body.append(txt3);



