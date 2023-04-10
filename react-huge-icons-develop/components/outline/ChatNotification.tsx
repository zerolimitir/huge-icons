import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatNotification = (
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
            d='M22.714 11.152a.75.75 0 0 0-1.495.129l1.495-.129Zm-8.995-7.371a.75.75 0 0 0 .129-1.495l-.129 1.495ZM21.25 6A2.25 2.25 0 0 1 19 8.25v1.5A3.75 3.75 0 0 0 22.75 6h-1.5ZM19 8.25A2.25 2.25 0 0 1 16.75 6h-1.5A3.75 3.75 0 0 0 19 9.75v-1.5ZM16.75 6A2.25 2.25 0 0 1 19 3.75v-1.5A3.75 3.75 0 0 0 15.25 6h1.5ZM19 3.75A2.25 2.25 0 0 1 21.25 6h1.5A3.75 3.75 0 0 0 19 2.25v1.5Zm-8 0h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM11 2.25A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5Zm10.22 9.031c.02.237.03.477.03.719h1.5c0-.286-.012-.568-.036-.848l-1.495.129ZM13 3.75c.242 0 .482.01.719.03l.129-1.494A9.868 9.868 0 0 0 13 2.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatNotification);
export default ForwardRef;
