import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.23 18.59a.568.568 0 0 0-.174.205c-.085.177-.031.351.236.76a3.158 3.158 0 0 0 2.126 1.384c.444.077.72.077 1.163 0a3.187 3.187 0 0 0 2.124-1.38c.27-.414.324-.586.239-.765-.136-.287.007-.274-2.95-.273-2.428.001-2.663.007-2.764.069'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
