import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrash = (
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
            d='M5.75 8a.75.75 0 0 0-1.5 0h1.5Zm14 0a.75.75 0 0 0-1.5 0h1.5Zm-5 3a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm-2.5-6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5ZM21 5.75a.75.75 0 0 0 0-1.5v1.5ZM3 4.25a.75.75 0 0 0 0 1.5v-1.5Zm11.594-1.36-.624.417.624-.416Zm-5.188 0-.624-.415.624.416ZM9 22.75h6v-1.5H9v1.5ZM4.25 8v10h1.5V8h-1.5Zm15.5 10V8h-1.5v10h1.5ZM15 22.75A4.75 4.75 0 0 0 19.75 18h-1.5A3.25 3.25 0 0 1 15 21.25v1.5Zm-6-1.5A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM13.25 11v6h1.5v-6h-1.5Zm-4 0v6h1.5v-6h-1.5Zm1.82-8.25h1.86v-1.5h-1.86v1.5Zm2.9.557 1.406 2.109 1.248-.832-1.406-2.11-1.248.833ZM16 4.25H8v1.5h8v-1.5ZM8.624 5.416l1.406-2.11-1.248-.831-1.406 2.109 1.248.832ZM16 5.75h5v-1.5h-5v1.5Zm-8-1.5H3v1.5h5v-1.5Zm4.93-1.5c.418 0 .808.209 1.04.557l1.248-.832A2.75 2.75 0 0 0 12.93 1.25v1.5Zm-1.86-1.5c-.92 0-1.778.46-2.288 1.225l1.248.832a1.25 1.25 0 0 1 1.04-.557v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
