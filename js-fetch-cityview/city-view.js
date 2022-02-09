var access_key = 'RaSnBiqog6SVIdgaUHc2Ls-8McGCIPt7S3lsW7M3cgU'

var container = document.querySelector('.container')
let eleP = document.querySelector('.des')
let eleInput = document.querySelector('#cityInput')
//add imgContainer
let imgContainer = document.getElementById('imgLib')
let searchCity = 'Toronto'
let eleImgArr = [];
let left = document.getElementById('left')
let right = document.getElementById('right')
let Index = 0;
let page = 1;
let nextTen = document.getElementById('nextTen')
let lastTen = document.getElementById('lastTen')

// https://api.unsplash.com/search/photos?
// https://api.unsplash.com/search/photos?
let searchFun = (evt) => {
    // console.log(evt.key)
        if (evt.key === 'Enter') {
        // searchCity = evt.target.value
        searchCity = eleInput.value;
        fetchCity()
        //remove all previous stored containers.
        while(imgContainer.firstChild)
            imgContainer.removeChild(imgContainer.firstChild)
        }
        eleImgArr =[];
        console.log(searchCity)
}

//show image function.
function showImage(src) {
    container.style.backgroundImage = `url('${src}')`
}


//if select a picture
// imgContainer.addEventListener('click',)

//define click image function


const fetchCity = () => {
        fetch(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchCity}&page=${page}&orientation=landscape`)
            // return jason() method of the response takes a response string and reads it to completion
            // it returns a promise which resolves with the result of parsing the body text as JSON
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    console.log(data.results[Index].urls.regular)
                    let imgurl = data.results[Index].urls.regular
                    let des = data.results[Index].alt_description
                    // eleP.innerHTML= des
                    // console.log(des)
                    // container.style.backgroundImage = `url('${imgurl}')`
                    showImage(imgurl)
                    //condition when click a pic, change background image.
                //add 10 pics.
                // Create one div to contain 10 images
                lastTen=imgContainer.appendChild(lastTen)
                left=imgContainer.appendChild(left)
                    for (let i = 0; i < 10; i++) {
                        let imgdiv = document.createElement("div")
                        imgdiv.className ="imgdiv"
                        // append every div under imgContainer
                        imgContainer.appendChild(imgdiv)
                        //new object image
                        let img = new Image();
                        img.className='img';
                        eleImgArr[i] = img
                        //fetch the image url
                         eleImgArr[i].src = data.results[i].urls.regular
                        // console.log(img)
                        // append every image under the img div.
                        imgdiv.appendChild(img)
                        //store images to arrays
                        eleImgArr.push(img)
                        // data.results[i].urls.regular
                        // add click event listener
                        eleImgArr[i].addEventListener("click", function()
                        {
                            showImage(eleImgArr[i].src)
                            Index=i;
                            console.log("current index is ",Index)
                        }
                        )
                        right=imgContainer.appendChild(right)
                        imgContainer.appendChild(nextTen)
                        // imgContainer.insertBefore(nextTen,null)
                    }
            })
            .catch(err => console.log(err))
        // .finally(()=>window.alert('finished'))
    console.log('after initialize, current index is', Index)
}

eleInput.addEventListener('keydown', searchFun)



function leftFun() {
    console.log("left fun started with Index ", Index)
    for (let i = 9; i>=0; i--) {
        if(Index === 0) {
            Index = 10;
            console.log("for fun --, the current index and i are", Index)
        }
        if(i === Index-1) {
            showImage(eleImgArr[Index-1].src)
        }
        }
    Index--;
    console.log('Current Index', Index)
}

function  rightFun() {
    for (let i = 0; i<10; i++) {
        if(Index === 9) {
            Index=-1;
            console.log("for fun ++, the current index and i are",Index)
        }
        if(i === Index+1)
            showImage(eleImgArr[Index+1].src)
    }
    Index++;
    console.log('Current Index', Index)
}

function  rightTenFun() {
    while(imgContainer.firstChild)
    {
        imgContainer.removeChild(imgContainer.firstChild)
    }
     page++
     console.log("Current index is", Index)
     fetchNew()
}

function leftTenFun() {

    while(imgContainer.firstChild)
    {
        imgContainer.removeChild(imgContainer.firstChild)
    }
    if (page===1) {
        page=1;
        console.log("cann't move back further")
    }
    else {
        page--
    }
    console.log("Current index is", Index)
    fetchNew()
}

const fetchNew = () => {
    fetch(
`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchCity}&page=${page}&orientation=landscape`)
// return jason() method of the response takes a response string and reads it to completion
// it returns a promise which resolves with the result of parsing the body text as JSON
.then(response => response.json())
    .then(data => {
        // Create one div to contain 10 images
        lastTen=imgContainer.appendChild(lastTen)
        left=imgContainer.appendChild(left)
        for (let i = 0; i < 10; i++) {
            let imgdiv = document.createElement("div")
            imgdiv.className ="imgdiv"
            // append every div under imgContainer
            imgContainer.appendChild(imgdiv)
            //new object image
            let img = new Image();
            img.className='img';
            eleImgArr[i] = img
            //fetch the image url
            eleImgArr[i].src = data.results[i].urls.regular
            // console.log(img)
            // append every image under the img div.
            imgdiv.appendChild(img)
            //store images to arrays
            eleImgArr.push(img)
            // data.results[i].urls.regular
            // add click event listener
            eleImgArr[i].addEventListener("click", function()
                {
                    showImage(eleImgArr[i].src)
                    Index=i;
                    console.log("current index is ",Index)
                }
            )
            right=imgContainer.appendChild(right)
            imgContainer.appendChild(nextTen)

        }
    })
}

fetchCity()
// left and right buttons
left.addEventListener('click',leftFun)
right.addEventListener('click',rightFun)

nextTen.addEventListener('click',rightTenFun)
lastTen.addEventListener('click',leftTenFun)
// lastTen.addEventListener('click',leftTenFun)




// const add_img = () => {
//
//     var img = document.createElement('img');
//     img.src=
//     imgContainer.appendChild(img)
// }
//







