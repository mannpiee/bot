cmd.on('eval',['>','=>'],['owner'],async(msg,res) => {
let parse = res.command.includes('=>') ? res.text.replace('=>','return ') : res.text.replace('>','')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e });
return client.reply(msg,f.util.format(evaluate));
} catch(e){
return res.client.reply(msg,f.util.format(e));
}
},{owner:true,usedPrefix:false});

cmd.on('exec',['$'],['owner'],async(msg,res) => {
try{
f.exec(`${res.query}`,(err,out) => {
if (err) return client.reply(msg,f.util.format(err));
client.reply(msg,f.util.format(out));
});
} catch(e){
 return res.client.reply(msg,f.util.format(e));
}
},{owner:true,usedPrefix:false})
