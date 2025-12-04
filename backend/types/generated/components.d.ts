import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProjectDescription extends Struct.ComponentSchema {
  collectionName: 'components_project_project_descriptions';
  info: {
    displayName: 'projectDescription';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjectProjectImages extends Struct.ComponentSchema {
  collectionName: 'components_project_project_images';
  info: {
    displayName: 'ProjectImages';
    icon: 'landscape';
  };
  attributes: {
    gridSize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project-description': ProjectProjectDescription;
      'project.project-images': ProjectProjectImages;
    }
  }
}
