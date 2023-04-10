import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatSmile = (
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
            d='M8.6 13.55a.75.75 0 1 0-1.2.9l1.2-.9Zm8 .9a.75.75 0 1 0-1.2-.9l1.2.9ZM11 3.75h2v-1.5h-2v1.5ZM2.75 17v-5h-1.5v5h1.5ZM13 20.25H6v1.5h7v-1.5ZM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5Zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5ZM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5Zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5ZM8 14l-.6.45v.001l.002.001.002.003.006.008.02.025.065.08a6.695 6.695 0 0 0 1.127 1.039c.77.56 1.921 1.143 3.378 1.143v-1.5c-1.043 0-1.892-.417-2.496-.857a5.199 5.199 0 0 1-.86-.79 2.054 2.054 0 0 1-.046-.055l.001.001S8.6 13.55 8 14Zm4 2.75c1.457 0 2.608-.583 3.379-1.143a6.698 6.698 0 0 0 1.126-1.039l.066-.08.019-.025a.2.2 0 0 0 .006-.008l.002-.003.001-.001S16.6 14.45 16 14l-.6-.45.001-.002c.001 0 0 0 0 0a5.199 5.199 0 0 1-.905.845c-.604.44-1.453.857-2.496.857v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatSmile);
export default ForwardRef;
