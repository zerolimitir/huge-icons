import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgListViewRectangle = (
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
            d='M10 5.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 6.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-5.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12 6.5a.75.75 0 0 0 0 1.5v-1.5Zm12 1.5a.75.75 0 0 0 0-1.5v1.5Zm-19-12h2v-1.5H3v1.5ZM5.25 7v2h1.5V7h-1.5ZM5 9.25H3v1.5h2v-1.5ZM2.75 9V7h-1.5v2h1.5Zm.25.25A.25.25 0 0 1 2.75 9h-1.5c0 .966.784 1.75 1.75 1.75v-1.5ZM5.25 9a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 6.75 9h-1.5ZM5 6.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 5 5.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 1.25 7h1.5A.25.25 0 0 1 3 6.75v-1.5Zm0 9.5h2v-1.5H3v1.5Zm2.25.25v2h1.5v-2h-1.5ZM5 17.25H3v1.5h2v-1.5ZM2.75 17v-2h-1.5v2h1.5Zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5ZM5.25 17a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 6.75 17h-1.5ZM5 14.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 5 13.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 1.25 15h1.5a.25.25 0 0 1 .25-.25v-1.5Zm7-6.5h6v-1.5h-6v1.5Zm0 8h6v-1.5h-6v1.5Zm0-4h12v-1.5H10v1.5Zm0 8h12v-1.5H10v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgListViewRectangle);
export default ForwardRef;
