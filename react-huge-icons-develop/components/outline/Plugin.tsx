import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlugin = (
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
            d='M8 3.75h12v-1.5H8v1.5ZM1.25 12A3.75 3.75 0 0 0 5 15.75v-1.5A2.25 2.25 0 0 1 2.75 12h-1.5ZM5 8.25A3.75 3.75 0 0 0 1.25 12h1.5A2.25 2.25 0 0 1 5 9.75v-1.5ZM17.25 12A3.75 3.75 0 0 0 21 15.75v-1.5A2.25 2.25 0 0 1 18.75 12h-1.5ZM21 8.25A3.75 3.75 0 0 0 17.25 12h1.5A2.25 2.25 0 0 1 21 9.75v-1.5Zm-7 8A3.75 3.75 0 0 0 10.25 20h1.5A2.25 2.25 0 0 1 14 17.75v-1.5ZM17.75 20A3.75 3.75 0 0 0 14 16.25v1.5A2.25 2.25 0 0 1 16.25 20h1.5Zm5-12V5h-1.5v3h1.5Zm-1.5 8v3h1.5v-3h-1.5ZM18 21.75h2v-1.5h-2v1.5Zm-8-1.5H8v1.5h2v-1.5ZM6.75 8V5h-1.5v3h1.5Zm-1.5 8v3h1.5v-3h-1.5ZM21 15.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 21 14.25v1.5Zm0-6A1.75 1.75 0 0 0 22.75 8h-1.5a.25.25 0 0 1-.25.25v1.5Zm-16 6a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 5 14.25v1.5ZM10.25 20a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 11.75 20h-1.5ZM5 9.75A1.75 1.75 0 0 0 6.75 8h-1.5a.25.25 0 0 1-.25.25v1.5ZM16.25 20c0 .966.784 1.75 1.75 1.75v-1.5a.25.25 0 0 1-.25-.25h-1.5ZM8 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 21.75v-1.5ZM21.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 19h-1.5ZM20 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 2.25v1.5ZM8 2.25A2.75 2.75 0 0 0 5.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlugin);
export default ForwardRef;
