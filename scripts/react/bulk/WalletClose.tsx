import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletClose);
export default ForwardRef;
