import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRecord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.26 5.044a7.042 7.042 0 0 0-4.968 2.908 8.172 8.172 0 0 0-.852 1.609 7 7 0 0 0 3.435 8.697 6.966 6.966 0 0 0 6.25 0c3.459-1.731 4.862-5.933 3.133-9.383a7.002 7.002 0 0 0-6.998-3.831'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRecord);
export default ForwardRef;
