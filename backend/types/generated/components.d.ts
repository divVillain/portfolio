import type { Schema, Struct } from '@strapi/strapi';

export interface DescriptionProjectDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_project_descriptions';
  info: {
    displayName: 'myProjectDescription';
    icon: 'alien';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'description.project-description': DescriptionProjectDescription;
    }
  }
}
