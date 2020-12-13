import axios from "axios";

/**
 * addTodo
 *
 * @param {Object} item - IDNumber, completed, todo
 * @param {Object} authentication - Our authentication item...email, iat, exp, username, token, profile.
 *
 *
 * Given our new todo item information and our authentication
 * we make an api post call to our todos route.
 *
 * If we are successful return the token, otherwise just retun the message.
 */
const addTodo = async (item, authentication) => {
  // const response = await axios.post(`/users/${authentication.id}/todos`, item, {

  console.log(authentication.token);
  const response = await axios.post(
    `https://glorified-todo-backend.herokuapp.com/users/${authentication.id}/todos`,
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

/**
 * completeTodo
 *
 * @param {Object} item - IDNumber, completed, todo, index
 * @param {Object} authentication - Our authentication item...email, iat, exp, username, token, profile.
 *
 *
 * Given our new todo item information and our authentication
 * we make an api put call to our todos route.
 *
 * If we are successful return the token, otherwise just return the message.
 */
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

/**
 * removeTodo
 *
 * @param {Object} item - IDNumber and index.
 * @param {Object} authentication - Our authentication item...email, iat, exp, username, token, profile.
 *
 *
 * Given our todo item information and our authentication
 * we make an api delete call to our todos route.
 *
 * If we are successful return the token, otherwise just return the message.
 */
const removeTodo = async (item, authentication) => {
  const response = await axios.delete(
    `/users/${authentication.id}/todos/${item.IDNumber}/${item.index}`,
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
