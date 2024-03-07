/* When the user clicks on the Menu button, 
toggle between hiding and showing the dropdown content */

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

function showImage() {
    document.querySelectorAll("#imgContainer div.example-img").forEach(function (imageElement) 
    {
        imageElement.addEventListener('click', function (e) {
            // e.classlist.add
            e.currentTarget.classList.toggle("bigImage")
        })
    })
}
showImage()