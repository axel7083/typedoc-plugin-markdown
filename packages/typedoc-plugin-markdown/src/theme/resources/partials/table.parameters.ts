import { ParameterReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function parametersTable(
  context: MarkdownThemeRenderContext,
  parameters: ParameterReflection[],
): string {
  const { table, backTicks } = context.markdown;
  const { stripLineBreaks, formatTableDescriptionCol } = context.utils;

  const parseParams = (current: any, acc: any) => {
    const shouldFlatten =
      current.type?.declaration?.kind === ReflectionKind.TypeLiteral &&
      current.type?.declaration?.children;
    return shouldFlatten
      ? [...acc, current, ...flattenParams(current)]
      : [...acc, current];
  };

  const flattenParams = (current: any) => {
    return current.type?.declaration?.children?.reduce(
      (acc: any, child: any) => {
        const childObj = {
          ...child,
          name: `${current.name}.${child.name}`,
        };
        return parseParams(childObj, acc);
      },
      [],
    );
  };

  const showDefaults = hasDefaultValues(parameters);

  const parsedParams = parameters.reduce(
    (acc: any, current: any) => parseParams(current, acc),
    [],
  );

  const hasComments = parsedParams.some((param) => Boolean(param.comment));

  const headers = [
    context.text.get('kind.parameter.singular'),
    context.text.get('label.type'),
  ];

  if (showDefaults) {
    headers.push(context.text.get('label.defaultValue'));
  }

  if (hasComments) {
    headers.push(context.text.get('label.description'));
  }

  const firstOptionalParamIndex = parameters.findIndex(
    (parameter) => parameter.flags.isOptional,
  );

  const rows: string[][] = [];

  parsedParams.forEach((parameter, i) => {
    const row: string[] = [];

    const isOptional =
      parameter.flags.isOptional ||
      (firstOptionalParamIndex !== -1 && i > firstOptionalParamIndex);

    const rest = parameter.flags.isRest ? '...' : '';

    const optional = isOptional ? '?' : '';

    row.push(`${rest}${backTicks(parameter.name)}${optional}`);

    if (parameter.type) {
      row.push(
        stripLineBreaks(context.partials.someType(parameter.type), false),
      );
    }

    if (showDefaults) {
      row.push(backTicks(context.helpers.getParameterDefaultValue(parameter)));
    }

    if (hasComments) {
      if (parameter.comment) {
        row.push(
          stripLineBreaks(
            formatTableDescriptionCol(
              context.partials.comment(parameter.comment),
            ),
          ),
        );
      } else {
        row.push('-');
      }
    }
    rows.push(row);
  });

  return table(headers, rows);
}

function hasDefaultValues(parameters: ParameterReflection[]) {
  const defaultValues = (parameters as ParameterReflection[]).map(
    (param) =>
      param.defaultValue !== '{}' &&
      param.defaultValue !== '...' &&
      !!param.defaultValue,
  );

  return !defaultValues.every((value) => !value);
}
