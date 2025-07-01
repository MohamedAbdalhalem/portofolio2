import projects from './projetsInfo.js';

const x = $('#about').offset().top
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar').css('backgroundColor', 'rgb(255,255,255)')
        $('.nav-link').css('color','#000')
        $('.navbar-brand').css('color','#000')
        $('.fa-bars').css('color','#000')
    } else {
        $('.navbar').css('backgroundColor', 'transparent')
        $('.nav-link').css('color', '#fff')
        $('.navbar-brand').css('color', '#fff')
        $('.fa-bars').css('color','#fff')
    }
    if ($(window).scrollTop() > x / 2) {
        $('.top').fadeIn()
    } else {
        $('.top').fadeOut(500)
    }
})

$('.top').click(function () {
    $(window).scrollTop(0)
})

$(window).ready(function () {
    $('.louding-screen').fadeOut(2000, function () {
        $('.louding-screen').removeClass('d-flex')
        $('body').css('overflow','visible')
    })
})

let str = ``
for (const project of projects) {
    str += `
    <div class="d-flex justify-content-center align-items-center">
    <div class="card mx-auto text-white shadow-lg p-3  rounded-4 border border-secondary">
    <img src=${project.image} class="card-img-top rounded-3" alt=${project.title} >
    <div class="card-body">
      <h5 class="card-title fw-bold text-white">${project.title}</h5>
      <p class="card-text  mb-3 text-white-50">
      ${project.desc}
      </p>
      <div class="d-flex justify-content-between">
        <a href=${project.live} target="_blank" class="btn btn-sm btn-outline-light px-3 rounded-pill">Live Demo</a>
        <a href=${project.code} target="_blank" class="btn btn-sm btn-outline-secondary px-3 rounded-pill">Code</a>
      </div>
    </div>
  </div>
  </div>
    `
}
$('.slider').html(str)
$('.slider').slick();

const form = document.getElementById("my-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    
    const message = document.getElementById("message").value;

    const subject = `Message from ${name}`;
    const body = `${message}`;

    // ده بيحولك لصفحة إنشاء رسالة جديدة في Gmail
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamed3ab7alem@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });