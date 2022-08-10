/**
 * @template D - Type of the data that is passed down to jobs
 */
export default interface Queue<D> {
  add(data: D): void;
}
