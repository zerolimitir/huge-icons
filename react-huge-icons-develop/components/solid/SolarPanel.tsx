import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSolarPanel = (
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
            d='m8.754 10 .715-3.25h4.595l.715 3.25H8.754ZM7.22 10H5.516v6c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5A2.75 2.75 0 0 1 4.016 16V9.743a2.002 2.002 0 0 1-.802-2.637l.178-.356h4.542L7.219 10ZM4.142 5.25h4.122L8.979 2H7.003a2 2 0 0 0-1.79 1.106L4.143 5.25ZM10.514 2 9.8 5.25h3.935L13.019 2h-2.505Zm4.04 0 .715 3.25h4.123l-1.073-2.144A2 2 0 0 0 16.53 2h-1.976Zm5.588 4.75h-4.543l.715 3.25h1.703v6c0 .69-.56 1.25-1.25 1.25h-.5a.75.75 0 0 0 0 1.5h.5a2.75 2.75 0 0 0 2.75-2.75V9.743a2.002 2.002 0 0 0 .802-2.637l-.177-.356Zm-6.775 7.7a.75.75 0 0 0-1.2-.9l-3 4a.75.75 0 0 0 .6 1.2h2.5l-2.1 2.8a.75.75 0 1 0 1.2.9l3-4a.75.75 0 0 0-.6-1.2h-2.5l2.1-2.8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSolarPanel);
export default ForwardRef;
