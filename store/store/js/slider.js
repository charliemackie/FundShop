var slider = document.getElementById("myRange");
var output = document.getElementById("slideroutput");
var discount1 = document.getElementById("discount1");
var discount2 = document.getElementById("discount2");
var discount3 = document.getElementById("discount3");
var totaloutput = document.getElementById("totaloutput")
var returnvalue = document.getElementById("returnvalue")

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  // display output
  output.innerHTML = this.value;
  // diplay discount boxes
  if (this.value <= 25) {
    discount1.style.display = "none";
    discount2.style.display = "none";
    discount3.style.display = "none";
  } else if (this.value > 25 && this.value <= 50) {
    discount1.style.display = "block";
    discount1.style.backgroundColor = "red";
    discount2.style.display = "none";
    discount3.style.display = "none";
  } else if (this.value >= 50 && this.value <= 75) {
    discount1.style.display = "block";
    discount2.style.display = "block";
    discount3.style.display = "none";
  }
   else {
    discount1.style.display = "block";
    discount2.style.display = "block";
    discount3.style.display = "block";
  }
  // calculate total value
  one = String(returnvalue.innerHTML)
  two = Math.floor(one.substring(2))
  totaloutput.innerHTML = Math.floor((this.value / 100) * two);
}

