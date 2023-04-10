import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUndo = (
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
            d='M2.25 12a.75.75 0 0 1 1.5 0h-1.5Zm1.954-4.5v.75a.75.75 0 0 1-.75-.75h.75ZM3.454 3a.75.75 0 0 1 1.5 0h-1.5Zm5.171 3.75a.75.75 0 0 1 0 1.5v-1.5ZM3.75 12A8.25 8.25 0 0 0 12 20.25v1.5A9.75 9.75 0 0 1 2.25 12h1.5ZM12 20.25A8.25 8.25 0 0 0 20.25 12h1.5A9.75 9.75 0 0 1 12 21.75v-1.5ZM20.25 12A8.25 8.25 0 0 0 12 3.75v-1.5A9.75 9.75 0 0 1 21.75 12h-1.5ZM12 3.75a8.246 8.246 0 0 0-7.147 4.126l-1.298-.752A9.746 9.746 0 0 1 12 2.25v1.5ZM3.454 7.5V3h1.5v4.5h-1.5Zm.75-.75h4.421v1.5H4.204v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
