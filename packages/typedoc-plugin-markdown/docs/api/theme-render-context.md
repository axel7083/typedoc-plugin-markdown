**typedoc-plugin-markdown** • API

***

[typedoc-plugin-markdown](README.md) / theme-render-context

# theme-render-context

## MarkdownThemeRenderContext

The render context of the MarkdownTheme.
This follows the implementation of TypeDocs [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html)

### Constructors

#### new MarkdownThemeRenderContext(page, options)

> **new MarkdownThemeRenderContext**(`page`, `options`): [`MarkdownThemeRenderContext`](theme-render-context.md#markdownthemerendercontext)

##### Parameters

• **page**: `null` \| `MarkdownPageEvent`\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>

The page this context is created for.

• **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

The options used by TypeDoc. See TypeDoc's [Options](https://typedoc.org/api/classes/Configuration.Options.html) Class.

##### Returns

[`MarkdownThemeRenderContext`](theme-render-context.md#markdownthemerendercontext)

##### Source

[theme-render-context.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L22)

### Properties

#### page

> **`readonly`** **page**: `null` \| `MarkdownPageEvent`\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>

The page this context is created for.

##### Source

[theme-render-context.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L23)

#### options

> **`readonly`** **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

The options used by TypeDoc. See TypeDoc's [Options](https://typedoc.org/api/classes/Configuration.Options.html) Class.

##### Source

[theme-render-context.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L24)

#### markdown

> **markdown**: \{
  `heading`: (`level`, `text`) => `string`;
  `link`: (`label`, `url`) => `string`;
  `bold`: (`text`) => `string`;
  `italic`: (`text`) => `string`;
  `backTicks`: (`text`) => `string`;
  `unorderedList`: \<`T`\>(`items`) => `string`;
  `horizontalRule`: () => `string`;
  `codeBlock`: (`content`) => `string`;
  `strikeThrough`: (`content`) => `string`;
  `table`: (`headers`, `rows`) => `string`;
  `blockQuoteBlock`: (`content`) => `string`;
  `indentBlock`: (`content`) => `string`;
  }

Returns an object with methods for generating markdown syntax.

Each method returns a string formatted according to markdown rules.

This can consumed by theme templates and partials using the syntax `context.markdown.method()`.

##### Type declaration

###### heading

> **heading**: (`level`, `text`) => `string`

Returns a heading in markdown format

###### Parameters

• **level**: `number`

The level of the heading

• **text**: `string`

The text of the heading

###### Returns

`string`

###### link

> **link**: (`label`, `url`) => `string`

The link element

###### Parameters

• **label**: `string`

The text to display for the link

• **url**: `null` \| `string`

The url to link to

###### Returns

`string`

###### bold

> **bold**: (`text`) => `string`

###### Parameters

• **text**: `string`

###### Returns

`string`

###### italic

> **italic**: (`text`) => `string`

###### Parameters

• **text**: `string`

###### Returns

`string`

###### backTicks

> **backTicks**: (`text`) => `string`

###### Parameters

• **text**: `string`

###### Returns

`string`

###### unorderedList

> **unorderedList**: \<`T`\>(`items`) => `string`

###### Type parameters

• **T**

###### Parameters

• **items**: `T`[]

###### Returns

`string`

###### horizontalRule

> **horizontalRule**: () => `string`

###### Returns

`string`

###### codeBlock

> **codeBlock**: (`content`) => `string`

###### Parameters

• **content**: `string`

###### Returns

`string`

###### strikeThrough

> **strikeThrough**: (`content`) => `string`

###### Parameters

• **content**: `string`

###### Returns

`string`

###### table

> **table**: (`headers`, `rows`) => `string`

###### Parameters

• **headers**: `string`[]

• **rows**: `string`[][]

###### Returns

`string`

###### blockQuoteBlock

> **blockQuoteBlock**: (`content`) => `string`

###### Parameters

• **content**: `string`

###### Returns

`string`

###### indentBlock

> **indentBlock**: (`content`) => `string`

###### Parameters

• **content**: `string`

###### Returns

`string`

##### Source

[theme-render-context.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L34)

#### utils

> **utils**: \{
  `parseUrl`: (`url`) => `string`;
  `escapeChars`: (`str`) => `string`;
  `escapeAngleBrackets`: (`str`) => `string`;
  `stripComments`: (`str`) => `string`;
  `formatTableDescriptionCol`: (`str`) => `string`;
  `formatTableNameCol`: (`str`) => `string`;
  `stripLineBreaks`: (`str`, `includeHTML`) => `string`;
  }

A set of pure utils to be consumed accross the plugin.

These can be consumed by theme templates and partials using the syntax `context.utils.method()`.

##### Type declaration

###### parseUrl

> **parseUrl**: (`url`) => `string`

###### Parameters

• **url**: `string`

###### Returns

`string`

###### escapeChars

> **escapeChars**: (`str`) => `string`

###### Parameters

• **str**: `string`

###### Returns

`string`

###### escapeAngleBrackets

> **escapeAngleBrackets**: (`str`) => `string`

Escapes non html tag angle brackets inside comment blocks.
Ignores strings inside code blocks

###### Parameters

• **str**: `string`

###### Returns

`string`

###### stripComments

> **stripComments**: (`str`) => `string`

###### Parameters

• **str**: `string`

###### Returns

`string`

###### formatTableDescriptionCol

> **formatTableDescriptionCol**: (`str`) => `string`

###### Parameters

• **str**: `string`

###### Returns

`string`

###### formatTableNameCol

> **formatTableNameCol**: (`str`) => `string`

###### Parameters

• **str**: `string`

###### Returns

`string`

###### stripLineBreaks

> **stripLineBreaks**: (`str`, `includeHTML`) => `string`

###### Parameters

• **str**: `string`

• **includeHTML**: `boolean`= `true`

###### Returns

`string`

##### Source

[theme-render-context.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L41)

#### helpers

> **helpers**: \{
  `getKeyword`: (`kind`) => `any`;
  `getDeclarationType`: (`declaration`) => `undefined` \| `SomeType`;
  `getParameterDefaultValue`: (`parameter`) => `string`;
  `getModifier`: `null` \| `"private"` \| `"public"` \| `"readonly"` \| `"protected"` \| `"static"` \| `"abstract"` \| `"get"` \| `"set"`;
  `isGroupKind`: `boolean`;
  `flattenDeclarations`: (`props`, `includeSignatures`) => `any`[];
  }

A set of methods to return strings from specific TypeDoc models.

These can be consumed by theme templates and partials using the syntax `context.models.method()`.

##### Type declaration

###### getKeyword

> **getKeyword**: (`kind`) => `any`

###### Parameters

• **kind**: `ReflectionKind`

###### Returns

`any`

###### getDeclarationType

> **getDeclarationType**: (`declaration`) => `undefined` \| `SomeType`

###### Parameters

• **declaration**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

###### Returns

`undefined` \| `SomeType`

###### getParameterDefaultValue

> **getParameterDefaultValue**: (`parameter`) => `string`

###### Parameters

• **parameter**: `ParameterReflection`

###### Returns

`string`

###### getModifier()

###### Parameters

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

###### Returns

`null` \| `"private"` \| `"public"` \| `"readonly"` \| `"protected"` \| `"static"` \| `"abstract"` \| `"get"` \| `"set"`

###### isGroupKind()

###### Parameters

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`

###### Returns

`boolean`

###### flattenDeclarations

> **flattenDeclarations**: (`props`, `includeSignatures`) => `any`[]

###### Parameters

• **props**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

• **includeSignatures**: `boolean`= `false`

###### Returns

`any`[]

##### Source

[theme-render-context.ts:48](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L48)

#### text

> **text**: \{
  `get`: (`key`) => `string`;
  `groupTitle`: `any`;
  `kindString`: `any`;
  `indexTitle`: `string`;
  }

The theme's global text context.

##### Type declaration

###### get

> **get**: (`key`) => `string`

###### Parameters

• **key**: keyof `TextContentMappings`

The key of the text mapping to get.

###### Returns

`string`

###### groupTitle()

###### Parameters

• **title**: `string`

###### Returns

`any`

###### kindString()

###### Parameters

• **kind**: `ReflectionKind`

###### Returns

`any`

###### indexTitle()

###### Parameters

• **textContent**: `string`

• **name**: `string`

• **version?**: `string`

###### Returns

`string`

##### Source

[theme-render-context.ts:53](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L53)

#### templates

> **templates**: \{
  `memberTemplate`: (...`args`) => `string`;
  `projectTemplate`: (...`args`) => `string`;
  `readmeTemplate`: (...`args`) => `string`;
  `reflectionTemplate`: (...`args`) => `string`;
  }

The theme's global templates context.

##### Type declaration

###### memberTemplate

> **memberTemplate**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\>]

###### Returns

`string`

###### projectTemplate

> **projectTemplate**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>]

###### Returns

`string`

###### readmeTemplate

> **readmeTemplate**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>]

###### Returns

`string`

###### reflectionTemplate

> **reflectionTemplate**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\>]

###### Returns

`string`

##### Source

[theme-render-context.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L58)

#### partials

> **partials**: \{
  `breadcrumbs`: (...`args`) => `string`;
  `commentParts`: (...`args`) => `string`;
  `comment`: (...`args`) => `string`;
  `footer`: (...`args`) => `string`;
  `header`: (...`args`) => `string`;
  `pageIndex`: (...`args`) => `string`;
  `reflectionIndex`: (...`args`) => `string`;
  `linkTo`: (...`args`) => `string`;
  `parametersList`: (...`args`) => `string`;
  `typeParametersList`: (...`args`) => `string`;
  `accessorMember`: (...`args`) => `string`;
  `constructorMember`: (...`args`) => `string`;
  `declarationMemberIdentifier`: (...`args`) => `string`;
  `declarationMember`: (...`args`) => `string`;
  `memberHierarchy`: (...`args`) => `string`;
  `indexSignatureTitle`: (...`args`) => `string`;
  `inheritance`: (...`args`) => `string`;
  `referenceMember`: (...`args`) => `string`;
  `reflectionMember`: (...`args`) => `string`;
  `signatureMemberIdentifier`: (...`args`) => `string`;
  `signatureParameters`: (...`args`) => `string`;
  `signatureMemberReturns`: (...`args`) => `string`;
  `signatureMember`: (...`args`) => `string`;
  `sources`: (...`args`) => `string`;
  `memberTitle`: (...`args`) => `string`;
  `member`: (...`args`) => `string`;
  `typeDeclarationMember`: (...`args`) => `string`;
  `members`: (...`args`) => `string`;
  `pageTitle`: (...`args`) => `string`;
  `enumMembersTable`: (...`args`) => `string`;
  `parametersTable`: (...`args`) => `string`;
  `propertiesTable`: (...`args`) => `string`;
  `typeDeclarationTable`: (...`args`) => `string`;
  `typeParametersTable`: (...`args`) => `string`;
  `typeArguments`: (...`args`) => `string`;
  `arrayType`: (...`args`) => `string`;
  `conditionalType`: (...`args`) => `string`;
  `declarationType`: (...`args`) => `string`;
  `functionType`: (...`args`) => `string`;
  `indexAccessType`: (...`args`) => `string`;
  `inferredType`: (...`args`) => `string`;
  `intersectionType`: (...`args`) => `string`;
  `intrinsicType`: (...`args`) => `string`;
  `literalType`: (...`args`) => `string`;
  `namedTupleType`: (...`args`) => `string`;
  `queryType`: (...`args`) => `string`;
  `referenceType`: (...`args`) => `string`;
  `reflectionType`: (...`args`) => `string`;
  `someType`: (...`args`) => `string`;
  `tupleType`: (...`args`) => `string`;
  `typeOperatorType`: (...`args`) => `string`;
  `unionType`: (...`args`) => `string`;
  `unknownType`: (...`args`) => `string`;
  }

The theme's global partials context.

##### Type declaration

###### breadcrumbs

> **breadcrumbs**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>]

###### Returns

`string`

###### commentParts

> **commentParts**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`CommentDisplayPart`]( https://typedoc.org/api/types/Models.CommentDisplayPart.html )[]]

###### Returns

`string`

###### comment

> **comment**: (...`args`) => `string`

###### Parameters

• ...**args**: [`Comment`, `number`, `boolean`, `boolean`]

###### Returns

`string`

###### footer

> **footer**: (...`args`) => `string`

###### Parameters

• ...**args**: []

###### Returns

`string`

###### header

> **header**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>]

###### Returns

`string`

###### pageIndex

> **pageIndex**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>, `number`]

###### Returns

`string`

###### reflectionIndex

> **reflectionIndex**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html), `number`]

###### Returns

`string`

###### linkTo

> **linkTo**: (...`args`) => `string`

###### Parameters

• ...**args**: [`string`, `string`]

###### Returns

`string`

###### parametersList

> **parametersList**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ParameterReflection`[]]

###### Returns

`string`

###### typeParametersList

> **typeParametersList**: (...`args`) => `string`

###### Parameters

• ...**args**: [`TypeParameterReflection`[]]

###### Returns

`string`

###### accessorMember

> **accessorMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`]

###### Returns

`string`

###### constructorMember

> **constructorMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`]

###### Returns

`string`

###### declarationMemberIdentifier

> **declarationMemberIdentifier**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)]

###### Returns

`string`

###### declarationMember

> **declarationMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`, `boolean`]

###### Returns

`string`

###### memberHierarchy

> **memberHierarchy**: (...`args`) => `string`

###### Parameters

• ...**args**: [`DeclarationHierarchy`, `number`]

###### Returns

`string`

###### indexSignatureTitle

> **indexSignatureTitle**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SignatureReflection`]

###### Returns

`string`

###### inheritance

> **inheritance**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`, `number`]

###### Returns

`string`

###### referenceMember

> **referenceMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ReferenceReflection`]

###### Returns

`string`

###### reflectionMember

> **reflectionMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`]

###### Returns

`string`

###### signatureMemberIdentifier

> **signatureMemberIdentifier**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SignatureReflection`, \{
  `accessor`: `string`;
  `includeType`: `boolean`;
  }]

###### Returns

`string`

###### signatureParameters

> **signatureParameters**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ParameterReflection`[], `boolean`]

###### Returns

`string`

###### signatureMemberReturns

> **signatureMemberReturns**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SignatureReflection`, `number`]

###### Returns

`string`

###### signatureMember

> **signatureMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SignatureReflection`, `number`, `boolean`, `string`]

###### Returns

`string`

###### sources

> **sources**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`, `number`]

###### Returns

`string`

###### memberTitle

> **memberTitle**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)]

###### Returns

`string`

###### member

> **member**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`, `boolean`]

###### Returns

`string`

###### typeDeclarationMember

> **typeDeclarationMember**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `number`]

###### Returns

`string`

###### members

> **members**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ContainerReflection`, `number`]

###### Returns

`string`

###### pageTitle

> **pageTitle**: (...`args`) => `string`

###### Parameters

• ...**args**: [`MarkdownPageEvent`\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>]

###### Returns

`string`

###### enumMembersTable

> **enumMembersTable**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]]

###### Returns

`string`

###### parametersTable

> **parametersTable**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ParameterReflection`[]]

###### Returns

`string`

###### propertiesTable

> **propertiesTable**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `boolean`]

###### Returns

`string`

###### typeDeclarationTable

> **typeDeclarationTable**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]]

###### Returns

`string`

###### typeParametersTable

> **typeParametersTable**: (...`args`) => `string`

###### Parameters

• ...**args**: [`TypeParameterReflection`[]]

###### Returns

`string`

###### typeArguments

> **typeArguments**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SomeType`[], `boolean`]

###### Returns

`string`

###### arrayType

> **arrayType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ArrayType`]

###### Returns

`string`

###### conditionalType

> **conditionalType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ConditionalType`]

###### Returns

`string`

###### declarationType

> **declarationType**: (...`args`) => `string`

###### Parameters

• ...**args**: [[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)]

###### Returns

`string`

###### functionType

> **functionType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SignatureReflection`[]]

###### Returns

`string`

###### indexAccessType

> **indexAccessType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`IndexedAccessType`]

###### Returns

`string`

###### inferredType

> **inferredType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`InferredType`]

###### Returns

`string`

###### intersectionType

> **intersectionType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`IntersectionType`]

###### Returns

`string`

###### intrinsicType

> **intrinsicType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`IntrinsicType`]

###### Returns

`string`

###### literalType

> **literalType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`LiteralType`]

###### Returns

`string`

###### namedTupleType

> **namedTupleType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`NamedTupleMember`]

###### Returns

`string`

###### queryType

> **queryType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`QueryType`]

###### Returns

`string`

###### referenceType

> **referenceType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ReferenceType`, `boolean`]

###### Returns

`string`

###### reflectionType

> **reflectionType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`ReflectionType`, `boolean`]

###### Returns

`string`

###### someType

> **someType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`SomeType`, `boolean`]

###### Returns

`string`

###### tupleType

> **tupleType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`TupleType`]

###### Returns

`string`

###### typeOperatorType

> **typeOperatorType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`TypeOperatorType`]

###### Returns

`string`

###### unionType

> **unionType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`UnionType`]

###### Returns

`string`

###### unknownType

> **unknownType**: (...`args`) => `string`

###### Parameters

• ...**args**: [`UnknownType`]

###### Returns

`string`

##### Source

[theme-render-context.ts:63](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/e0ce107e/packages/typedoc-plugin-markdown/src/theme/theme-render-context.ts#L63)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
