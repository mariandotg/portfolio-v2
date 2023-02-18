import { ContentfulDataAdapter } from '@/models/adapters/ContentfulDataAdapter';
import {
  ContactContent,
  JobsContent,
  SectionContent,
  SkillsContent,
} from '@/models/domain/FormattedData/FormattedContent';
import { FormattedData } from '@/models/domain/FormattedData/FormattedData';

export const contentfulDataAdapter: ContentfulDataAdapter = (data) => {
  return data.fields.sections.reduce<FormattedData>((acc, section) => {
    const { slug, ...sectionFields } = section.fields;

    const content = sectionFields.content!.reduce<SectionContent>(
      (acc, contentObj) => {
        const { slug, ...contentFields } = contentObj.fields;

        if ('content' in contentFields) {
          const content = contentFields.content.reduce<
            Array<Partial<SkillsContent | JobsContent | ContactContent>>
          >((acc, content) => {
            const { slug, ...fields } = content?.fields;
            const id = content?.sys.id;

            return [...acc, { ...fields, id }];
          }, []);

          return { ...acc, [slug]: content };
        }
        return { ...acc, [slug]: contentFields };
      },
      {} as SectionContent
    );

    return { ...acc, [slug]: { ...sectionFields, content } };
  }, {} as FormattedData);
};
