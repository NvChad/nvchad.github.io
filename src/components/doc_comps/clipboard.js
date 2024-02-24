export default (id) => {
  const docContent = document.getElementById(id);
  const preElements = docContent?.querySelectorAll("pre");

  console.log(preElements);

  preElements?.forEach(function (preElement) {
    const childDiv = preElement.querySelector("div");
    if (childDiv) return;

    const button = document.createElement("div");
    button.classList = "copyBtn";
    button.ariaLabel = "copy button";

    button.addEventListener("click", function () {
      button.classList = "clickedCopyBtn";

      const content = preElement.textContent;
      navigator.clipboard.writeText(content);

      // reset to old copyIcon after 1s
      setTimeout(() => (button.classList = "copyBtn"), 2000);
    });

    preElement.appendChild(button);
  });
};
