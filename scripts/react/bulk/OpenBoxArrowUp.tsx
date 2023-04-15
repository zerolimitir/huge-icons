import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.74 1.281a1.673 1.673 0 0 0-.71.274c-.251.175-1.698 1.647-1.747 1.778-.231.608.388 1.216.985.966.08-.033.331-.243.558-.467l.414-.407.001 1.857c.001 1.721.006 1.87.075 2.018a.743.743 0 0 0 1.368 0c.069-.148.074-.297.075-2.017l.001-1.858.394.387c.216.213.459.414.539.447a.74.74 0 0 0 .801-.132.7.7 0 0 0 .206-.755c-.05-.169-.153-.287-.869-.996-.446-.441-.874-.84-.951-.885a1.898 1.898 0 0 0-1.14-.21M3.002 7.498l-.999 1.497 1.688.858C5.97 11.011 9.953 13 9.99 12.999c.016-.001.471-.666 1.01-1.479.539-.813.989-1.478 1-1.478.011 0 .461.665 1 1.478.539.813.994 1.478 1.01 1.479.037.001 4.02-1.988 6.299-3.146l1.688-.858-.999-1.497L20 6l-4 2-4 2-4-2-4-2-.998 1.498'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxArrowUp);
export default ForwardRef;
