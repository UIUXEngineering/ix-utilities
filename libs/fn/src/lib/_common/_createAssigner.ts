import { baseRest } from './_baseRest';
import { isIterateeCall } from './_isIterateeCall';

/**
 * Creates a function like `_.assign`.
 *
 * @param assigner The function to assign values.
 * Returns the new assigner function.
 */
export function createAssigner(assigner: Function): Function {
  return baseRest(function(object, sources) {
    let index = -1;
    let length = sources.length;
    let customizer = length > 1 ? sources[length - 1] : undefined;
    const guard = length > 2 ? sources[2] : undefined;

    customizer =
      assigner.length > 3 && typeof customizer === 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      const source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}