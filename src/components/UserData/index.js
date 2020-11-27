import { UserDataList,LoadingSpinner, UserDataItem } from "../Elements";
const UserData = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;
  return user.company && user.address ? (
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
