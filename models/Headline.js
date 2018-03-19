const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const HeadlineSchema = new Schema({

   title: {
      type: String,
      required: true
   },
   link: {
      type: String,
      required: true
   },
   note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
   }
});

let Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;