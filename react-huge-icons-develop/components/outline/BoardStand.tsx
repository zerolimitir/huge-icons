import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBoardStand = (
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
            d='M21 17v.75h.75V17H21ZM3 17h-.75v.75H3V17Zm9.75 0a.75.75 0 0 0-1.5 0h1.5ZM15 21.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5Zm13-2.5a.75.75 0 0 0 0-1.5v1.5Zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5Zm14-7.5a.75.75 0 0 0 0-1.5v1.5Zm-8-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4 5.5a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-1-7.5h10v-1.5H7v1.5ZM20.25 7v10h1.5V7h-1.5Zm.75 9.25H3v1.5h18v-1.5ZM3.75 17V7h-1.5v10h1.5ZM17 3.75A3.25 3.25 0 0 1 20.25 7h1.5A4.75 4.75 0 0 0 17 2.25v1.5ZM7 2.25A4.75 4.75 0 0 0 2.25 7h1.5A3.25 3.25 0 0 1 7 3.75v-1.5ZM11.25 17v4h1.5v-4h-1.5Zm.75 4.75h3v-1.5h-3v1.5Zm0-1.5H9v1.5h3v-1.5Zm10-4H2v1.5h20v-1.5Zm-6-9H8v1.5h8v-1.5Zm-4 4H8v1.5h4v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoardStand);
export default ForwardRef;
