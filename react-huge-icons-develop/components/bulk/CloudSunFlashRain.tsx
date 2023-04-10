import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunFlashRain = (
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
            d='M17 9c-.545 0-1.07.087-1.561.249a7.026 7.026 0 0 0-3.63-3.662 4 4 0 0 1 6.966 3.738A4.988 4.988 0 0 0 17 9Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 .25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V1A.75.75 0 0 1 15 .25Zm5.48 2.27a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0ZM22.75 8a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 12a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 12Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5ZM4 19l5-6v4h3l-5 6v-4H4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunFlashRain);
export default ForwardRef;
