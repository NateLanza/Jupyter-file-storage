from DataStoreWidget import DataStoreWidget

class ExampleWidget(DataStoreWidget):
  _esm = "lib/frontend.js"
  def __init__(self, id: str, **kwargs):
    super().__init__(id, **kwargs)
