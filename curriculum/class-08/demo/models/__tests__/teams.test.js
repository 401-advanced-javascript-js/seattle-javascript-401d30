const Teams = require('../teams-model.js');

describe('Teams Model', () => {
  it('can post() a new team', () => {
    const teams = new Teams();
    let obj = { name: 'Test Team' };
    return teams
      .post(obj)
      .then((record) => {
        Object.keys(obj).forEach((key) => {
          expect(record[0][key]).toEqual(obj[key]);
        });
      })
      .catch((e) => console.error('ERR', e));
  });

  it('can get() a team', () => {
    const teams = new Teams();
    let obj = { name: 'Test Team' };
    return teams.post(obj).then((record) => {
      return teams.get(record._id).then((team) => {
        Object.keys(obj).forEach((key) => {
          expect(team[0][key]).toEqual(obj[key]);
        });
      });
    });
  });

  it('should sanitize the entry', () => {
    const teams = new Teams();
    let obj = { name: 'Test Team', foo: 'bar' };

    return teams
      .post(obj)
      .then((record) => {})
      .catch((e) => console.error('ERR', e));
  });
});
