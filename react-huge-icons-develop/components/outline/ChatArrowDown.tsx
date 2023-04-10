import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatArrowDown = (
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
            d='M14.53 13.53a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.823.763.53.53-.53-.53Zm-1.414 0-.53.53.53-.53Zm-.763-1.823a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM12.75 9a.75.75 0 0 0-1.5 0h1.5Zm-1.5 5a.75.75 0 0 0 1.5 0h-1.5Zm2.22-1.53-1.293 1.293 1.06 1.06 1.293-1.293-1.06-1.06Zm-1.647 1.293L10.53 12.47l-1.06 1.06 1.293 1.293 1.06-1.06ZM11.25 9v5h1.5V9h-1.5Zm.927 4.763a.25.25 0 0 1-.354 0l-1.06 1.06a1.75 1.75 0 0 0 2.474 0l-1.06-1.06ZM11 3.75h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatArrowDown);
export default ForwardRef;
