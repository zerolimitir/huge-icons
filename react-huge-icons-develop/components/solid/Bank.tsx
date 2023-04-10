import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBank = (
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
            d='M3.033 8.75h17.934c1.02 0 1.42-1.351.572-1.93l-8.395-5.716a2.026 2.026 0 0 0-2.288 0L2.461 6.82c-.849.578-.448 1.929.572 1.929Zm2.467 1.5h3v5h-3v-5Zm13 0h-3v5h3v-5Zm-8 0h3v5h-3v-5Zm9.776 7.053a1 1 0 0 0-.894-.553H4.618a1 1 0 0 0-.894.553l-1 2a1 1 0 0 0 .894 1.447h16.764a1 1 0 0 0 .894-1.447l-1-2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBank);
export default ForwardRef;
