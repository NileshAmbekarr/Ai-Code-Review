const aiService = require('../services/ai.services');
module.exports.getResponce = async (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt){
        return res.status(400).send({error: 'Prompt is required'});
    }

    const responce = await aiService(prompt);

    res.send(responce);
}

