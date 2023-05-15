let btn = document.querySelector("button")
let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let page3 = document.querySelector(".page3")
let image = document.querySelectorAll(".page2 img")
let time = document.querySelector(".page3 h1 span")
let random = document.querySelector(".random")
let scores = document.querySelector(".page3 h2 span")
let scor_count = 0;

let End = document.querySelector(".page3 button")

btn.onclick = () => {

    page1.style.display = "none"
    page2.style.display = "inline-block"
}
for (let i = 0; i < image.length; i++) {
    image[i].onclick = () => {
        page2.style.display = "none"
        page3.style.display = "block"
        setInterval(() => {

            let x = random.clientHeight
            let y = random.clientWidth
            let pic = document.createElement('img')
            if (i == 0) {
                pic.src = "image333.png"
            }
            if (i == 1) {
                pic.src = "FGVX4A1XMAQdMnY-removebg-preview.png"
            }
            if (i == 2) {
                pic.src = "images-removebg-preview-removebg-preview.png"
            }
            pic.classList.add("randomimg")

            let top = Math.random() * (x - 100)
            let left = Math.random() * y
            pic.style.left = left + 'px'
            pic.style.top = top + 'px'
            random.append(pic)

            let randomimg = document.querySelectorAll(".randomimg")
            for (let i = 0; i < randomimg.length; i++) {
                // console.log(randomimg[i])
                randomimg[i].onclick = () => {
                    randomimg[i].remove();
                    scores.innerHTML = scor_count++;

                }


            }
        }, 1000);

        timestart()

    }
    End.onclick = () => {
        page3.style.display = "none"

        document.write("<h3>Your Time Out.......</h3>")
        document.write(`<h3>Your score is   ${scor_count}</h3>`)


    }
}


function timestart() {
    setInterval(() => {
        time.innerHTML = Number(time.innerHTML) + 1

    }, 1000)
}

