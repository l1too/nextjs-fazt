import Users from "@/components/Users"

const fetchcusers = async()=> {
   const res =  await fetch("https://reqres.in/api/users")
   const data = await res.json()
   return data.data
}

async function IndexPage() {
  const users = await fetchcusers()
  return <Users users={users}/>

}

export default IndexPage