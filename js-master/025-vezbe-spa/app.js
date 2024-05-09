let btnNav = document.querySelectorAll(".nav ul li");
let allSections = document.querySelectorAll(".section");

btnNav.forEach((link) => {
  link.addEventListener("click", function () {
    // let nameView = this.innerHTML.toLowerCase();
    allSections.forEach((section) => {
      section.style.display = "none";
    });

    let currentView = document.querySelector(
      `.section-${this.innerHTML.toLowerCase()}`
    );
    currentView.style.display = "block";

    toggeViewContent(this);
  });
});

function toggeViewContent(el) {
  console.log(el);
  let destination = el.innerHTML.toLowerCase();

  const btns = document.querySelectorAll(
    `.section-${destination} .content .content-buttons button`
  );

  let views = document.querySelectorAll(
    `.content-images [data-location = ${destination}]`
  );

  btns.forEach((button) => {
    button.addEventListener("click", function () {
      let id = button.dataset.id;
      views.forEach((view) => {
        view.style.display = "none";
      });

      views[id].style.display = "block";
    });
  });

  // let viewBtns = document.querySelectorAll(
  //   `.section-${viewName} .content .content-buttons button`
  // );

  // let viewContent = document.querySelectorAll(
  //   `.section-${viewName} .content .content-images div`
  // );

  // console.log(viewBtns);
  // viewBtns.forEach((button) => {
  //   button.addEventListener("click", function () {
  //     viewContent.forEach((content) => {
  //       content.style.display = "none";
  //     });

  //     let viewToShow = document.querySelector(
  //       `.images-description-${this.innerHTML.toLowerCase()}`
  //     );

  //     console.log(viewToShow);
  //     viewToShow.style.display = "block";
  //   });
  // });
}
