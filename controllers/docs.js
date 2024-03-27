/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('Docs', {
    title: 'Docs'
  });
};
