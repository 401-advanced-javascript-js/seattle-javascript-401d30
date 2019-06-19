'use strict';

// version 4 uses random id
// uuid() will return djflkajfoihoioi23h423r9u
const uuid = require('uuid/v4');

const schema = {
  _id: {required:true},
  name: {required:true},
};

class Team {

  constructor() {
    this.database = [];
  }

  /**
   * get a team with passed in id
   * 
   * @param {} id 
   */
  get(id) {
    if (!id) return Promise.resolve(this.database);
    // TODO: optimize so return once id is found, don't go through entire array
    let response = id ? this.database.filter( (record) => record._id === id ) : this.database;
    return Promise.resolve(response);
  }

  /**
   * 
   * 
   * @param {*} entry 
   */
  post(entry) {
    entry._id = uuid(); // id for entry, random hash
    let record = this.sanitize(entry); // check if input valid
    if ( record.id ) { this.database.push(record); } // if valid add to database
    return Promise.resolve(record); // if record is a promise, return once it's complete
  }

  put(id, entry) {
    let record = this.sanitize(entry);
    if( record.id ) { this.database = this.database.map((item) => (item.id === id) ? record : item  ); }
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id );
    return Promise.resolve();
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach(property => {
      // mongo talks about "columns" as fields
      // property === field
      if (schema[property].required) {
        // null and 0 are valid
        if (entry[property] !== undefined) {
          record[property] = entry[property];
        } else {
          valid = false;
        }
      } else {
        record[property] = entry[property];
      }
    });
    return valid ? record : null;
  }
}

module.exports = Team;