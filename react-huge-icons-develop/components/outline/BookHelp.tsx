import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookHelp = (
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
            d='M12 9.25a.75.75 0 0 0 0 1.5v-1.5ZM9.25 8a.75.75 0 0 0 1.5 0h-1.5Zm4 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 8h-1.5Zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 8h1.5ZM12 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 5.25v1.5Zm-5-4h10v-1.5H7v1.5ZM4.75 19V5h-1.5v14h1.5Zm14.5-14v11h1.5V5h-1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm0 15.5h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5ZM13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookHelp);
export default ForwardRef;
