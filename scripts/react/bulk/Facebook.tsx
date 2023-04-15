import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFacebook = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path fill='currentColor' fillRule='evenodd' d='M6 12v2h12v-4H6v2' />
    </svg>
);
const ForwardRef = forwardRef(SvgFacebook);
export default ForwardRef;
