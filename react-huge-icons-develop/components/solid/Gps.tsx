import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGps = (
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
            d='M12.75 2a.75.75 0 0 0-1.5 0v2.035a8.002 8.002 0 0 0-7.215 7.216L4 11.25H2a.75.75 0 0 0 0 1.5h2.035a8.002 8.002 0 0 0 7.216 7.215L11.25 20v2a.75.75 0 0 0 1.5 0v-2.035a8.002 8.002 0 0 0 7.215-7.216l.035.001h2a.75.75 0 0 0 0-1.5h-2.035a8.002 8.002 0 0 0-7.216-7.215L12.75 4V2ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGps);
export default ForwardRef;
