import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyFavourite = (
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
            d='M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z'
            opacity={0.4}
        />
        <circle cx={1} cy={1} r={1} fill='currentColor' transform='matrix(1 0 0 -1 5 9)' />
        <circle cx={2} cy={2} r={2} fill='currentColor' transform='matrix(1 0 0 -1 10 14)' />
        <path
            fill='currentColor'
            d='m19.221 15.779-.22.22-.222-.22a1.562 1.562 0 1 0-2.21 2.21l1.547 1.546a1.25 1.25 0 0 0 1.768 0l1.547-1.546a1.562 1.562 0 1 0-2.21-2.21Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyFavourite);
export default ForwardRef;
