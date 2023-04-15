import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNightMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.18 3.118c-2.209.756-4.085 2.388-5.162 4.489-1.315 2.566-1.353 5.618-.102 8.18a8.924 8.924 0 0 0 1.762 2.491 8.632 8.632 0 0 0 2.443 1.757 8.88 8.88 0 0 0 4.399.953 9.197 9.197 0 0 0 8.421-6.34c.047-.155.046-.169-.014-.152a9.183 9.183 0 0 1-6.687-.593c-3.321-1.652-5.338-5.159-5.079-8.832.043-.609.141-1.23.277-1.749.043-.165.075-.302.07-.306a3.293 3.293 0 0 0-.328.102'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNightMode);
export default ForwardRef;
