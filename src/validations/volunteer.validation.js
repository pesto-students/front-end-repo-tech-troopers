import * as yup from 'yup';

const volunteerSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  timeCommitment: yup.string().required('Time commitment is required'),
  ageGroup: yup.array().of(yup.number().required('Age range is required')),
});

export default volunteerSchema;
