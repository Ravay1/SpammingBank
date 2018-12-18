const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-ÑÇÊÈ'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-ãÈáÛ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ÑíÈ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ÑÇÊÈ'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-ãÈáÛ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ÑíÈ'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // áÇ ÊÛíÑ ÔÆ ÚÔÇä ãÇ ÊÎÑÈ ÇáÏäíÇ
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**ESP **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // áÇ ÊÛíÑ ÔÆ ÚÔÇä ãÇ ÊÎÑÈ ÇáÏäíÇ
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**ESP **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`áíÓ áÏíß ÕáÇÍíÇÊ`**');
   message.channel.sendMessage(args.join("519498723558948875"))
   message.delete()
  }
 });









client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`áíÓ áÏíß ÕáÇÍíÇÊ`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




client.login(process.env.TOKEN2);// áÇ ÊÛíÑ ÝíåÇ ÔíÁ
client2.login(process.env.TOKEN22);// áÇ ÊÛíÑ ÝíåÇ ÔíÁ
