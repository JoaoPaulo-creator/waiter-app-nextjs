import { OrderModal } from "../order-modal/OrderModa"


export function OrdersBoard(){
  return (
    <>
      {/* Board component */}
      <div
        className='
          p-4
          border
          border-solid
          border-black
          accent-emerald-500/25
          flex flex-col flex-1
          items-center'
      >


        {/* ORDER MODAL */}

        <OrderModal />

        <header className="p-2 text-sm flex items-center gap-2">
          <span>ICON</span>
          <strong>title</strong>
          <span>2</span>
        </header>

        {/* ORDERS CONTAINER */}
        <div className="
          flex
          flex-col
          w-full
          mt-6
        "
        >
          <button type="button" key={1}
            className='
              bg-white
              border
              border-solid
              border-black
              h-32
              rounded-lg
              flex
              flex-col
              justify-center
              items-center
              gap-1
              m-6
            '
          >
            <strong className='font-medium'>Mesa 2</strong>
            <span className='text-sm'>2 itens</span>
          </button>

        </div>

      </div>
    </>
  )
}