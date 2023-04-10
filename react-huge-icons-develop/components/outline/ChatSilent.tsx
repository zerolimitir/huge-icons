import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSilent = (
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
            d='M7 13.25a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-7-5.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM3.53 2.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm15.314 16.374.53-.53-.53.53Zm1.626 2.686a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM7.366 2.95a.75.75 0 0 0 .56 1.392l-.56-1.392Zm12.68 13.345a.75.75 0 1 0 1.28.782l-1.28-.782ZM7 14.75h7v-1.5H7v1.5Zm0-4h3v-1.5H7v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5ZM4.668 4.585A9.73 9.73 0 0 0 1.25 12h1.5a8.23 8.23 0 0 1 2.893-6.274l-.975-1.14ZM2.47 3.53l2.155 2.156 1.06-1.06L3.53 2.47 2.47 3.53Zm2.155 2.156 13.69 13.689 1.06-1.06-13.69-13.69-1.06 1.06Zm13.69 13.689 2.155 2.155 1.06-1.06-2.155-2.156-1.06 1.06Zm.042-1.1A8.215 8.215 0 0 1 13 20.25v1.5a9.72 9.72 0 0 0 6.332-2.335l-.975-1.14ZM11 3.75h2v-1.5h-2v1.5Zm2 0A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5a9.72 9.72 0 0 0-3.634.7l.56 1.392A8.225 8.225 0 0 1 11 3.75v-1.5ZM21.25 12a8.21 8.21 0 0 1-1.204 4.295l1.28.782A9.708 9.708 0 0 0 22.75 12h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSilent);
export default ForwardRef;
