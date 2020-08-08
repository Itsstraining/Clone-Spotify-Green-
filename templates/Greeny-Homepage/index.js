window.onscroll = function () {
  scollText()
  scrollFunction()
};

function scollText() {
  let casihangdau = document.getElementsByClassName('border2')[0];
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 2700) {
     casihangdau.style.display = "inherit"
  } else {
    casihangdau.style.display = "none";
  }
}

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}