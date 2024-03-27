/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('Guacamole', {
    title: 'Guac'
  });
};
