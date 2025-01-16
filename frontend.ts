import { AnyModel } from "./AnyWidgetTypes";

const STORE_NAME = "dsw_data_store";

function render({ model, el }: { model: AnyModel, el: Element}) {
  let button = document.createElement("button");
  button.innerHTML = "Send";
  let clearButton = document.createElement("button");
  clearButton.innerHTML = "Clear";
  let textField = document.createElement("input");

  console.log('rendered');

  button.addEventListener("click", () => {
    let newVal = {...(model.get("value") as Object), ...{test: textField.value}};
    model.set(STORE_NAME, newVal);
    model.save_changes();
  });
  clearButton.addEventListener("click", () => {
    model.set(STORE_NAME, {});
    model.save_changes();
  })
  model.on("change: value", () => {
    console.log("Value changed to: ", model.get(STORE_NAME));
  });

  el.appendChild(button);
  el.appendChild(textField);
  el.appendChild(clearButton);
}
export default { render };
