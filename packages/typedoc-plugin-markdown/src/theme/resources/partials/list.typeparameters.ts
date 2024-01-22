import { TypeParameterReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function typeParametersList(
  context: MarkdownThemeRenderContext,
  typeParameters: TypeParameterReflection[],
): string {
  const rows: string[] = [];
  typeParameters?.forEach((typeParameter) => {
    const row: string[] = [];

    const { bold } = context.markdown;

    const nameCol: string[] = [bold(typeParameter.name)];

    if (typeParameter.type) {
      nameCol.push(`extends ${context.partials.someType(typeParameter.type)}`);
    }

    if (typeParameter.default) {
      nameCol.push(`= ${context.partials.someType(typeParameter.default)}`);
    }

    row.push('• ' + nameCol.join(' '));

    if (typeParameter.comment) {
      row.push(context.partials.comment(typeParameter.comment));
    }

    rows.push(row.join('\n\n'));
  });

  return rows.join('\n\n');
}
