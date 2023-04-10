import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGpsCircle = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v2.035a8.002 8.002 0 0 1 7.215 7.216L20 11.25h2a.75.75 0 0 1 0 1.5h-2.035a8.002 8.002 0 0 1-7.216 7.215l.001.035v2a.75.75 0 0 1-1.5 0v-2.035a8.002 8.002 0 0 1-7.215-7.216L4 12.75H2a.75.75 0 0 1 0-1.5h2.035a8.002 8.002 0 0 1 7.216-7.215L11.25 4V2a.75.75 0 0 1 .75-.75ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsCircle);
export default ForwardRef;
