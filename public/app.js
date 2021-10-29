const $close = $("#close")

$close.on("click", (event) => {
  event.preventDefault();
  $("#teamModal").hide()
})

$("#about").on("click", (event) => {
  event.preventDefault();
  $("#teamModal").show()
})

