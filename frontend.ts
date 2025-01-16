import { AnyModel } from "./AnyWidgetTypes";
import { createDataStore } from "./data_store";

function render({ model, el }: { model: AnyModel, el: Element}) {
  let button = document.createElement("button");
  button.innerHTML = "Set";
  let clearButton = document.createElement("button");
  clearButton.innerHTML = "Get";
  let textField = document.createElement("input");

  const dataStore = createDataStore(model);
  let id = 1;

  button.addEventListener("click", () => {
    dataStore.set((id++).toString(), textField.value);
    dataStore.sync();
  });
  clearButton.addEventListener("click", () => {
    textField.value = dataStore.get(textField.value);
  })

  el.appendChild(button);
  el.appendChild(textField);
  el.appendChild(clearButton);
}
export default { render };
