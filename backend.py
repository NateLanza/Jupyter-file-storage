import anywidget
import traitlets

class ExampleWidget(anywidget.AnyWidget):
  _esm = "frontend.js"
  value = traitlets.Dict({"ab": "true"}).tag(sync=True)
  def __init__(self, **kwargs):
    super().__init__(**kwargs)
    self.observe(lambda change: print(change), names="value")