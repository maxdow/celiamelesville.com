const JSFtp = require("jsftp");
const path = require("path");
const fs = require("fs");

const config = {

    user: "maxlab",
    password: "tikE1234", // optional, prompted if none given

    host: "ftp.cluster014.ovh.net",
    port: 21,
    localRoot: "dist",
    debug : console.log,
    continueOnError : false,
    remoteRoot: "/test/",
}


/*
const Ftp = new JSFtp({
  host : config.host,
  user : config.username
});
*/
const dossierAEnvoyer = "dist";
const destination = "/celia/";

  var Client = require('ftp');

  var c = new Client();


  // connect to localhost:21 as anonymous


const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {

    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));

  });
return filelist;
}

const listeFichiers = walkSync(dossierAEnvoyer);


  c.on('ready', function() {
    console.log("ready ✔ ")
    envoieFichier(0,listeFichiers);
  });

c.connect(config);


/*
Ftp.auth(config.username, config.password, function (err) {
  if(err) exit;

  console.log("auth ✔ ok");


  envoieFichier(0,listeFichiers);
})*/



function envoieFichier(nFichier,liste) {
  const fichier = path.resolve(liste[nFichier]);
  const nomFichier = path.basename(fichier);
  console.log("Sending.... ",fichier," ....\n");

  c.put(fichier, destination+nomFichier,function(err){
    if(err){
      console.error("Error while sending ",nomFichier,"\n -> ",err);
        c.end()
    } else {
      console.log("✔ ok");
      nFichier++;

      if(nFichier < liste.length) {
        setTimeout(() => envoieFichier(nFichier,liste),500);
      } else {
        console.log("Done");
        c.end()
      }

    }

  });
}