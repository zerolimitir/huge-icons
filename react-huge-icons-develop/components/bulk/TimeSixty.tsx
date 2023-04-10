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
            d='M17.25 18a2.75 2.75 0 1 1 5.5 0v2a2.75 2.75 0 1 1-5.5 0v-2ZM20 16.75c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 6.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.513.711l-3 1a.75.75 0 1 1-.474-1.422l2.487-.83V7a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 18A2.75 2.75 0 0 1 14 15.25h2a.75.75 0 0 1 0 1.5h-2c-.69 0-1.25.56-1.25 1.25v.25h1.75a2.25 2.25 0 0 1 0 4.5H14A2.75 2.75 0 0 1 11.25 20v-2Zm1.5 1.75V20c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 0 0-1.5h-1.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 6A4.75 4.75 0 0 1 6 1.25h12A4.75 4.75 0 0 1 22.75 6v6a.75.75 0 0 1-1.28.53l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V6A3.25 3.25 0 0 0 18 2.75H6A3.25 3.25 0 0 0 2.75 6v12A3.25 3.25 0 0 0 6 21.25h2.889a.75.75 0 0 1 0 1.5H6A4.75 4.75 0 0 1 1.25 18V6Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeSixty);
export default ForwardRef;
