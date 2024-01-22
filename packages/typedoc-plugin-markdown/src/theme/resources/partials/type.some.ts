import {
  ArrayType,
  ConditionalType,
  IndexedAccessType,
  InferredType,
  IntersectionType,
  IntrinsicType,
  NamedTupleMember,
  QueryType,
  ReferenceType,
  ReflectionType,
  SomeType,
  TupleType,
  TypeOperatorType,
  UnionType,
  UnknownType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function someType(
  context: MarkdownThemeRenderContext,
  someType: SomeType,
  foreCollpase = false,
): string {
  const { backTicks } = context.markdown;
  if (!someType) {
    return '';
  }

  if (someType instanceof ArrayType) {
    return context.partials.arrayType(someType);
  }

  if (someType instanceof ConditionalType) {
    return context.partials.conditionalType(someType);
  }

  if (someType instanceof IndexedAccessType) {
    return context.partials.indexAccessType(someType);
  }

  if (someType instanceof InferredType) {
    return context.partials.inferredType(someType);
  }

  if (someType instanceof IntersectionType && someType.types) {
    return context.partials.intersectionType(someType);
  }

  if (someType instanceof IntrinsicType && someType.name) {
    return context.partials.intrinsicType(someType);
  }

  if (someType instanceof QueryType) {
    return context.partials.queryType(someType);
  }

  if (someType instanceof ReferenceType) {
    return context.partials.referenceType(someType, foreCollpase);
  }

  if (someType instanceof ReflectionType) {
    return context.partials.reflectionType(someType, foreCollpase);
  }

  if (someType instanceof TypeOperatorType) {
    return context.partials.typeOperatorType(someType);
  }

  if (someType instanceof TupleType && someType.elements) {
    return context.partials.tupleType(someType);
  }

  if (someType instanceof UnionType && someType.types) {
    return context.partials.unionType(someType);
  }

  if (someType instanceof UnknownType) {
    return context.partials.unknownType(someType);
  }

  if (someType instanceof NamedTupleMember) {
    return context.partials.namedTupleType(someType);
  }

  if (someType.toString() == 'null') {
    return backTicks('null');
  }

  return backTicks(someType?.toString());
}
