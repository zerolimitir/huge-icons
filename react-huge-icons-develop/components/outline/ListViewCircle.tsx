import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgListViewCircle = (
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
            d='M10 5.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 6.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 6.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5ZM4 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 10.75v-1.5ZM2.75 8c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 8h1.5ZM4 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 5.25v1.5ZM5.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 8h-1.5ZM4 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 18.75v-1.5ZM2.75 16c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 16h1.5ZM4 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 13.25v1.5ZM5.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 16h-1.5ZM10 6.75h6v-1.5h-6v1.5Zm0 8h6v-1.5h-6v1.5Zm0-4h12v-1.5H10v1.5Zm0 8h12v-1.5H10v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewCircle);
export default ForwardRef;
