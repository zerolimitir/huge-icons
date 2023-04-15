import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSnapchat = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.2 8.535a1.55 1.55 0 0 0-1.073.865c-.149.319-.149.881 0 1.2.28.603.839.92 1.62.92H6V8.48l-.29.003c-.16.002-.389.025-.51.052M18 10v1.52h.253c.781 0 1.34-.317 1.62-.92.088-.187.103-.276.103-.6 0-.324-.015-.413-.103-.6-.28-.603-.839-.92-1.62-.92H18V10'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSnapchat);
export default ForwardRef;
