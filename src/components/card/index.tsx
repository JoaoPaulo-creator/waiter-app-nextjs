export default function Card(){
  return (

    <div className="mx-4 my-4 cursor-pointer border border-gray-200">
      <img src="teste.jpg" alt="" className="w-full h-64 object-cover"/>

      <div className="p-4">
        <h2 className="text-lg font-medium">PRODUCT NAME</h2>
        <p className="text-gray-600">product description</p>
        <p className="text-red-600 font-medium">R$ 12,50</p>
      </div>
    </div>
  )
}