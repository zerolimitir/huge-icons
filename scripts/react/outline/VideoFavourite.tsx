import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgVideoFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.493 1.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.056-.446.056-12.65 0-13.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002M8.56 2.78c0 .011-.666 1.019-1.48 2.24L5.6 7.24H2.752l.016-.93c.016-.924.017-.932.146-1.31.072-.209.203-.504.293-.655A3.826 3.826 0 0 1 4.214 3.29c.31-.206.862-.43 1.194-.485.222-.037 3.152-.06 3.152-.025m8 0c0 .011-.666 1.019-1.48 2.24L13.6 7.24h-3.08c-1.694 0-3.08-.009-3.08-.02 0-.011.666-1.019 1.48-2.24l1.48-2.22h3.08c1.694 0 3.08.009 3.08.02m2.448.141c.519.174.877.397 1.276.795.399.4.619.752.803 1.29.127.371.129.382.145 1.304l.016.93h-2.904c-1.597 0-2.904-.009-2.904-.02 0-.011.66-1.01 1.467-2.22 1.688-2.533 1.45-2.298 2.101-2.079m2.223 10.769-.011 4.93-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38-.011-4.93-.011-4.93h18.484l-.011 4.93m-11.184-2.408c-.334.045-.484.095-.863.291-.58.298-1.055.877-1.287 1.567a3.092 3.092 0 0 0-.062 1.58c.097.385.255.736.45 1.006.287.394 2.253 2.479 2.484 2.634.774.516 1.688.516 2.462 0 .231-.155 2.197-2.24 2.484-2.634.195-.27.353-.621.45-1.006a3.092 3.092 0 0 0-.062-1.58c-.302-.899-1.011-1.584-1.868-1.805-.31-.08-.896-.087-1.195-.016a2.992 2.992 0 0 0-.85.367l-.19.122-.19-.122a2.622 2.622 0 0 0-1.763-.404m.773 1.574c.115.055.31.209.46.364.54.559.9.559 1.44 0 .42-.434.794-.553 1.253-.396.669.228.984 1.238.595 1.907-.15.256-2.113 2.373-2.272 2.448a.778.778 0 0 1-.592 0c-.159-.075-2.122-2.192-2.272-2.448-.302-.519-.198-1.255.236-1.677a1.03 1.03 0 0 1 1.152-.198'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVideoFavourite);
export default ForwardRef;