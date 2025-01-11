import { AnyModel } from "./AnyWidgetTypes";

function render({ model, el }: { model: AnyModel, el: Element}) {
  let button = document.createElement("button");
  button.innerHTML = "Send";
  let textField = document.createElement("input");
  button.addEventListener("click", () => {
    let newVal = [...(model.get("value") as string[]), textField.value];
    model.set("value", newVal);
    model.save_changes();
  });
  model.on("change: value", () => {
    console.log("Value changed to: ", model.get("value"));
  });
  el.classList.add("counter-widget");
  el.appendChild(button);
  el.appendChild(textField);
}
export default { render };
