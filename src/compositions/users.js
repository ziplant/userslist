import { reactive } from 'vue';

export default function useUsers() {
  const usersStore = reactive({
    users: [],
  });

  const user = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  const valdiateUser = (user) => {
    let isValid = true;

    Object.keys(user).forEach((key) => {
      if (!user[key]) {
        isValid = false;
      }
      if (typeof user[key] == 'object') {
        isValid = valdiateUser(user[key]);
      }
    });

    return isValid;
  };

  const fetchUsers = async (limit = 32) => {
    let users;
    await fetch(`https://www.filltext.com/
			?rows=${limit}
			&id=%7Bnumber%7C1000%7D
			&firstName=%7BfirstName%7D
			&lastName=%7BlastName%7D
			&email=%7Bemail%7D
			&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D
			&address=%7BaddressObject%7D`)
      .then((res) => res.json())
      .then((data) => {
        users = data;
      });
    return users;
  };

  const addUser = (target, user) => {
    target.unshift(user);
  };

  const filterUsers = (target, filterData) => {
    return target.filter((el) => {
      return (
        el.firstName.toLowerCase().includes(filterData.toLowerCase()) ||
        el.lastName.toLowerCase().includes(filterData.toLowerCase()) ||
        el.email.toLowerCase().includes(filterData.toLowerCase()) ||
        el.phone.toLowerCase().includes(filterData.toLowerCase()) ||
        el.address.streetAddress
          .toLowerCase()
          .includes(filterData.toLowerCase()) ||
        el.address.city.toLowerCase().includes(filterData.toLowerCase()) ||
        el.address.state.toLowerCase().includes(filterData.toLowerCase()) ||
        el.address.zip.toLowerCase().includes(filterData.toLowerCase())
      );
    });
  };

  return {
    usersStore,
    fetchUsers,
    user,
    valdiateUser,
    addUser,
    filterUsers,
  };
}
