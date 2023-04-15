import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.68 6.507a2.703 2.703 0 0 0-.78.312 2.075 2.075 0 0 0-.856 1.253c-.062.297-.062 7.559 0 7.856.077.369.266.709.552.995.54.538 1.325.73 2.024.495.11-.037 1.629-.897 3.377-1.912 3.558-2.068 3.554-2.065 3.821-2.631.28-.591.282-1.157.007-1.735a1.873 1.873 0 0 0-.713-.81c-.338-.217-5.955-3.49-6.221-3.625a2.022 2.022 0 0 0-1.211-.198'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropRight);
export default ForwardRef;
