import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeSixty = (
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
            fillRule='evenodd'
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h2.889a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.28-.53V6A4.75 4.75 0 0 0 18 1.25H6ZM12.75 7a.75.75 0 0 0-1.5 0v4.46l-2.487.829a.75.75 0 1 0 .474 1.422l3-1A.75.75 0 0 0 12.75 12V7ZM20 15.25A2.75 2.75 0 0 0 17.25 18v2a2.75 2.75 0 1 0 5.5 0v-2A2.75 2.75 0 0 0 20 15.25ZM18.75 18a1.25 1.25 0 1 1 2.5 0v2a1.25 1.25 0 1 1-2.5 0v-2Zm-7.5 0A2.75 2.75 0 0 1 14 15.25h2a.75.75 0 0 1 0 1.5h-2c-.69 0-1.25.56-1.25 1.25v.25h1.75a2.25 2.25 0 0 1 0 4.5H14A2.75 2.75 0 0 1 11.25 20v-2Zm1.5 1.75V20c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 0 0-1.5h-1.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeSixty);
export default ForwardRef;
