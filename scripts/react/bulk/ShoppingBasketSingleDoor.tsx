import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketSingleDoor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m3.32 7.272a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384m6 0a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketSingleDoor);
export default ForwardRef;
