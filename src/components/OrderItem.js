import moment from "moment";
import NumberFormat from "react-number-format";

function OrderItem({ order }) {
    const { id, amount, amountShipping, items, timestamp, images } = order;
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs uppercase">Order Placed</p>
                    <p className="text-xs">{moment.unix(timestamp).format('DD/MM/YYYY')}</p>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase">Total</p>
                    <p className="text-xs">

                        <NumberFormat
                            thousandsGroupStyle="lakh"
                            value={amount}
                            prefix="₹"
                            decimalSeparator="."
                            displayType="text"
                            type="text"
                            thousandSeparator={true}
                            allowNegative={true}
                            decimalScale={2}
                            allowLeadingZeros={false} />
                        {" "}- Next Day Delivery{" "}
                        {amountShipping > 0 && <NumberFormat
                            thousandsGroupStyle="lakh"
                            value={amountShipping}
                            prefix="₹"
                            decimalSeparator="."
                            displayType="text"
                            type="text"
                            thousandSeparator={true}
                            allowNegative={true}
                            decimalScale={2}
                            allowLeadingZeros={false} />}
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length}</p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs font-semibold">ORDER # {id}</p>
            </div>
            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {images.map(image => <img src={image} alt="" className="object-cover lg:w-52 w-28  rounded-sm border" />)}
                </div>
            </div>
        </div>
    )
}
export default OrderItem;