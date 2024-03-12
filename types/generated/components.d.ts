import type { Schema, Attribute } from '@strapi/strapi';

export interface TechsTechs extends Schema.Component {
  collectionName: 'components_techs_techs';
  info: {
    displayName: 'techs';
    icon: 'stack';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    ver: Attribute.String;
  };
}

export interface TechsTools extends Schema.Component {
  collectionName: 'components_techs_tools';
  info: {
    displayName: 'tools';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'techs.techs': TechsTechs;
      'techs.tools': TechsTools;
    }
  }
}
