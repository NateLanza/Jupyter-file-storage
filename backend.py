import anywidget
import traitlets

class ExampleWidget(anywidget.AnyWidget):
  _esm = "frontend.js"
  value = traitlets.Int(0).tag(sync=True)