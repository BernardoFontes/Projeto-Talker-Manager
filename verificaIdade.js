const verificaIdade = (req, res, next) => {
    const idade = req.body.age;
    if (!idade || idade === '') {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    } if (Number(idade) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
}
next();
};

module.exports = verificaIdade;