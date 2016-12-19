const JSFtp = require("jsftp");
var path = require("path");
var fs = require("fs");

const config = {

    username: "maxlab",
    password: "tikE1234", // optional, prompted if none given

    host: "ftp.cluster014.ovh.net",
    port: 21,
    localRoot: "public",

    continueOnError : false,
    remoteRoot: "/test/",
}



var Ftp = new JSFtp({
  host : config.host,
  user : config.username
});

var dossierAEnvoyer = "dist";
var destination = "/www/atelier/";

var listeFichiers = fs.readdirSync(dossierAEnvoyer);

Ftp.auth(config.username, config.password, function (err) {
  console.log("auth ok",err);

  var i = 0 ;

  function envoieFichier() {
    var fichier = path.resolve(dossierAEnvoyer,listeFichiers[i]);
    var nomFichier = path.basename(fichier);
    console.log(fichier);
    Ftp.put(fichier, destination+nomFichier,function(err){
      if(err){
        console.error(err);
      } else {
        console.log("ok");
        i++;

        if(i < listeFichiers.length) {
          setTimeout(envoieFichier,500);
        } else {
          console.log("Done");
          Ftp.raw.quit(function(err, data) {
              if (err) return console.error(err);

              console.log("Bye!");
          });
        }

      }

    });
  }

  envoieFichier();
})