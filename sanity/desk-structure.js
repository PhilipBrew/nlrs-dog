import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      S.listItem()
        .title('FAQ Page')
        .child(S.document().schemaType('faqs').documentId('faqPage')),
      S.listItem()
        .title('Contact Page')
        .child(S.document().schemaType('contact').documentId('contactPage')),
      S.listItem()
        .title('Terms And Conditions Page')
        .child(
          S.document()
            .schemaType('termsAndConditions')
            .documentId('termsAndConditionsPage')
        ),
      S.listItem()
        .title('Privacy Policy Page')
        .child(
          S.document()
            .schemaType('privacyPolicy')
            .documentId('privacyPolicyPage')
        ),
      S.listItem()
        .title('Cookie Policy Page')
        .child(
          S.document().schemaType('cookiePolicy').documentId('cookiePolicyPage')
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'faqs',
            'contact',
            'settings',
            'policy',
            'termsAndConditions',
            'cookiePolicy',
            'privacyPolicy',
          ].includes(item.getId())
      ),
    ]);
