const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Você precisa ser um administrador para usar este comando ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('ORANGE');
        setupEmbed.setDescription('Seja bem-vindo a nossa Central de Atendimento, escolha abaixo uma categoria de acordo com o problema que você tenha, assim você ira criar um chat aonde nossa equipe poderá ajuda-lo\n\nSelecione a categoria que encaixa no seu problema!\n\nHorários de atendimento:\nSegunda a Sexta das 14:30h ás 21:00h\nPrazo médio para atendimento: 30 Minutos');
        /* setupEmbed.setDescription('*Um novo canal será criado para você conversar com os membros da equipe!*'); */

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Abra um ticket');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};