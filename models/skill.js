const skills = [
    {skill: 'Feed Dogs', master: false},
    {skill: 'Learn Express', master: false},
    {skill: 'Understand Lecture', master: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
      return skills[id]
  }

  function create(skill) {
      skills.push(skill);
  }

  function deleteOne(id) {
      skills.splice(id,1)
  }