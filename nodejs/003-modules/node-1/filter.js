function jobFilter(users, job) {
  return users.filter((u) => u.job === job);
}

module.exports = jobFilter;
