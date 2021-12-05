module.exports.config = {
    name: "dogfact",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Nguyễn Quang Minh",
    description: "dog fact",
    commandCategory: "info",
    usages: "",
    cooldowns: 0,
};

module.exports.run = async function({ api, event, args, Currencies, utils,Users,Threads }) {
	let axios = require('axios')
	let { threadID, senderID, messageID } = event;
	const res = await axios.get("https://some-random-api.ml/facts/dog");
	console.log(res.data);
	var data = res.data;
	const translate = await axios.get(encodeURI(`https://lawerpr0ject.herokuapp.com/other/translate?text=${data.fact}`));
	var fact = translate.data.trans;
	return api.sendMessage(`===🐶Dog fact🐶===\n\nFact: ${fact}`, threadID, messageID)
}
