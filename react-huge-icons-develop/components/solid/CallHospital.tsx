import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCallHospital = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M22 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-7-2.75a.75.75 0 0 1 .75.75v1.25h2.5V5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.75h-2.5V9a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm3 14.66v1.312c0 .982-.796 1.778-1.778 1.778C8.368 22 2 15.633 2 7.778 2 6.796 2.796 6 3.778 6H5.09a2 2 0 0 1 1.857 1.257l.592 1.479a2 2 0 0 1-.963 2.531l-.132.066s.445 2.223 2.223 4c1.777 1.778 4 2.223 4 2.223l.066-.132a2 2 0 0 1 2.531-.963l1.479.592A2 2 0 0 1 18 18.91Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCallHospital);
export default ForwardRef;
