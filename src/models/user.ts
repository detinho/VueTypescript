interface Geo {
  lat: number,
  lng: number
}

interface Address {
  geo: Geo
}

class User {
  id: number
  name: string
  address: Address
}

export default User
