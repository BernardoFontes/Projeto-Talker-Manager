const fs = require('fs');

module.exports = async (req, res) => {
    const { id } = req.params;
    const talkers = JSON.parse(fs.readFileSync('talker.json'));
    const index = Number(id) - 1;
    talkers.splice(index, 1);
    fs.writeFileSync('talker.json', JSON.stringify(talkers));
    res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

// Referências dessa função tiradas do repositorio da aluna Ana Karine, turma 8.