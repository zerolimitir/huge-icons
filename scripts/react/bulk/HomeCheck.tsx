import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.7 10.316a.872.872 0 0 0-.245.169c-.047.052-.682.991-1.411 2.085-.729 1.095-1.388 2.06-1.464 2.145a1.324 1.324 0 0 1-.385.264c-.22.099-.281.109-.571.093-.233-.013-.374-.044-.504-.11-.108-.056-.483-.391-.94-.842-.418-.413-.804-.773-.858-.801-.126-.065-.478-.065-.604 0-.393.202-.563.674-.376 1.041.028.055.426.471.885.924.643.636.895.858 1.106.975a2.751 2.751 0 0 0 3.287-.437c.207-.203 2.971-4.295 3.085-4.568.15-.36-.046-.79-.434-.952a.665.665 0 0 0-.571.014'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeCheck);
export default ForwardRef;
