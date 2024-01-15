import { DeclarationReflection, PageEvent, Reflection } from 'typedoc';

import {
  MarkdownApplication,
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from '../../dist';

export function load(app: MarkdownApplication) {
  app.renderer.defineTheme('custom-theme', MyMarkdownTheme);

  app.renderer.markdownHooks.on(
    'page.begin',
    () => '> TOP BANNER using `page.begin` hook',
  );

  app.renderer.markdownHooks.on(
    'page.end',
    () => `**Generated on using \`page.end\` hook**`,
  );

  app.renderer.markdownHooks.on(
    'content.begin',
    () => '> CONTENT BANNER using `content.begin` hook',
  );
}

class MyMarkdownTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new MyMarkdownThemeRenderContext(
      this,
      pageEvent,
      this.application.options,
    );
  }
}

class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
  override partials = {
    ...this.partials,
    header: (page: MarkdownPageEvent<DeclarationReflection>) => {
      return `
<div style="display:flex; align-items:center;">
  <img alt="My logo" src="https://placehold.co/100x50" style="margin-right: .5em;" />
  <em>Welcome to ${page.project.name} with a customised header partial!!</em>
</div>
`;
    },
  };
}
