const path = require(`path`);

exports.createPages = async function ({ actions, graphql }) {
  const galleryTemplate = path.resolve(`src/layouts/gallery.js`);
  const { data } = await graphql(`
    query MyQuery {
      allDatoCmsGalleryImage {
        group(field: location) {
          fieldValue
        }
      }
    }
  `);

  data.allDatoCmsGalleryImage.group.forEach((item) => {
    const path = item.fieldValue;
    actions.createPage({
      path: `/${path}/gallery`,
      component: galleryTemplate,
      context: { location: path },
    });
  });
};
