import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword }) => {
      const ok = await client.user
        .findMany({
          where: {
            username: {
              startsWith: keyword.toLowerCase(),
            },
          },
        })
        .searchUsers({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
      return {
        ok: true,
        searchUsers,
      };
    },
  },
};
