$(document).ready(function() {
  $(".header").on("click", function(e) {
    $(".hidden").removeClass("content")
    $(this)
      .find("+ .hidden")
      .addClass("content")
  })
  $(".images").on("click", function(e) {
    $(this)
      .addClass("show")
      .addBack("images")
  })
})

let html = carouselImages

  .map(function(item) {
    return `
  <div class="imageBox">
    <img class="images" src="${item.image_url}" />
    <p class="title">${item.title}</p>
    <p class="photographer">${item.photographer_id}</p>
  </div>
  `
  })
  .join("")

document.querySelector(".carousel").innerHTML = html
