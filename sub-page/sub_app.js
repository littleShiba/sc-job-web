const list = [
  {
    pathImg: "../img//sofa/sofa.jpg",
    heading: "Sofa ST300",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/sofa/sofa2.png",
    heading: "Sofa M26",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/sofa/sofa3.jpg",
    heading: "Sofa D29",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/bed/pic-19.jpg",
    heading: "Giường Đôi",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/bed/pic-18.jpg",
    heading: "Giường Hai Tầng",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/bed/pic-22.jpg",
    heading: "Giường Đơn",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/clock/clock.jpg",
    heading: "Đồng hồ 01",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/clock/clock1.jpg",
    heading: "Đồng hồ 02",
    discription: "Giá: 1000$",
  },
  {
    pathImg: "../img/clock/clock.jpg",
    heading: "Đồng hồ 03",
    discription: "Giá: 1000$",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var pos = urlParams.get("pos");
  console.log("pos = " + pos);

  var link_img = document.getElementById("pimg");[0];
  link_img.src = list[pos].pathImg;

  var heading_h2 = document.getElementsByClassName("heading-text")[0];
  heading_h2.textContent = list[pos].heading;
  var about_p = document.getElementsByClassName("about-text")[0];
  about_p.textContent = list[pos].discription;
});
