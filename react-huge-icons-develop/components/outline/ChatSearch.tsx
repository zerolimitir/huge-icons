import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSearch = (
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
            d='M15.03 13.97a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-.06 2.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11 3.75h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5ZM14.25 12A2.25 2.25 0 0 1 12 14.25v1.5A3.75 3.75 0 0 0 15.75 12h-1.5ZM12 14.25A2.25 2.25 0 0 1 9.75 12h-1.5A3.75 3.75 0 0 0 12 15.75v-1.5ZM9.75 12A2.25 2.25 0 0 1 12 9.75v-1.5A3.75 3.75 0 0 0 8.25 12h1.5ZM12 9.75A2.25 2.25 0 0 1 14.25 12h1.5A3.75 3.75 0 0 0 12 8.25v1.5Zm1.97 5.28 1 1 1.06-1.06-1-1-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSearch);
export default ForwardRef;
