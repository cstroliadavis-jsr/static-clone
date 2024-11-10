/**
 * @module
 *
 * # @cstroliadavis/static-clone
 *
 * [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
 * ![version](https://img.shields.io/badge/version-0.0.0-blue)
 *
 * ## Description
 *
 * A function that creates a frozen, deep-copy of an object
 *
 * ### Motivation
 *
 * So frequently, developers find themselves wanting to create an object that is truly unchangeable.
 *
 * The built-in `Object.freeze` method, unfortunately only freezes top level properties of an object.
 *
 * There are also libraries out there that will recursively apply an `Object.freeze` on every object
 * in the hierarchy. This is often referred to as a "deepFreeze".
 *
 * Unfortunately, there is one issue that can come up with deepFreeze technology. If your object is
 * referencing other objects, those objects may also become unintentionally frozen.
 *
 * `static-clone` is similar to `deepFreeze`, except that it does a deep clone of the object first,
 * which provides a clean separation from any of the original nested objects.
 *
 * ## Installation
 *
 * ### Deno
 *
 * ```shell
 * deno add jsr:@cstroliadavis/static-clone
 * ```
 *
 * or simply import it directly:
 *
 * ```ts
 * import staticClone from "jsr:@cstroliadavis/static-clone@1";
 * ```
 *
 * ### Node.js
 *
 * ```shell
 * npx jsr add jsr/static-clone
 * ```
 *
 * ## Usage
 *
 * ### JavaScript or TypeScript
 *
 * ```ts

 * ```
 *
 * ## License
 *
 * See [MIT](./LICENSE)
 *
 * Generally speaking, feel free to use and modify this, and please provide attribution.
 *
 * ## Contributing
 *
 * If you find a bug, or have a feature request, please open an issue.
 *
 * https://github.com/cstroliadavis-jsr/static-clone/issues
 */

/**
 * Creates a frozen, deep-copy of an object
 */
const staticClone = () => {};

export default staticClone;
