import axios from "axios";

/**
 * addTodo
 *
 * @param {Object} item - IDNumber, completed, todo
 * @param {Object} authentication - Our authentication item...email, iat, exp, username, token, profile.
 *
 *
 */
const addTodo = async (item, authentication) => {
  const response = await axios.post(`/users/${authentication.id}/todos`, item, {
    headers: { Authorization: `Bearer ${authentication.token}` },
  });

  if (response.status === 200) {
    return {
      status: 200,
      token: response.data,
    };
  } else {
    return {
      status: 500,
      data: "Something went wrong.",
    };
  }
};

const completeTodo = async (item, authentication) => {
  const response = await axios.put(
    `/users/${authentication.id}/todos/${item.IDNumber}`,
    item,
    {
      headers: { Authorization: `Bearer ${authentication.token}` },
    }
  );

  if (response.status === 200) {
    return {
      status: 200,
      token: response.data,
    };
  } else {
    return {
      status: 500,
      data: "Something went wrong.",
    };
  }
};

const removeTodo = async (index, authentication) => {
  const response = await axios.delete(
    `/users/${authentication.id}/todos/${index}`,
    {
      headers: { Authorization: `Bearer ${authentication.token}` },
    }
  );

  if (response.status === 200) {
    return {
      status: 200,
      token: response.data,
    };
  } else {
    return {
      status: 500,
      data: "Something went wrong",
    };
  }
};

export default {
  addTodo,
  completeTodo,
  removeTodo,
};
