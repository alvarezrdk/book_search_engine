const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const authorSchema = new Schema({
  authorsList: [
    {
      type: String,
    },
  ],
});

module.exports = authorSchema;
