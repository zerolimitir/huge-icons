import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAudioBook = (
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
            d='M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M10 7.618a1 1 0 0 1 1.447-.894l2.764 1.382a1 1 0 0 1 0 1.788l-2.764 1.382A1 1 0 0 1 10 10.382V7.618ZM4 19a3 3 0 0 1 3-3h13v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAudioBook);
export default ForwardRef;
