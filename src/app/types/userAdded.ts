export interface UserAddedMessage {
  /**
   * @param name can be "user_added", "user_typing, "user_stopped_typing"
   */
  name: string;
  user: string;
  message?: string;
  chatMembers?: object;
}
