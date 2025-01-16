import { AnyModel } from "./AnyWidgetTypes";

/** Name for the data store traitlet */
const STORE_KEY = 'dsw_data_store';

/**
 * A datastore which can communicate keys and values with a data store widget
 */
export type DataStore = {
  /** * Sets the value of a key in the datastore */
  set(key: string, value: string): void;
  /** Gets the value of a key in the datastore */
  get(key: string): string;
  /** Synchronizes the key/value pairs with the backend datastore in python */
  sync(): void;
}

/**
 * Creates a data store object that can be used to communicate keys and values with a data store widget
 * @param model An AnyWidget model. This MUST be created by an AnyWidget that extends the DataStoreWidget python class
 */
export function createDataStore(model: AnyModel): DataStore {
  const store = model.get(STORE_KEY);
  if (typeof store !== 'object' || Array.isArray(store) || store === null)
    throw new Error("'model' param does not come from a DataStoreWidget and is missing necessary fields");

  return {
    set: (key, value) => store[key] = value,
    get: (key) => store[key],
    sync: () => {
      model.set(STORE_KEY, store);
      model.save_changes();
    }
  }
}