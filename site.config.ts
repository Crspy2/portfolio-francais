import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '8f3c269df65c4feb823340b735487255',

  rootNotionSpaceId: null,

  name: 'Portfolio de Français',
  domain: 'portfolio',
  author: 'Leo Ghanem',

  description: "Portfolio de Français",

  github: 'crspy2',
  youtube: '/@crspytm',
  stripe: 'https://donate.stripe.com/test_28obKZgRYeMw3za3cc',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,

  isRedisEnabled: false,

  pageUrlOverrides: null,

  navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
