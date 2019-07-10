
// cuenta cuantos usuarios tienen de tipo student
User.countDocuments({ type: 'student' })
  .then(count => { console.log(`There are ${count} students`) })
  .catch(err => { console.log(err) });
