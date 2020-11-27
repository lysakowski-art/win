import { UserDataList,LoadingSpinner, UserDataItem,UserDataSubList } from "../Elements";

const UserData = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;
    console.log(user,address, company)
  return user ? (
    <UserDataList>
    <UserDataItem>name: {name}</UserDataItem>
    <UserDataItem>user-name: {username}</UserDataItem>
    <UserDataItem>email-adress: {email}</UserDataItem>
    <UserDataItem>phone-number: {phone}</UserDataItem>
    <UserDataItem>website: {website}</UserDataItem>
    <UserDataItem>adress: {address.suite} {address.street}, {address.city}, {address.zipcode}</UserDataItem>
    <UserDataItem><strong>Company</strong></UserDataItem>
    <UserDataItem>{company.name}</UserDataItem>
    <UserDataItem>{company.catchPhrase}</UserDataItem>
    <UserDataItem>{company.bs}</UserDataItem>
  </UserDataList>
  ):(
      <LoadingSpinner/>
  )
};

export default UserData;
