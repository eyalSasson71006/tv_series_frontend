import Joi from 'joi';
import React, { useState } from 'react';
import { handleUpload } from '../users/services/usersApiService';

export default function useForm(initialState, schema, handleSubmit) {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    function validateProperty(name, value) {
        const schemaObj = Joi.object({ [name]: schema[name] });
        const { error } = schemaObj.validate({ [name]: value });
        return error ? error.details[0].message : null;
    }

    function handleChange(e) {
        const { name, value } = e.target;

        if (name === 'imageUpload') {
            setData(prev => ({ ...prev, [name]: e.target.files[0] }));
            return;
        }

        setData({ ...data, [name]: value });

        const errorMessage = validateProperty(name, value);

        if (errorMessage) {
            setErrors(prev => ({ ...prev, [name]: errorMessage }));
        } else {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
        setData(prev => ({ ...prev, [name]: value }));
    }

    function validateForm() {
        let joiSchema = Joi.object(schema);
        let { error } = joiSchema.validate(data);
        return Boolean(!error);
    }

    function onSubmit() {
        handleSubmit(data);
        if (data.imageUpload) {
            handleUpload(data.imageUpload);
        }
    }


    return { data, errors, setData, handleChange, validateForm, onSubmit };
}
