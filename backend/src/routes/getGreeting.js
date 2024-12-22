const GREETING = ["Whale hello there!",
"Welcome to the backend of the MERN stack application!",
"Feel free to look around and see how everything works!",];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
