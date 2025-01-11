/**
 * The model interface for an Anywidget Front-End Module
 * @see https://github.com/manzt/anywidget/tree/main/packages/types for complete types
 * Retrieved from @see https://anywidget.dev/en/afm/
 */
export interface AnyModel {
  /** Get a property value from the model
   * @param key The key of the property to get
   * @returns The value of the property
   */
  get(key: string): any;
  /**
   * Set a property value in the model
   * @param key The key of the property to set
   * @param value The value to set
   */
  set(key: string, value: any): void;
  /**
   * Remove an event listener
   * @param eventName The name of the event to stop listening to
   * @param callback The callback function to remove
   */
  off(eventName?: string | null, callback?: Function | null): void;
  /**
   * Add an event listener for custom messages
   * @param eventName Must be "msg:custom"
   * @param callback The function to call when a custom message is received
   */
  on(eventName: "msg:custom", callback: (msg: any, buffers: DataView[]) => void): void;
  /**
   * Add an event listener for property changes
   * @param eventName The name of the event, in the format "change:propertyName"
   * @param callback The function to call when the property changes
   */
  on(eventName: `change: ${string}`, callback: Function): void;
  /**
   * Commit changes to sync with the backend
   */
  save_changes(): void;
  /**
   * Send a custom message to the backend
   * @param content The content of the message
   * @param callbacks Optional callbacks for the message
   * @param buffers Optional binary buffers to send with the message
   */
  send(content: any, callbacks?: any, buffers?: ArrayBuffer[] | ArrayBufferView[]): void;
}