import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudentCard = (
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
            d='M14 6v.75h.75V6H14Zm-4 0h-.75v.75H10V6Zm8 6.75a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 5.5a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5ZM5 6.75h14v-1.5H5v1.5ZM21.25 9v10h1.5V9h-1.5ZM19 21.25H5v1.5h14v-1.5ZM2.75 19V9h-1.5v10h1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM21.25 19A2.25 2.25 0 0 1 19 21.25v1.5A3.75 3.75 0 0 0 22.75 19h-1.5ZM19 6.75A2.25 2.25 0 0 1 21.25 9h1.5A3.75 3.75 0 0 0 19 5.25v1.5ZM5 5.25A3.75 3.75 0 0 0 1.25 9h1.5A2.25 2.25 0 0 1 5 6.75v-1.5Zm6 12H7v1.5h4v-1.5Zm-4 0a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75v-1.5Zm4.25-.25a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 12.75 17h-1.5ZM9 14.75A2.25 2.25 0 0 1 11.25 17h1.5A3.75 3.75 0 0 0 9 13.25v1.5Zm0-1.5A3.75 3.75 0 0 0 5.25 17h1.5A2.25 2.25 0 0 1 9 14.75v-1.5ZM13.25 4v2h1.5V4h-1.5ZM14 5.25h-4v1.5h4v-1.5ZM10.75 6V4h-1.5v2h1.5ZM12 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 1.25v1.5Zm0-1.5A2.75 2.75 0 0 0 9.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm6 10h-3v1.5h3v-1.5Zm0 4h-3v1.5h3v-1.5ZM10.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 11.75 12h-1.5ZM9 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 14.75v-1.5ZM7.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 12h1.5ZM9 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 9 9.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudentCard);
export default ForwardRef;
