import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSticker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 2.283a4.641 4.641 0 0 0-1.593.476c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.444-.056 10.652 0 11.096.141 1.124.56 1.971 1.38 2.791.679.679 1.301 1.042 2.165 1.263.589.15.934.163 3.934.15l2.9-.012.32-.109c.684-.233.447-.015 5.542-5.109 5.096-5.096 4.878-4.86 5.108-5.542l.108-.32.014-1.9c.008-1.172-.002-2.038-.028-2.261-.125-1.063-.538-1.959-1.257-2.722-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.477-.047-12.482-.045-12.963.002m13.501 1.628c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374.012 1.93.013 1.93-1.633.001c-.897 0-1.851.018-2.12.039-3.287.255-5.874 2.786-6.21 6.074-.023.228-.042 1.196-.042 2.151v1.737l-2.93-.011-2.93-.011-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38V6.38L2.912 6c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 4.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131M16.48 15.46l-3.7 3.7-.011-1.25c-.007-.732.006-1.391.031-1.59a5.095 5.095 0 0 1 .477-1.58c.544-1.122 1.311-1.895 2.423-2.44.948-.465 1.331-.531 3.14-.536l1.34-.004-3.7 3.7'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSticker);
export default ForwardRef;
