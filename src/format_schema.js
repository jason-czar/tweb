let json = require('./schema');

let top = {};
/* ['MTProto', 'API'].forEach(key => {
  let schema = json[key];
  let out = {constructors: {}, methods: {}};

  ['constructors', 'methods'].forEach(key => {
    schema[key].forEach(smth => {
      let id = smth.id;

      if(id < 0) {
        id = +id + 4294967296;
      }

      out[key][id] = smth;
      delete smth.id;
    });
  });

  top[key] = out;

  //console.log(out);
  //process.exit(0);
}); */

['MTProto', 'API'].forEach(key => {
  let schema = json[key];

  ['constructors', 'methods'].forEach(key => {
    schema[key].forEach(smth => {
      if(+smth.id < 0) {
        smth.id = +smth.id + 4294967296;
      }
    });
  });

  //console.log(out);
  //process.exit(0);
});
top = json;

/* ['API'].forEach(key => {
  let schema = json[key];
  let out = {constructors: {}, methods: {}};

  ['constructors', 'methods'].forEach(key => {
    schema[key].forEach(smth => {
      let id = smth.id;

      if(id < 0) {
        id = id + 4294967296;
      }

      out[key][id] = smth;
      delete smth.id;
    });
  });

  top[key] = out;

  //console.log(out);
  //process.exit(0);
}); */

//console.log(out);

require('fs').writeFileSync('./schema_pretty.json', JSON.stringify(top/* , null, '\t' */));