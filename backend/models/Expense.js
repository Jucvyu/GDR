import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date: String,
    category: String,
    desc: String,
    amount: Number,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Expense", expenseSchema);