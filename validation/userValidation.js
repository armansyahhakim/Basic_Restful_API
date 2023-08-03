const joi = require("joi");

// Tambah data validation
const tambahDataValidation = (data) => {
    const userSchema = joi.object({
        NIM: joi.number().required().min(7),
        namaLengkap:joi.string().required(),
        namaJurusan: joi.string().required(),
        namaHimpunan: joi.array(),
    });
    return userSchema.validate(data);
};

// update data validation
const updateDataValidation = (data) => {
    const userSchema = joi.object({
        NIM: joi.number().required().min(7),
        namaLengkap:joi.string().required(),
        namaJurusan: joi.string().required(),
        namaHimpunan: joi.array(),
    });
    return userSchema.validate(data);
};
module.exports.tambahDataValidation = tambahDataValidation;
module.exports.updateDataValidation = updateDataValidation;