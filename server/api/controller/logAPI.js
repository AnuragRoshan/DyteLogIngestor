const logSchema = require("../model/logmodel");

exports.insertLog = async (req, res) => {
    try {
        const logArray = req.body;
        const result = await logSchema.insertMany(logArray);

        return res.status(200).json({ success: true, insertedCount: result.length });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal Server Error' });
    }
};
