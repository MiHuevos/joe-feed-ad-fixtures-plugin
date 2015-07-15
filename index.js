module.exports = function(app) {
  app.use(function(req, res, next) {
    req.remoteUser = 'gal';
    req.adGroups = [
      "magma",
      "hagvarim.gcd"
    ];
    req.userTitle = 'ראש צוות מאגמה - גל שלזינגר';
    next();
  });
};
