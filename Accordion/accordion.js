(() => {
  // 即値関数！
  // Global汚染をさせないようにする為、即値関数の中で変数を定義する。

  //  class のイニシャルは大文字
  class Accordion {
    // initializing
    constructor(obj) {
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        // [attention!] Be sure to include increment processing for variables for the While loop.
        index++;
      }
    }

    // Run on click

    // const clickHandler = (e) => {
    clickHandler(e) {
      e.preventDefault();
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }

  // インスタンスを生成する時は変数を必ず指定します
  const quizAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "a",
  });
})();
