import React, { useState } from "react";

import ConfirmOrderModal from "../components/modalEdit/EditShow";

function Cart() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button
                className="rounded-[10px] px-[45px] py-[5px] bg-org-default text-xl font-normal text-black"
                onClick={() => setShowModal(true)}
            >
                สั่ง
            </button>
            <ConfirmOrderModal isOpen={showModal} toggle={() => setShowModal(!showModal)}></ConfirmOrderModal>
        </div>
    )
}
export default Cart;