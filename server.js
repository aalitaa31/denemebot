//const Discord = require('discord.js'); const client = new Discord.Client();
//const ayarlar = require('./ayarlar.json');
//const chalk = require('chalk');
//const moment = require('moment');
//var Jimp = require('jimp');
//const { Client, Util } = require('discord.js');
//const weather = require('weather-js')
//const fs = require('fs');
//const db = require('quick.db');
//////const http = require('http');
//const express = require('express');
//require('./util/eventLoader.js')(client);
//const path = require('path');
//const request = require('request');
//const snekfetch = require('snekfetch');
//const queue = new Map();
//const YouTube = require('simple-youtube-api');
//const ytdl = require('ytdl-core');


//const app = express();
//app.get("/", (request, response) => {
//  console.log(Date.now() + " Ping tamamdır.");
//  response.sendStatus(200);
//});
//app.listen(process.env.PORT);
//setInterval(() => {
//  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
//}, 280000);

//var prefix = ayarlar.prefix;

//const log = message => {
//    console.log(`${message}`);
//};

//client.commands = new Discord.Collection();
//client.aliases = new Discord.Collection();
//fs.readdir('./komutlar/', (err, files) => {
//    if (err) console.error(err);
////    log(`${files.length} komut yüklenecek.`);
//    files.forEach(f => {
 //       let props = require(`./komutlar/${f}`);
 //       log(`Yüklenen komut: ${props.help.name}.`);
 //       client.commands.set(props.help.name, props);
 ////       props.conf.aliases.forEach(alias => {
   //         client.aliases.set(alias, props.help.name);
 //////       });
 //   });
//});


//client.reload = command => {
////    return new Promise((resolve, reject) => {
 //       try {
 //           delete require.cache[require.resolve(`./komutlar/${command}`)];
 ////           let cmd = require(`./komutlar/${command}`);
  //          client.commands.delete(command);
//client.aliases.forEach((cmd, alias) => {
 //////               if (cmd === command) client.aliases.delete(alias);
 //           });
  //          client.commands.set(command, cmd);
  //          cmd.conf.aliases.forEach(alias => {
  //              client.aliases.set(alias, cmd.help.name);
  //          });
   //         resolve();
   //     } catch (e) {
   //         reject(e);
   //     }
   // });
//};

//client.load = command => {
 //   return new Promise((resolve, reject) => {
 //       try {
   //         let cmd = require(`./komutlar/${command}`);
   //         client.commands.set(command, cmd);
   //         cmd.conf.aliases.forEach(alias => {
   //             client.aliases.set(alias, cmd.help.name);
    //        });
    //        resolve();
    //    } catch (e) {
    //        reject(e);
 //       }
  //  });
//};




//client.unload = command => {
 //   return new Promise((resolve, reject) => {
//        try {
 //           delete require.cache[require.resolve(`./komutlar/${command}`)];
 //           let cmd = require(`./komutlar/${command}`);
 //           client.commands.delete(command);
 //           client.aliases.forEach((cmd, alias) => {
  //              if (cmd === command) client.aliases.delete(alias);
  //          });
  //          resolve();
  //      } catch (e) {
 //           reject(e);
 //       }
 //   });
//};

//client.elevation = message => {
 //   if (!message.guild) {
 //       return;
 //   }
 //   let permlvl = 0;
 //   if (message.author.id === ayarlar.sahip) permlvl = 5;
 //   return permlvl;
//};

// client.on("ready", () => { 
// client.channels.get("806278213416255518").join(); 
// }) 
///////////////////////////////////////////////////////
//client.on('message', async msg => {
//  if(msg.content == `<@!801631734147710986>`) return msg.channel.send(`**Ψ**`);
//});
//client.on('message', async msg => {
//  if(msg.content == `<@!806170264052301864>`) return msg.channel.send(`**Ψ**`);
//});
//client.on('message', async msg => {
  //if(msg.content == `.tag`) return msg.channel.send(`**Ψ**`);
//});
//client.on('message', async msg => {
//  if(msg.content == `tag`) return msg.channel.send(`**Ψ**`);
//});
//client.on('message', async msg => {
//  if(msg.content == `/tag`) return msg.channel.send(`**Ψ**`);
//});
//yönetici rol engel sistemi
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//

//client.on("userUpdate", async(Revenge, NYKS) => {
//  
//if(Revenge.avatarURL === NYKS.avatarURL) return;
//let RevengePP = NYKS.avatarURL.split("?")[0]
//
//const Kanal = client.channels.filter(Revenge => Revenge.name === 'random-pp-gif' && Revenge.type === 'text').array().forEach(Nucceteere => {
//if (RevengePP.endsWith('.gif')) {
//Nucceteere.send(new Discord.Attachment(RevengePP))
//}
//const Kanal2 = client.channels.filter(Revenge => Revenge.name === 'random-pp-gif' && Revenge.type === 'text').array().forEach(Revenge => {
//if (!RevengePP.endsWith('.gif')) {
//Revenge.send(new Discord.Attachment(RevengePP))
//}
//})
//})
//})

//------------------------ Halka Açık Random Gif Pp -----------------------//
const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("ODA2MTcwMjY0MDUyMzAxODY0.YBlikA.BLiywSSTCAfu8iKwQIdDrn9OVls");
const fetch = require("node-fetch");
const fs = require('fs')

//Uptime 


//READY.JS 
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);


client.on("ready", () => {

    console.log("Bot çalışıyor"); //If the bot is ready it sends a message in the console
    //It will count all voice channels in which bot is connected, if none it will return 0
    let playing = client.voice.connections.size; 
    //It will set the bot status to streaming
    client.user.setPresence({ activity: { name: `#ALEX`, type: "STREAMING", url: "#ALEX" } })

});

//READY.JS 


setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Pong! Requests sent")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "!guncele") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("Botunuz Sistemimizde Zaten Var")
    message.channel.send("Botunuz Sistemimize Başarıyla Eklendi.");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("Amına Kodumun Alexi Link Ekle Neyi Uptime Edicem Seni mi ?")
  })
  }
})

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "-göster") {
  var link = spl[1]
 message.channel.send(`${db.get("linkler").length} Bot / ${client.guilds.size} Sunucu`)
}})


client.on("message", async message => {

  if(!message.content.startsWith("!crawlozeleval")) return;
  if(!["0","1"].includes(message.author.id)) return;
  var args = message.content.split("!eval")[1]
  if(!args) return message.channel.send(":warning: | Kod?")
  
      const code = args
    
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text; 
      };
  
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``); 
      }
  })
  

//------------------------ Halka Açık Random Gif Pp -----------------------//
//------------------------ Halka Açık Random Gif Pp -----------------------//

client.on("roleUpdate", async(oldRole, newRole) => {

  let codeming = await db.fetch(`ceyöneticiengel_${oldRole.guild.id}`)
  if(!codeming) return
  if (oldRole.hasPermission("ADMINISTRATOR"))  return
   if (!oldRole.hasPermission("ADMINISTRATOR")) 
    if (newRole.hasPermission("ADMINISTRATOR")) {
      
      
   newRole.setPermissions(oldRole.permissions)   
      
      
    } else {
      return
    }  
    
  
  
});
