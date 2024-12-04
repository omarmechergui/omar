const users = require("../model/users");
const createUser = async (req, res) => {
    try {
        const found = await users.findOne({ email: req.body.email });
        console.log(found);
        if (found) {
            res.status(400).send({ msg: "already exist" })
        }
        else {
            const user = new users(req.body)
            await user.save()
            res.status(200).send({ msg: "user successfully created", user })
        }

    } catch (error) {
        res.status(500).send({ msg: "user is not created", error })
    }
}
const deleteuser = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const user = await users.findByIdAndDelete(id);
        res.status(200).send({ msg:"user deleted successfully"})
    } catch (error) {
        res.status(500).send({ msg: "user is not deleted", error })
    }
}

module.exports ={ createUser ,deleteuser}