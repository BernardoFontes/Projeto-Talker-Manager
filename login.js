const crypto = require('crypto');
const verificaEmail = require('./verificacao');
const verificaSenha = require('./verificaSenha');

module.exports = (req, res) => {
    const { email, password } = req.body;
    const cryptoToken = crypto.randomBytes(8).toString('hex');
    const verificacaoEmail = verificaEmail.verificaEmail(email);
    const verificacaoPassword = verificaSenha.verificaSenha(password);

    if (typeof verificacaoEmail === 'object') {
        return res.status(400).json(verificacaoEmail);
    }
    if (typeof verificacaoPassword === 'object') {
        return res.status(400).json(verificacaoPassword);
    }
    return res.status(200).json({ token: cryptoToken });
};