let images = [
    {
        src: 'img/project-admiral.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        area: 81,
        time: 3.5,
        title: 'Rostov-on-Don, Admiral'
    },
    {
        src: 'img/project-thieves.png',
        city: 'Sochi<br>Thieves',
        area: 105,
        time: 4,
        title: 'Sochi thieves'
    },
    {
        src: 'img/project-patriotic.png',
        city: 'Rostov-on-Don<br>Patriotic',
        area: 93,
        time: 3,
        title: 'Rostov-on-Don patriotic'
    }
]

function initSlider(options) {
    options = options || {
        dots: false,
        links: false
    }
    let sliderImages = document.querySelector('.projects__carousel-image')
    let arrows = document.querySelectorAll('.arrow')
    let dots
    let links
    let city = document.querySelector('#city_detail')
    let area = document.querySelector('#area_detail')
    let time = document.querySelector('#time_detail')
    initImages()
    initArrows()
    if (options.dots) {
        dots = document.querySelector('.pointer-group')
        initDots()
    }
    if (options.links) {
        links = document.querySelector('.projects__carousel-elements')
        initLinks()
    }

    function initImages() {
        images.forEach((image, index) => {
            let img = `<img src="${images[index].src}" class="carousel-image_${index} ${index === 0 ? 'projects__carousel-image_active' : ''}" 
                        data-index="${index}" alt="${images[index].title}">`
            sliderImages.innerHTML+=img;
        })
        document.querySelector('#city_detail').innerHTML = images[0].city
        document.querySelector('#area_detail').innerHTML = images[0].area
        document.querySelector('#time_detail').innerHTML = images[0].time
    }

    function initArrows() {
        arrows.forEach(arrow => {
            arrow.addEventListener('click', function() {
                let current = +sliderImages.querySelector('.projects__carousel-image_active').dataset.index
                let next
                if (arrow.classList.contains('arrow_right')) {
                    next = current === images.length - 1 ? 0 : current + 1
                } else {
                    next = current === 0 ? images.length - 1 : current - 1
                }
                moveImage(next)
            })
        })
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<li><button class="pointer pointer_${index} ${index === 0 ? 'pointer_active' : ''}" data-index="${index}"></button></li>`
            dots.innerHTML+=dot;
        })
        dots.querySelectorAll('.pointer').forEach(dot => {
            dot.addEventListener('click', function() {
                moveImage(this.dataset.index)
            })
        })
    }

    function initLinks() {
        images.forEach((image, index) => {
            let link = `<li><button class="title title_carousel title_carousel_${index} ${index === 0 ? 'title_carousel_active' : ''}" data-index="${index}">${image.title}</button></li>`
            links.innerHTML+=link
        })
        links.querySelectorAll('.title_carousel').forEach(link => {
            link.addEventListener('click', function() {
                moveImage(this.dataset.index)
            })
        })
    }

    function moveImage(number) {
        sliderImages.querySelector('.projects__carousel-image_active').classList.remove('projects__carousel-image_active')
        sliderImages.querySelector('.carousel-image_' + number).classList.add('projects__carousel-image_active')
        if (options.dots) {
            dots.querySelector('.pointer_active').classList.remove('pointer_active')
            dots.querySelector('.pointer_' + number).classList.add('pointer_active')
        }
        if (options.links) {
            links.querySelector('.title_carousel_active').classList.remove('title_carousel_active')
            links.querySelector('.title_carousel_' + number).classList.add('title_carousel_active')
        }
        city.innerHTML = images[number].city
        area.innerHTML = images[number].area
        time.innerHTML = images[number].time
    }
}

let options = {
    dots: true,
    links: true
}

initSlider(options);

