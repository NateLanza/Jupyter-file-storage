import { AnyModel } from "./AnyWidgetTypes";

function render({ model, el }: { model: AnyModel, el: Element}) {
  let button = document.createElement("button");
  button.innerHTML = "Send";
  let clearButton = document.createElement("button");
  clearButton.innerHTML = "Clear";
  let textField = document.createElement("input");

  button.addEventListener("click", () => {
    let newVal = {...(model.get("value") as Object), ...{test: textField.value}};
    model.set("value", newVal);
    model.save_changes();
  });
  clearButton.addEventListener("click", () => {
    model.set("value", {});
    model.save_changes();
  })
  model.on("change: value", () => {
    console.log("Value changed to: ", model.get("value"));
  });

  el.appendChild(button);
  el.appendChild(textField);
  el.appendChild(clearButton);
}
export default { render };
