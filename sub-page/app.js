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
  var list_section = document.getElementsByClassName("list-section")[0];

  for (let i = 0; i < list.length; i++) {
    var listItem = document.createElement("li");

    var link = document.createElement("a");
    link.href = "qn.html?pos=" + i;

    var link_img = document.createElement("img");
    link_img.src = list[i].pathImg;
    var link_h3 = document.createElement("h3");
    link_h3.innerText = list[i].heading;
    var link_h6 = document.createElement("h6");
    link_h6.innerText = list[i].discription;

    link.appendChild(link_img);
    link.appendChild(link_h3);
    link.appendChild(link_h6);

    listItem.appendChild(link);
    list_section.appendChild(listItem);
  }
});
