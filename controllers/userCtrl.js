var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login(req, res, next) {
    let filteredUser = users.filter( user => {
      return user.name === req.body.name
    });
    if(filteredUser[0] && filteredUser[0].password === req.body.password) {
      req.session.currentUser = filteredUser[0];
      return res.status(200).json({ userFound: true });
    }
    return res.status(200).json({ userFound: false });
  }
};
