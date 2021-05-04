const { Communication } = require('../models');

const communicationData = [
    {
        comment_content: 'oh yeah! tons of fun',
        user_id: 1,
        blog_id: 1,
    },
    {
        comment_content: 'yeah, that would be great',
        user_id: 2,
        blog_id: 1,
    },
];

const seedCommunication = () => Communication.bulkCreate(communicationData);

module.exports = seedCommunication;