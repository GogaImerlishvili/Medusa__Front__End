import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">მიწოდების მისამართები</h1>
        <p className="text-base-regular">
        იხილეთ და განაახლეთ თქვენი მიწოდების მისამართები, შეგიძლიათ დაამატოთ რამდენიც თქვენ
           გსურთ. თქვენი მისამართების შენახვა მათ ხელმისაწვდომს გახდის შეკვეთის დროს.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
