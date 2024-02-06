import {
  DeclarationReflection,
  ReferenceType,
  ReflectionType,
  SignatureReflection,
  SomeType,
  UnionType,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, blockQuoteBlock, codeBlock, heading } from '../markdown';

export function signatureMemberReturns(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection;

  md.push(heading(headingLevel, context.text.getText('label.returns')));

  md.push(getReturnType(context, typeDeclaration, signature.type));

  if (signature.comment?.blockTags.length) {
    const tags = signature.comment.blockTags
      .filter((tag) => tag.tag === '@returns')
      .map((tag) => context.partials.commentParts(tag.content));
    md.push(tags.join('\n\n'));
  }

  if (
    signature.type instanceof ReferenceType &&
    signature.type.typeArguments?.length
  ) {
    if (signature.type.typeArguments[0] instanceof ReflectionType) {
      md.push(
        blockQuoteBlock(
          context.partials.typeDeclarationMember(
            signature.type.typeArguments[0].declaration,
            headingLevel,
          ),
        ),
      );
    }
  }

  if (typeDeclaration?.signatures) {
    typeDeclaration.signatures.forEach((signature) => {
      md.push(
        blockQuoteBlock(
          context.partials.signatureMember(signature, headingLevel + 1, true),
        ),
      );
    });
  }

  if (typeDeclaration?.children) {
    md.push(
      context.partials.typeDeclarationMember(typeDeclaration, headingLevel),
    );
  }

  return md.join('\n\n');
}

function getReturnType(
  context: MarkdownThemeRenderContext,
  typeDeclaration?: DeclarationReflection,
  type?: SomeType,
) {
  if (typeDeclaration?.signatures) {
    return backTicks('Function');
  }
  if (type) {
    const returnType = context.partials.someType(type);
    if (
      type instanceof UnionType ||
      (type instanceof ReflectionType &&
        context.options.getValue('expandObjects') &&
        context.options.getValue('useCodeBlocks'))
    ) {
      return codeBlock(returnType);
    }
    return returnType;
  }
  return '';
}
