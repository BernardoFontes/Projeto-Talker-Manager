const verificaNome = (req, res, next) => {
    const nome = req.body.name;
    if (!nome || nome === '') {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    } if (nome.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
}
next();
};

module.exports = verificaNome;