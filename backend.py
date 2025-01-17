from DataStoreWidget import DataStoreWidget
import anywidget
import traitlets

class ExampleWidget(DataStoreWidget):
  _esm = "lib/frontend.js"
  def __init__(self, **kwargs):
    super().__init__(**kwargs)
