import { AnyModel } from "./AnyWidgetTypes";
import { createDataStore } from './data_store';

function render({ model, el }: { model: AnyModel, el: Element}) {
  let button = document.createElement("button");
  button.innerHTML = "Set";
  let clearButton = document.createElement("button");
  clearButton.innerHTML = "Get";
  let valField = document.createElement("input");
  let keyField = document.createElement("input");

  const dataStore = createDataStore(model);

  button.addEventListener("click", () => {
    dataStore.set(keyField.value, valField.value);
    dataStore.sync();
  });
  clearButton.addEventListener("click", () => {
    valField.value = dataStore.get(valField.value);
  })

  el.appendChild(button);
  el.appendChild(keyField);
  el.appendChild(valField);
  el.appendChild(clearButton);
}
export default { render };
