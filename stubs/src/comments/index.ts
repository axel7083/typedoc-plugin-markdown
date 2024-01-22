/**
 *
 * Comments form module comments
 *
 * @links
 *
 * Links using `{@link}` inline tags.
 *
 * - {@link CommentInterface} - Links to CommentInterface
 * - {@link CommentInterface.prop | Links to CommentInterface.prop}
 * - {@link CommentInterface.propb | Links to CommentInterface.propb}
 * - {@link CommentEnum.MemberB}
 * - {@link SameName:var}
 * - {@link SameName:interface}
 * - {@link SameName.prop}
 * - {@link prop:var}
 * - {@link _prop_with_underscore:var}
 *
 * External links:
 *
 * - {@link https://www.google.com Google}
 * - {@linkcode https://www.google.com}
 *
 * @module
 *
 * @tagA
 *
 * Comments for a tag
 *
 * @tagB Comments for tag written on same line
 *
 * ## Html And Jsx
 *
 * A <tag></tag> in comments
 *
 * Closing </element> on its own
 *
 * A `<tag>` in backticks
 *
 * ```
 * A <tag> in a code block
 * Some <p> html </p> inside codeblock
 * ```
 * @media
 *
 * You can include media in doc comments:
 *
 * ![alt SomeAlt](media://logo.png)
 *
 * And include other files:
 *
 * [[include:example.md]] [[include:not-found.md]]
 */

export interface CommentInterface {
  prop: string;
  propb: string;
}

export enum CommentEnum {
  /**
   * Comment for Member
   *
   * @deprecated
   *
   * Deprecated member
   *
   * @see {@link SameName}
   */
  Member,
  MemberB,
}

export interface SameName {
  prop: string;
  propb: string;
}
export const SameName = true;
export const prop = true;
export const propb = true;
export const _prop_with_underscore = true;
