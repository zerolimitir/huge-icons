import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPause = (
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
            d='M6 5.75h2v-1.5H6v1.5ZM9.25 7v10h1.5V7h-1.5ZM8 18.25H6v1.5h2v-1.5ZM4.75 17V7h-1.5v10h1.5ZM6 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 19.75v-1.5ZM9.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 17h-1.5ZM8 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 4.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm10 1.5h2v-1.5h-2v1.5ZM19.25 7v10h1.5V7h-1.5ZM18 18.25h-2v1.5h2v-1.5ZM14.75 17V7h-1.5v10h1.5ZM16 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 19.75v-1.5ZM19.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 17h-1.5ZM18 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 4.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 7h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPause);
export default ForwardRef;
