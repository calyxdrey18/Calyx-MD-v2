async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 Calyx-MD*

*📂 GitHub Repository:*
https://github.com/calyxdrey18/Calyx-MD-v2

*📢 Official Channel:*
https://youtube.com/@calyx_drey_mobile_hacks 

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Calyx-MD v2',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 