import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxDone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.815 1.287c-.207.045-.335.161-.923.835-1.656 1.901-2.39 2.718-2.458 2.74-.102.032-.133.011-1.181-.827-.491-.392-.943-.727-1.003-.743-.52-.14-.993.209-.988.731a.739.739 0 0 0 .081.34c.122.212 2.088 1.772 2.371 1.882.495.19 1.155.135 1.575-.132.269-.171.56-.488 2.434-2.653.967-1.118.949-1.094.992-1.296.119-.553-.338-.998-.9-.877M3.002 7.498l-.999 1.497 1.688.858C5.97 11.011 9.953 13 9.99 12.999c.016-.001.471-.666 1.01-1.479.539-.813.989-1.478 1-1.478.011 0 .461.665 1 1.478.539.813.994 1.478 1.01 1.479.037.001 4.02-1.988 6.299-3.146l1.688-.858-.999-1.497L20 6l-4 2-4 2-4-2-4-2-.998 1.498'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxDone);
export default ForwardRef;
