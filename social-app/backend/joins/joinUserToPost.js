const joinUserToPost = [
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
          },
        },
      ],
    },
  },
  {
    $unwind: { path: "$user", preserveNullAndEmptyArrays: true },
  },
];
module.exports = joinUserToPost;
