export default (id) => {
  const docContent = document.getElementById(id);
  const preElements = docContent?.querySelectorAll("pre");

  preElements?.forEach(function (preElement) {
    const button = document.createElement("button");
    button.classList = "copyBtn";
    button.ariaLabel = "copy button";

    // create copy icon
    const icon = document.createElement("div");
    icon.classList = "i-uil:clipboard";
    button.appendChild(icon);

    button.addEventListener("click", function () {
      // use check icon for copyIcon div
      const copyIcon = button.querySelector("div");
      copyIcon.classList = "i-line-md:confirm-circle clickedCopyBtn";

      const content = preElement.textContent;
      navigator.clipboard.writeText(content);

      // reset to old copyIcon after 1s
      setTimeout(() => {
        copyIcon.classList = "i-uil:clipboard";
      }, 3000);
    });

    preElement.appendChild(button);
  });
};
