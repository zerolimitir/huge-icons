import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBlood = (
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
            d='M10.845 2.95C8.629 4.878 4 9.463 4 14.111c0 3.89 3.03 7.89 8 7.89 4.97 0 8-4 8-7.89 0-4.648-4.63-9.233-6.845-11.16a1.743 1.743 0 0 0-2.31 0Zm2.012 15.22a.75.75 0 0 0 .287 1.472c2.426-.473 4.005-2.399 4.464-4.48a.75.75 0 1 0-1.464-.324c-.353 1.597-1.54 2.991-3.287 3.331Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlood);
export default ForwardRef;
