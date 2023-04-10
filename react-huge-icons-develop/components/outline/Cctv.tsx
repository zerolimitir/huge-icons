import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCctv = (
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
            d='M7.25 17a.75.75 0 0 0 1.5 0h-1.5ZM8 16h-.75H8Zm8 0h-.75.75Zm-.75 1a.75.75 0 0 0 1.5 0h-1.5ZM12 12v.75V12Zm9.75-3a.75.75 0 0 0-1.5 0h1.5Zm-18 0a.75.75 0 0 0-1.5 0h1.5Zm5 8v-1h-1.5v1h1.5Zm6.5-1v1h1.5v-1h-1.5ZM12 12.75A3.25 3.25 0 0 1 15.25 16h1.5A4.75 4.75 0 0 0 12 11.25v1.5ZM8.75 16A3.25 3.25 0 0 1 12 12.75v-1.5A4.75 4.75 0 0 0 7.25 16h1.5Zm11.5-7A8.25 8.25 0 0 1 12 17.25v1.5A9.75 9.75 0 0 0 21.75 9h-1.5ZM12 17.25A8.25 8.25 0 0 1 3.75 9h-1.5A9.75 9.75 0 0 0 12 18.75v-1.5ZM3.5 6.75h17v-1.5h-17v1.5Zm17 1.5h-17v1.5h17v-1.5Zm-17 0a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 3.5 9.75v-1.5Zm17.75-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-17-1.5A2.25 2.25 0 0 0 1.25 7.5h1.5a.75.75 0 0 1 .75-.75v-1.5Z'
        />
        <circle r={1} fill='currentColor' transform='matrix(1 0 0 -1 12 15)' />
    </svg>
);
const ForwardRef = forwardRef(SvgCctv);
export default ForwardRef;
