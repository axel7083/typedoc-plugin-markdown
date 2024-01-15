import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import { ReflectionKind } from 'typedoc';

export async function prebuildKinds() {
  const themeRenderKindConstantsFile = path.join(
    __dirname,
    '..',
    'src',
    'plugin',
    'options',
    'text-mappings',
    'kind-defaults.ts',
  );

  const kinds = [
    { key: 'class', kind: ReflectionKind.Class },
    { key: 'constructor', kind: ReflectionKind.Constructor },
    { key: 'enum', kind: ReflectionKind.Enum },
    { key: 'enumMember', kind: ReflectionKind.EnumMember },
    { key: 'event', kind: undefined },
    { key: 'function', kind: ReflectionKind.Function },
    { key: 'interface', kind: ReflectionKind.Interface },
    { key: 'method', kind: ReflectionKind.Method },
    { key: 'module', kind: ReflectionKind.Module },
    { key: 'namespace', kind: ReflectionKind.Namespace },
    { key: 'variable', kind: ReflectionKind.Variable },
    { key: 'parameter', kind: ReflectionKind.Parameter },
    { key: 'property', kind: ReflectionKind.Property },
    { key: 'reference', kind: ReflectionKind.Reference },
    { key: 'typeAlias', kind: ReflectionKind.TypeAlias },
    { key: 'typeParameter', kind: ReflectionKind.TypeParameter },
  ];

  const kindsString: string[] = [];

  const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

  const singularString = (kind: any) =>
    kind.kind ? ReflectionKind.singularString(kind.kind) : capitalize(kind.key);

  const pluralString = (kind: any) =>
    kind.kind
      ? ReflectionKind.pluralString(kind.kind)
      : `${capitalize(kind.key)}s`;

  kindsString.push(`
  // THIS FILE IS AUTOGENERATED - DO NOT EDIT DIRECTLY

  export const KIND_DEFAULTS:  Record<string, string> = {
    ${kinds
      .map((kind) => {
        return `
        'kind.${kind.key}.singular':'${singularString(kind)}',
        'kind.${kind.key}.plural':'${pluralString(kind)}'
        `;
      })
      .join(',')}
  }
  `);

  kindsString.push(`
  export const SINGULAR_KIND_KEY_MAP: Record<string, string> = {
    ${kinds
      .map((kind) => {
        return `['${singularString(kind)}']: 'kind.${kind.key}.singular'`;
      })
      .join(',')}
  }
  `);

  kindsString.push(`
  export const PLURAL_KIND_KEY_MAP: Record<string, string>= {
    ${kinds
      .map((kind) => {
        return `['${pluralString(kind)}']: 'kind.${kind.key}.plural'`;
      })
      .join(',')}
  }
  `);

  const formattedKinds = await prettier.format(kindsString.join('\n'), {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });

  fs.writeFileSync(themeRenderKindConstantsFile, formattedKinds);
}
