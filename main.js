$(document).ready(function() {
  $(".header").on("click", function(e) {
    $(".hidden").removeClass("content")
    $(this)
      .find("+ .hidden")
      .addClass("content")
  })
})

let html = carouselImages

  .map(function(item) {
    return `
  <div class="imageBox">
    <img class="images covered" src="${item.image_url}" />
    <p class="title">${item.title}</p>
    <p class="photographer">${item.photographer_id}</p>
  </div>
  `
  })
  .join("")

document.querySelector(".carousel").innerHTML = html
