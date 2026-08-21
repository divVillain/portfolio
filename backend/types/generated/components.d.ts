import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectCarouselCycle extends Struct.ComponentSchema {
  collectionName: 'components_project_carousel_cycles';
  info: {
    displayName: 'CarouselCycle';
  };
  attributes: {
    code: Schema.Attribute.Component<'project.hero-image', false>;
    design: Schema.Attribute.Component<'project.hero-image', false>;
    paint: Schema.Attribute.Component<'project.hero-image', false>;
  };
}

export interface ProjectHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_project_hero_images';
  info: {
    displayName: 'HeroImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    skill: Schema.Attribute.Enumeration<['paint', 'design', 'code']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'paint'>;
  };
}

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
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface ProjectProjectVideos extends Struct.ComponentSchema {
  collectionName: 'components_project_project_videos';
  info: {
    displayName: 'ProjectVideos';
    icon: 'cast';
  };
  attributes: {
    videos: Schema.Attribute.Media<'videos' | 'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.carousel-cycle': ProjectCarouselCycle;
      'project.hero-image': ProjectHeroImage;
      'project.project-description': ProjectProjectDescription;
      'project.project-images': ProjectProjectImages;
      'project.project-videos': ProjectProjectVideos;
    }
  }
}
