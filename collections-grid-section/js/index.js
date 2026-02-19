// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

let collections = []


async function fetchData() {
    const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections')
    const data = await response.json();
    collections = data.data
} 

await fetchData();
console.log(collections)

function applyData() {
    console.log(collections[0].image_url)
    const imgUrl1 = collections[0].image_url
    const imgUrl2 = collections[1].image_url
    const imgUrl3 = collections[2].image_url

    const item1 = document.querySelector('.col1')
    const item2 = document.querySelector('.item-2')
    const item3 = document.querySelector('.item-3')
    item1.style.backgroundImage = ("url('" + imgUrl1 + "')")
    item2.style.backgroundImage = ("url('" + imgUrl2 + "')")
    item3.style.backgroundImage = ("url('" + imgUrl3 + "')")

    document.querySelector('.col1 > h2').innerHTML = collections[0].name
    document.querySelector('.col1 > p').innerHTML = collections[0].description

     document.querySelector('.item-2 > h2').innerHTML = collections[1].name
    document.querySelector('.item-2 > p').innerHTML = collections[1].description

     document.querySelector('.item-3 > h2').innerHTML = collections[2].name
    document.querySelector('.item-3 > p').innerHTML = collections[2].description
   
    
}
applyData();





