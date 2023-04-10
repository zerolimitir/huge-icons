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
        <path fill='currentColor' d='M19 16V9H5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.236 2a2 2 0 0 0-1.789 1.106l-2 4A2 2 0 0 0 5.236 10h2.218l.715-3.25H3.625l.75-1.5h4.124L9.214 2H7.236Zm3.51 0-.715 3.25h3.938L13.254 2h-2.508Zm4.04 0 .715 3.25h4.124l-1.072-2.144A2 2 0 0 0 16.763 2h-1.977Zm5.589 4.75h-4.544l.715 3.25h2.218a2 2 0 0 0 1.789-2.894l-.178-.356ZM15 10l-.701-3.25H9.7L8.986 10H15Zm-1.55 3.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 1 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSolarPanel);
export default ForwardRef;
