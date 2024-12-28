import Joi from "joi";

const editImageSchema = {
    email: Joi.string()
            .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
            .rule({ message: 'user "mail" must be a valid mail' })
            .required(),
    imageUpload: Joi.object().allow(null),
};

export default editImageSchema;