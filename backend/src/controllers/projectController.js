// controllers/projectController.js
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const project = new Project(req.body);

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true });
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (project == null) {
      return res.status(404).json({ message: 'Cannot find project' });
    }
    await project.remove();
    res.json({ message: 'Deleted project' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
