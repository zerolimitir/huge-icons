import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProtractor = (
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
            d='M11 20v-.75a.75.75 0 0 0-.75.75H11Zm0-16h-.75c0 .414.336.75.75.75V4Zm0 11h-.75v.75H11V15Zm0-6v-.75h-.75V9H11ZM5 5.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 2.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm0-16h2v-1.5H7v1.5Zm2 18.5H7v1.5h2v-1.5ZM5.75 20V4h-1.5v16h1.5ZM7 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 22.75v-1.5ZM10.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 11.75 20h-1.5ZM9 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 1.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 4.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM18.25 12A7.25 7.25 0 0 1 11 19.25v1.5A8.75 8.75 0 0 0 19.75 12h-1.5ZM11 4.75A7.25 7.25 0 0 1 18.25 12h1.5A8.75 8.75 0 0 0 11 3.25v1.5ZM13.25 12A2.25 2.25 0 0 1 11 14.25v1.5A3.75 3.75 0 0 0 14.75 12h-1.5ZM11 9.75A2.25 2.25 0 0 1 13.25 12h1.5A3.75 3.75 0 0 0 11 8.25v1.5ZM10.25 9v6h1.5V9h-1.5ZM5 6.75h2v-1.5H5v1.5Zm0 4h2v-1.5H5v1.5Zm0 4h2v-1.5H5v1.5Zm0 4h2v-1.5H5v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProtractor);
export default ForwardRef;
