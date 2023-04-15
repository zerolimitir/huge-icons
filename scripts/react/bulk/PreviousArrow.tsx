import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPreviousArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.7 6.507c-.333.075-.844.353-3.652 1.987-2.004 1.166-3.251 1.916-3.385 2.035-.436.386-.632.833-.638 1.451-.007.725.272 1.266.854 1.658.5.337 6.315 3.698 6.519 3.768 1.148.395 2.433-.388 2.601-1.586.052-.366.052-7.218 0-7.615-.103-.799-.722-1.475-1.523-1.663-.243-.058-.602-.074-.776-.035'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPreviousArrow);
export default ForwardRef;
