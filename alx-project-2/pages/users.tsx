import UserCard from "@/components/common/UserCard";
import { UserProps} from "@/interfaces";

const Users= ({ users }: UserProps) => {

  return (
    <div className="flex flex-col h-screen">
      <main className="p-4">
        <h1 className=" text-2xl font-semibold text-center mb-4">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
            users?.map(({ name, username, email, phone, website, address, company, id }: UserProps) => (
              <UserCard id={id} name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} key={id} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users
        }
    }
}

export default Users;