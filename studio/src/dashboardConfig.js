export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcb5854f6e0b4dbd70b60d8',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-demo-studio',
                  apiId: '2cb3df46-0d83-41cb-bb49-85c7dc5c5b2a'
                },
                {
                  buildHookId: '5fcb5854ded7ddde29f5a172',
                  title: 'Blog Website',
                  name: 'sanity-blog-demo',
                  apiId: '62fc9d5a-d701-44f3-bb4e-5375743ab5c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VSevagen/sanity-blog-demo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-demo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
