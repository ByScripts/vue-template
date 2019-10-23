module.exports = {
  prompts: {
    projectName: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    fullName: {
      type: 'string',
      message: 'Your full name',
    },
    email: {
      type: 'string',
      message: 'Your email',
    },
  },
};
