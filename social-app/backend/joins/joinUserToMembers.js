const joinUserToMembers = [
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user",
      pipeline: [
        {
          $project: {
            firstName: 1,
            lastName: 1,
            image: 1,
            gender: 1,
            email: 1,
            createdAt: 1,
            role: 1,
            birthDate: 1,
          },
        },
      ],
    },
  },
];
module.exports = joinUserToMembers;
