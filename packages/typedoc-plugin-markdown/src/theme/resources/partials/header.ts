import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { bold, link } from '../../../support/elements';
import { getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const isPackages =
    context.options.getValue('entryPointStrategy') ===
    EntryPointStrategy.Packages;
  if (isPackages) {
    const packageItem = findPackage(page.model);
    if (packageItem) {
      return packageHeader(context, page);
    }
  }
  return projectHeader(context, page);
}

function projectHeader(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const entryFileName = context.options.getValue('entryFileName');

  const md: string[] = [];

  const readmeLabel = 'Readme';
  const documentationLabel = 'API';

  md.push(bold(getProjectName(page.project, context)));

  md.push('•');

  const preserveReadme =
    Boolean(page.project.readme) && !context.options.getValue('mergeReadme');

  const preserveModulesPage =
    (page.project?.groups &&
      Boolean(
        page.project?.groups[0]?.children.find(
          (child) => child.name === context.options.getValue('entryModule'),
        ),
      )) ||
    false;

  if (preserveReadme) {
    const links: string[] = [];

    if (page.url === entryFileName) {
      links.push(readmeLabel);
    } else {
      links.push(
        link(
          readmeLabel,
          context.relativeURL(
            preserveModulesPage ? 'readme_.md' : entryFileName,
          ),
        ),
      );
    }

    links.push('\\|');

    if (page.url === entryFileName) {
      links.push(
        link(documentationLabel, context.relativeURL(page.project.url)),
      );
    } else {
      links.push(documentationLabel);
    }

    md.push(`${links.join(' ')}`);
  } else {
    md.push(`${documentationLabel}`);
  }

  return `${md.join(' ')}\n\n***\n`;
}

function packageHeader(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model) as ProjectReflection;

  if (!packageItem) {
    return '';
  }

  const md: string[] = [];

  const readmeLabel = 'Readme';
  const documentationLabel = 'API';

  const entryFileName = context.options.getValue('entryFileName');

  const packageItemName = packageItem.packageVersion
    ? `${packageItem.name} v${packageItem.packageVersion}`
    : packageItem.name;

  md.push(bold(packageItemName));

  md.push('•');

  const preservePackageReadme =
    Boolean(packageItem.readme) && !context.options.getValue('mergeReadme');

  if (preservePackageReadme) {
    const links: string[] = [];
    const readmeUrl = `${packageItem.name}/${entryFileName}`;

    if (page.url === readmeUrl) {
      links.push(readmeLabel);
    } else {
      links.push(link(readmeLabel, context.relativeURL(readmeUrl)));
    }

    links.push('\\|');

    if (page.url === readmeUrl) {
      links.push(
        link(documentationLabel, context.relativeURL(packageItem.url)),
      );
    } else {
      links.push(documentationLabel);
    }
    md.push(`${links.join(' ')}`);
  } else {
    md.push(documentationLabel);
  }

  return `${md.join(' ')}\n\n***\n`;
}

function getProjectName(
  project: ProjectReflection,
  context: MarkdownThemeRenderContext,
  url?: string,
) {
  const projectName = getProjectDisplayName(
    project,
    context.options.getValue('includeVersion'),
  );
  if (url) {
    return link(projectName, context.relativeURL(url));
  } else {
    return projectName;
  }
}

function findPackage(model: DeclarationReflection | ProjectReflection) {
  if (
    model.kindOf(ReflectionKind.Module) &&
    model.parent?.kindOf(ReflectionKind.Project)
  ) {
    return model;
  }
  if (model.parent) {
    return findPackage(model.parent as DeclarationReflection);
  }
  return null;
}
