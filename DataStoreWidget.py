from typing import Dict
import anywidget, traitlets
import pickle as pkl
from traitlets import observe

FILE_EXTENSION = ".jupersist"

class DataStoreWidget(anywidget.AnyWidget):
  dsw_data_store = traitlets.Dict({}).tag(sync=True)
  dsw_id = traitlets.Unicode("").tag(sync=True)
  def __init__(self, file_name: str, id: str, **kwargs):
    self.dsw_id = id
    super().__init__(**kwargs)

    if type(self) is DataStoreWidget:
      raise NotImplementedError("Cannot directly instantiate abstract class DataStoreWidget")
    
    if type(file_name) is not str:
      raise ValueError("file_name must be a string")
    
    if '.' in file_name or '/' in file_name or '\\' in file_name:
      raise ValueError("file_name cannot contain '.' or '/' or '\\'")
    
    self.file_name = file_name + FILE_EXTENSION

    # with open(self.file_name, 'rb') as file:
    #   if file.readable():
    #     self.dsw_data_store = pkl.load(file)

  @observe('dsw_data_store')
  def data_changed(self, change: Dict):
    print(change)
    # with open(self.file_name, 'wb') as file:
    #   pkl.dump(self.dsw_data_store, file)