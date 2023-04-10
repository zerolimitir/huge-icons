import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationLine = (
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
            d='M6 21.25a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm.75-13.25c0 1.707-1.09 3.914-2.595 5.747-.74.901-1.548 1.67-2.309 2.208-.784.554-1.423.795-1.846.795v1.5c.89 0 1.844-.456 2.712-1.07.892-.63 1.795-1.498 2.602-2.481 1.589-1.935 2.936-4.478 2.936-6.699h-1.5ZM12 18.25c-.408 0-1.04-.25-1.829-.843-.762-.572-1.572-1.39-2.314-2.34-1.51-1.934-2.607-4.242-2.607-5.956h-1.5c0 2.214 1.34 4.85 2.924 6.879.805 1.03 1.706 1.949 2.596 2.617.864.649 1.825 1.143 2.73 1.143v-1.5ZM5.25 9.111c0-3.63 3.229-6.361 6.75-6.361v-1.5c-4.21 0-8.25 3.27-8.25 7.861h1.5ZM12 2.75c3.494 0 6.75 2.705 6.75 6.75h1.5c0-4.955-4.012-8.25-8.25-8.25v1.5ZM14.25 9A2.25 2.25 0 0 1 12 11.25v1.5A3.75 3.75 0 0 0 15.75 9h-1.5ZM12 11.25A2.25 2.25 0 0 1 9.75 9h-1.5A3.75 3.75 0 0 0 12 12.75v-1.5ZM9.75 9A2.25 2.25 0 0 1 12 6.75v-1.5A3.75 3.75 0 0 0 8.25 9h1.5ZM12 6.75A2.25 2.25 0 0 1 14.25 9h1.5A3.75 3.75 0 0 0 12 5.25v1.5Zm-6 16h12v-1.5H6v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationLine);
export default ForwardRef;
