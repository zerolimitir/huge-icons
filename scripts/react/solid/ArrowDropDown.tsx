import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.06 6.047c-.518.099-1.125.562-1.352 1.033-.24.498-.287 1.065-.129 1.54.037.11.898 1.629 1.914 3.377 2.069 3.557 2.067 3.554 2.632 3.821.596.282 1.154.282 1.75 0 .565-.267.563-.264 2.632-3.821 1.016-1.748 1.877-3.267 1.914-3.377.158-.475.111-1.042-.129-1.54-.235-.487-.836-.936-1.389-1.037-.303-.055-7.551-.052-7.843.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropDown);
export default ForwardRef;
