from DataStoreWidget import DataStoreWidget

class ExampleWidget(DataStoreWidget):
  _esm = "lib/frontend.js"
  def __init__(self, file_name: str, id: str, **kwargs):
    super().__init__(file_name, id, **kwargs)
