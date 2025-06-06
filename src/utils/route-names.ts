const RouteNames = {
  Home: '/',
  Auth: {
    Login: '/login',
    Signup: '/signup',
  },
  Contact: {
    List: '/contacts',
    Details: '/contacts/:id',
    Edit: '/contacts/:id/edit',
    Add: '/contacts/add',
  },
  Unauthorized: '/unauthorized',
}

export default RouteNames;
