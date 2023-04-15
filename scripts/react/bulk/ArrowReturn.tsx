import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowReturn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.74 4.298a.745.745 0 0 0-.363 1.102c.058.089.689.583 1.735 1.36.904.671 1.644 1.229 1.644 1.24 0 .011-.74.569-1.644 1.24-1.046.777-1.677 1.271-1.735 1.36-.35.535.115 1.246.745 1.14.201-.034.177-.017 2.477-1.75 1.4-1.054 2.003-1.531 2.06-1.63.108-.188.108-.532 0-.72-.057-.099-.681-.592-2.14-1.691a106.65 106.65 0 0 0-2.168-1.611.826.826 0 0 0-.611-.04'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowReturn);
export default ForwardRef;
