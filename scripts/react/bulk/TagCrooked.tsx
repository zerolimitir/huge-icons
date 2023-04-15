import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTagCrooked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.351 7.222a2.084 2.084 0 0 0-1.389 1.213c-.519 1.316.464 2.748 1.878 2.738.589-.004 1.044-.211 1.465-.666.564-.608.685-1.442.321-2.208a2.005 2.005 0 0 0-2.275-1.077'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTagCrooked);
export default ForwardRef;
