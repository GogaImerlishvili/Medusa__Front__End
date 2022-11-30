import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">თქვენი სავაჭრო კალათა ცარიელია</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
      ჩანთაში არაფერი გაქვს. გამოიყენეთ ქვემოთ მოცემული ბმული ჩვენი პროდუქტების დათვალიერების დასაწყებად.
      </p>
      <div>
        <UnderlineLink href="/store">ყველა პროდუქტი</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
