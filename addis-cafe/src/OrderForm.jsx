import {useState} from "react"

function OrderForm(){
    const [form, setForm] = useState({
        name: "",
        phone: "",
        area: ""
    })
    const isPhoneValid = /^(09|07)\d{8}$/.test(form.phone);
    return(
        <form>
            <h2>Delivery Information</h2>
            <label>
                <input type="text" value={form.name} onChange={(event) => setForm({
                    ...form, name: event.target.value
                })}
                />
            </label>

            <label>
            TeleBirr Phone
            <input type="tel" value={form.phone} onChange={(event) => setForm({
                ...form,
                phone: event.target.value
            })}
            />
            </label>

            <label>
            Area
            <input type="text" value={form.area} onChange={(event) => setForm({
                ...form,
                area: event.target.value
            })}
            />
        </label>
        <button type="submit"  disabled={!isPhoneValid}>
            Order Now

        </button>
        </form>
    )
}
export default  OrderForm;