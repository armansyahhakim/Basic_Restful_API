const { response } = require("express");
const userModel = require("../models/userModel");
const { tambahDataValidation, updateDataValidation } = require("../validation/userValidation")

// tambah data
const tambahData = async (req, res) => {

    const newUser = new userModel(req.body);

    // validation
    const {error} = await tambahDataValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check nim
    const checkNIM = await userModel.findOne({NIM: req.body.NIM});
    if(checkNIM) {
        return res.status(400).json({
            message: `NIM ${checkNIM.NIM} sudah terdaftar`,
        })
    }

    try {
        const response = await newUser.save();
        const data = response;
        res.status(201).json({
            message: "Data ini berhasil dibuat",
            data,
        })
    } catch (error) {
        console.log(error)
    }
};

// get data

const getData = async (req, res) => {
    const checkData = await userModel.find();
    if(checkData.length == 0) {
        return res.status(400).json({
            message: "Tidak ada data",
        });
    }
    try {
        const response = await userModel.find();
        const data = response;
        res.status(200).json({
            message: "Berikut ini adalah datanya",
            data,
        })
    } catch (error) {
        console.log(error)
    }
}

// get data by id

const getDataByID = async (req, res) => {
    const getReqId = req.params.id;

    try {
        const response = await userModel.findById({
            _id: getReqId
        });
        if(!response){
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar"
            });
        }
        const data = response;
        res.status(200).json({
            message: `Berikut ini adalah id ${response._id}`,
            data,
        })
    } catch (error) {
        console.log(error)
    }
}

// update data
const updateData = async (req, res) => {
    const getReqId = req.params.id;
    // Validation
    const {error} = await updateDataValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    try{
        const response = await userModel.findByIdAndUpdate({_id: getReqId}, {$set: req.body});
        if(!response){
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar",
            });
        }
        const dataSebelumnya = response;
        const dataSesudahnya = await userModel.findById({_id:getReqId});
        res.status(201).json({
            message: `Berhasil update id ${response._id}`,
            dataSebelumnya,
            dataSesudahnya,
        })
    } catch (error) {
        console.log(error)
    }
}

// delete data
const deleteData = async (req, res) => {
    const getReqId = req.params.id;
    try {
        const response = await userModel.findByIdAndRemove({_id:getReqId});
        if(!response){
            return res.status(400).json({
                message: "Data dengan id tersebut tidak terdaftar",
            });
        }
        const data = response;
        res.status(200).json({
            message: `Data dengan id${response._id} berhasil dihapus`,
            data,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {tambahData, getData, getDataByID, updateData, deleteData};