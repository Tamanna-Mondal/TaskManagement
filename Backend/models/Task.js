const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);

// mongodb+srv://tamannamondal0111:hcGzf4EsTeFdWAWm@cluster0.ztnnq4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0