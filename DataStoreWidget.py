from typing import Dict
import anywidget
import traitlets
from traitlets import observe

class DataStoreWidget(anywidget.AnyWidget):
  dsw_data_store = traitlets.Dict({}).tag(sync=True)
  def __init__(self, **kwargs):
    super().__init__(**kwargs)

    if type(self) is DataStoreWidget:
      raise NotImplementedError("Cannot directly instantiate abstract class DataStoreWidget")

  @observe('dsw_data_store')
  def data_changed(self, change: Dict):
    print(change)