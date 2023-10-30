import mongoose from 'mongoose';

const { Schema } = mongoose;

const PaperSchema = new Schema(
    {
        title: { type: String, required: true },
        file_path: { type: String, required: true }
    },
    { timestamps: true }
);

const PaperModel = papersDB.model('PaperModel', PaperSchema);

export default PaperModel;

