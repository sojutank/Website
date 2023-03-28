(() => {
  // 即値関数！
  // Global汚染をさせないようにする為、即値関数の中で変数を定義する。

  const $doc = document;
  const $kabu = $doc.getElementById("js-kabu");
  // console.log("$kabu", $kabu);
  // data属性は便利！
  const $nav = $kabu.querySelectorAll("[data-nav]");
  const $content = $kabu.querySelectorAll("[data-content]");
  // console.log("$content", $content);
  const ACTIVE_CLASS = "is-active";

  const init = () => {
    $content[0].style.display = "block";
  };

  // Event ocurred on click
  const handleClick = (e) => {
    e.preventDefault();

    // Get the dataset of "nav" on click
    // dataset.[attribute name] : Property for getting data of DOM elements
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    console.log("e!", e);

    // Reset un-targeted Nav content
    let index = 0;
    while (index < $nav.length) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    // Activate targeted content
    $kabu.querySelectorAll(
      '[data-content="' + targetVal + '"]'
    )[0].style.display = "block";
    $nav[targetVal].classList.add(ACTIVE_CLASS);
    console.log("$nav[targetVal].classList", $nav[targetVal].classList);
  };

  // Apply a function to all Nav elements
  let index = 0;
  while (index < $nav.length) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }

  init();
})();
