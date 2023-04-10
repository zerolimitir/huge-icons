import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonFlash = (
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
            d='M21.75 8.564a6.485 6.485 0 0 0-5.51-2.02 8.535 8.535 0 0 0-2.957-2.888 5 5 0 0 1 8.468 4.907ZM8.684 17.18l3.433-4.12a.5.5 0 0 1 .884.321V15.5a.5.5 0 0 0 .5.5h1.432a.5.5 0 0 1 .385.82l-3.433 4.12a.5.5 0 0 1-.884-.321V18.5a.5.5 0 0 0-.5-.5H9.068a.5.5 0 0 1-.385-.82ZM2 11c0 3.2 2.147 5.898 5.079 6.733-.063-.51.07-1.054.452-1.514l3.433-4.118c1.197-1.438 3.536-.59 3.536 1.28V14.5h.432c1.696 0 2.623 1.978 1.537 3.28l-.183.22H17a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 11Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonFlash);
export default ForwardRef;
