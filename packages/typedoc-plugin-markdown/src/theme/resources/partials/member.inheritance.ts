import {
  ArrayType,
  DeclarationReflection,
  ReferenceType,
  SignatureReflection,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function inheritance(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];
  const { heading } = context.markdown;

  if (reflection.implementationOf) {
    if (headingLevel !== -1) {
      md.push(
        heading(headingLevel, context.text.get('label.implementationOf')),
      );
    }
    md.push(typeAndParent(context, reflection.implementationOf));
  }

  if (reflection.inheritedFrom) {
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, context.text.get('label.inheritedFrom')));
    }
    md.push(typeAndParent(context, reflection.inheritedFrom));
  }

  if (reflection.overwrites) {
    const overridesLabel = context.text.get('label.overrides');
    if (headingLevel !== -1) {
      md.push(heading(headingLevel, overridesLabel));
    }
    md.push(typeAndParent(context, reflection.overwrites));
  }

  return md.join('\n\n');
}

const typeAndParent = (
  context: MarkdownThemeRenderContext,
  props: ArrayType | ReferenceType,
) => {
  const { backTicks } = context.markdown;
  if (props) {
    if ('elementType' in props) {
      return typeAndParent(context, props.elementType as any) + '[]';
    } else {
      if (props.reflection) {
        const name = props.reflection.getFriendlyFullName();
        const url = props.reflection?.url || props.reflection?.parent?.url;
        const output = url
          ? context.partials.linkTo(backTicks(name), url)
          : backTicks(name);
        return output;
      } else {
        return backTicks(props.toString());
      }
    }
  }
  return 'void';
};
