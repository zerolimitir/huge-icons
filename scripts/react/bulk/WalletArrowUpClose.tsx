import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowUpClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12m17.512 2.317a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408v2.268c0 1.505.015 2.336.044 2.473.163.758 1.269.758 1.432 0 .029-.137.044-.968.044-2.47v-2.265l.433.423c.487.475.601.532.935.468a.723.723 0 0 0 .617-.647c.041-.303-.061-.454-.871-1.278-.404-.411-.824-.804-.934-.872-.435-.27-.979-.347-1.428-.204'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowUpClose);
export default ForwardRef;
