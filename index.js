const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log('Olá mundo')
})

client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "589169239106256900") return

    let servidor = client.guilds.get("569635704309678147")
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('583841994380673034'),//menina
        cargo2 = servidor.roles.get('583842026945249302'),//meinino
        cargo3 = servidor.roles.get('583842116199907328'),//hetero
        cargo4 = servidor.roles.get('583842069110456331'),//gay/lesbica
        cargo5 = servidor.roles.get('583842271301074994'),//giveaways
        cargo6 = servidor.roles.get('585138015052103691'),//+18
        cargo7 = servidor.roles.get('583841981772464128'),//celular
        cargo9 = servidor.roles.get('583837483532288000'),//registrados
        cargo8 = servidor.roles.get('583841960884961282') //pc

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "571135497435480085"){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        }else if(dados.d.emoji.name === "👨🏻"){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }else if(dados.d.emoji.name === "🎎"){
            if(membro.roles.has(cargo3)) return
            membro.addRole(cargo3)
        }else if(dados.d.emoji.name === "🎉"){
            if(membro.roles.has(cargo4)) return
            membro.addRole(cargo4)
        }
        else if(dados.d.emoji.name === "💰"){
            if(membro.roles.has(cargo5)) return
            membro.addRole(cargo5)
        }
        else if(dados.d.emoji.name === "😉"){
            if(membro.roles.has(cargo6)) return
            membro.addRole(cargo6)
        }
        else if(dados.d.emoji.name === "📱"){
            if(membro.roles.has(cargo7)) return
            membro.addRole(cargo7)
        }
        else if(dados.d.emoji.name === "💻"){
            if(membro.roles.has(cargo8)) return
            membro.addRole(cargo8)
        }else if(dados.d.emoji.name === "🔘"){
            if(membro.roles.has(cargo9)) return
            membro.removeRole(cargo9)
        }
    
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "571135497435480085"){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        }else if(dados.d.emoji.name === "👨🏻"){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }else if(dados.d.emoji.name === "🎎"){
            if(membro.roles.has(cargo3)) return
            membro.removeRole(cargo3)
        }else if(dados.d.emoji.name === "🎉"){
            if(membro.roles.has(cargo4)) return
            membro.removeRole(cargo4)
        }else if(dados.d.emoji.name === "💰"){
            if(membro.roles.has(cargo5)) return
            membro.removeRole(cargo5)
        }else if(dados.d.emoji.name === "😉"){
            if(membro.roles.has(cargo6)) return
            membro.removeRole(cargo6)
        }else if(dados.d.emoji.name === "📱"){
            if(membro.roles.has(cargo7)) return
            membro.removeRole(cargo7)
        }else if(dados.d.emoji.name === "💻"){
            if(membro.roles.has(cargo8)) return
            membro.removeRole(cargo8)
        }
        else if(dados.d.emoji.name === "🔘"){
            if(membro.roles.has(cargo9)) return
            membro.addRole(cargo9)
        }
        
    }

})


client.login(config.token);