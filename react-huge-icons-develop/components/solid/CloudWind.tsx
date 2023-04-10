import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudWind = (
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
            d='M4.67 14.5a7 7 0 1 1 10.77-8.251A5 5 0 1 1 17 16h-5.251a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 1 0 1.5H4.67ZM17.25 21c0 .414.336.75.75.75h.5a2.25 2.25 0 0 0 0-4.5H12a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 1 0 1.5H18a.75.75 0 0 0-.75.75ZM7 17.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudWind);
export default ForwardRef;
