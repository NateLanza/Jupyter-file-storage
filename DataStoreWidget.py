from typing import Dict
import anywidget, traitlets
import pickle as pkl
from traitlets import observe

FILE_EXTENSION = ".jupersist"

def init_data_store(file_name: str):
  if type(file_name) is not str:
    raise ValueError("file_name must be a string")
  
  if '.' in file_name or '/' in file_name or '\\' in file_name:
    raise ValueError("file_name cannot contain '.' or '/' or '\\'")
  
  file_name = file_name + FILE_EXTENSION

  try:
    with open(file_name, 'xb') as file:
      pkl.dump({}, file)
  except FileExistsError:
    pass
  
  global dsw_file_name
  dsw_file_name = file_name

class DataStoreWidget(anywidget.AnyWidget):
  dsw_data_store = traitlets.Dict({}).tag(sync=True)
  dsw_id = traitlets.Unicode("").tag(sync=True)
  def __init__(self, id: str, **kwargs):
    self.dsw_id = id
    super().__init__(**kwargs)

    if type(self) is DataStoreWidget:
      raise NotImplementedError("Cannot directly instantiate abstract class DataStoreWidget")
        
    if 'dsw_file_name' not in globals():
      raise ValueError("DataStoreWidget must be initialized with init_data_store before use")

    global dsw_file_name
    with open(dsw_file_name, 'rb') as file:
      if file.readable():
        self.global_data_store = pkl.load(file)
        self.dsw_data_store = self.global_data_store.get(self.dsw_id, {})
      else:
        raise ValueError("Unable to read from saved jupersist file: ", dsw_file_name)

  @observe('dsw_data_store')
  def data_changed(self, change: Dict):
    self.global_data_store[self.dsw_id] = self.dsw_data_store
    with open(dsw_file_name, 'wb') as file:
      pkl.dump(self.global_data_store, file)