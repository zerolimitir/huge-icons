import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGift = (
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
            d='M12 4.187A4.746 4.746 0 0 0 8 2a2.75 2.75 0 0 0 0 5.5h8A2.75 2.75 0 1 0 16 2c-1.68 0-3.155.872-4 2.187ZM8 6h3.163A3.251 3.251 0 0 0 8 3.5 1.25 1.25 0 1 0 8 6Zm8 0h-3.163A3.251 3.251 0 0 1 16 3.5 1.25 1.25 0 1 1 16 6Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Z'
        />
        <path fill='currentColor' d='M4 12h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;
