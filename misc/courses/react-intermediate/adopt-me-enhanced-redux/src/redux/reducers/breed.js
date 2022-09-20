export default function breed(state = '', action) {
  switch (action.type) {
    case 'CHANGE_BREED':
      return action.payload;

    /* The good thing about every reducer being called with every actions is
     * that multiple reducers can react to the same action. For example, if we
     * want to reset the breed when the animal changes, we can do it here.
     *
     * This is the "handling complex state" bit of Redux's use cases. You may
     * have a case such as this, where some state intefeers with other state
     * and you need a way to handle it in a testable manner.
     *
     * The dowside of this is that your state manipulation is now spread across
     * multiple places in your codebase, making it harder to reason about. Writing
     * this for the first time is probably easy, but maintaining it can be a pain.
     */
    case 'CHANGE_ANIMAL':
      return '';
    default:
      return state;
  }
}
