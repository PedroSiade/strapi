import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAcessoRapido extends Schema.Component {
  collectionName: 'components_home_acesso_rapidos';
  info: {
    displayName: 'AcessoRapido';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'page.link'> & Attribute.Required;
    topicoAcesso: Attribute.String & Attribute.Required;
  };
}

export interface HomeBibliotecaVirtual extends Schema.Component {
  collectionName: 'components_home_biblioteca_virtuals';
  info: {
    displayName: 'BibliotecaVirtual';
    icon: 'book';
  };
  attributes: {};
}

export interface HomeOndeEstamos extends Schema.Component {
  collectionName: 'components_home_onde_estamos';
  info: {
    displayName: 'OndeEstamos';
    icon: 'pin';
    description: '';
  };
  attributes: {
    localizacaoMedia: Attribute.Media;
    LocalizacaoEmpresa: Attribute.Component<'page.localizacao', true>;
    linklocal: Attribute.Component<'page.link', true>;
    contato: Attribute.BigInteger;
  };
}

export interface HomeSomos extends Schema.Component {
  collectionName: 'components_home_somos';
  info: {
    displayName: 'Somos';
    icon: 'user';
    description: '';
  };
  attributes: {
    quantidadeTecnicos: Attribute.Integer;
    quantidadeNutricionistas: Attribute.Integer;
    mediasSomos: Attribute.Media;
  };
}

export interface HomeUmConselhoProximo extends Schema.Component {
  collectionName: 'components_home_um_conselho_proximos';
  info: {
    displayName: 'UmConselhoProximo';
    icon: 'cast';
    description: '';
  };
  attributes: {
    Link: Attribute.Component<'page.link'> & Attribute.Required;
    topicoConselho: Attribute.String & Attribute.Required;
  };
}

export interface PageFootertopic extends Schema.Component {
  collectionName: 'components_page_footertopics';
  info: {
    displayName: 'footertopic';
    icon: 'bulletList';
  };
  attributes: {
    Topico: Attribute.String;
    topicItem: Attribute.Component<'page.link', true>;
  };
}

export interface PageLink extends Schema.Component {
  collectionName: 'components_page_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface PageLocalizacao extends Schema.Component {
  collectionName: 'components_page_localizacaos';
  info: {
    displayName: 'Localizacao';
    description: '';
  };
  attributes: {
    Rua: Attribute.Text & Attribute.Required;
    CEP: Attribute.BigInteger & Attribute.Required;
    Cidade: Attribute.String & Attribute.Required;
    Complemento: Attribute.Text;
    Setor: Attribute.String;
    Numero: Attribute.Integer;
  };
}

export interface PagePadraoPublicacao extends Schema.Component {
  collectionName: 'components_page_padrao_publicacaos';
  info: {
    displayName: 'PadraoPublicacao';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Titulo: Attribute.String & Attribute.Required & Attribute.Unique;
    Descricao: Attribute.Text;
    Media: Attribute.Media & Attribute.Required;
    TextoPublicacao: Attribute.RichText & Attribute.Required;
  };
}

export interface PageSocialmedia extends Schema.Component {
  collectionName: 'components_page_socialmedias';
  info: {
    displayName: 'socialmedia';
    icon: 'user';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<
      ['facebook', 'twitter', 'linkedin', 'instagram']
    > &
      Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.acesso-rapido': HomeAcessoRapido;
      'home.biblioteca-virtual': HomeBibliotecaVirtual;
      'home.onde-estamos': HomeOndeEstamos;
      'home.somos': HomeSomos;
      'home.um-conselho-proximo': HomeUmConselhoProximo;
      'page.footertopic': PageFootertopic;
      'page.link': PageLink;
      'page.localizacao': PageLocalizacao;
      'page.padrao-publicacao': PagePadraoPublicacao;
      'page.socialmedia': PageSocialmedia;
    }
  }
}
