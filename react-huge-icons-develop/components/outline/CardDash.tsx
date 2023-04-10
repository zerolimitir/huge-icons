import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCardDash = (
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
            d='M6 3.75h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Z'
        />
        <path
            fill='currentColor'
            d='M2 7v-.75a.75.75 0 0 0-.75.75H2Zm20 0h.75a.75.75 0 0 0-.75-.75V7Zm0 4v.75a.75.75 0 0 0 .75-.75H22ZM2 11h-.75c0 .414.336.75.75.75V11Zm0-3.25h20v-1.5H2v1.5ZM21.25 7v4h1.5V7h-1.5Zm.75 3.25H2v1.5h20v-1.5ZM2.75 11V7h-1.5v4h1.5ZM8 17.75a.75.75 0 0 0 0-1.5v1.5Zm-2-1.5a.75.75 0 0 0 0 1.5v-1.5Zm2 0H6v1.5h2v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDash);
export default ForwardRef;
